import rawTokens from '../../BI_Design_UI_variables.json';

type RawTokenValue = {
  $value: string | number;
};

type PlainObject = Record<string, unknown>;

type TokenGroup = Record<string, unknown>;

type DesignTokenSections = {
  primitives: PlainObject;
  theme: PlainObject;
  modes: PlainObject;
};

const KEY_ALIASES: Record<string, string> = {
  '🎨colors': 'colors',
};

const REFERENCE_PATTERN = /\{([^}]+)\}/g;

function renameKey(key: string): string {
  return KEY_ALIASES[key] ?? key;
}

function isTokenValue(value: unknown): value is RawTokenValue {
  return Boolean(
    value && typeof value === 'object' && '$value' in (value as Record<string, unknown>),
  );
}

function stripMetadata(node: unknown): unknown {
  if (isTokenValue(node)) {
    return node.$value;
  }

  if (Array.isArray(node)) {
    return node.map((item) => stripMetadata(item));
  }

  if (node && typeof node === 'object') {
    return Object.fromEntries(
      Object.entries(node as PlainObject).map(([key, value]) => [renameKey(key), stripMetadata(value)]),
    );
  }

  return node;
}

function createSections(): DesignTokenSections {
  return (rawTokens as PlainObject[]).reduce(
    (acc, section) => {
      const [originalKey, value] = Object.entries(section)[0] as [string, unknown];
      if (!originalKey) {
        return acc;
      }

      const sanitized = stripMetadata(value);

      if (originalKey.startsWith('1.')) {
        acc.primitives = sanitized as PlainObject;
      } else if (originalKey.startsWith('2.')) {
        acc.theme = sanitized as PlainObject;
      } else if (originalKey.startsWith('3.')) {
        acc.modes = sanitized as PlainObject;
      }

      return acc;
    },
    {
      primitives: {},
      theme: {},
      modes: {},
    } satisfies DesignTokenSections,
  );
}

function getByPath(context: PlainObject, path: string): unknown {
  const segments = path.split('.');

  let current: unknown = context;

  for (const segment of segments) {
    if (!current || typeof current !== 'object') {
      return undefined;
    }

    current = (current as PlainObject)[segment];
  }

  return current;
}

function resolveString(value: string, context: PlainObject, stack: Set<string>): unknown {
  const matches = Array.from(value.matchAll(REFERENCE_PATTERN));

  if (matches.length === 0) {
    return value;
  }

  if (matches.length === 1 && matches[0][0] === value) {
    const path = matches[0][1];

    if (stack.has(path)) {
      throw new Error(`Circular token reference detected for path: ${path}`);
    }

    stack.add(path);
    const resolved = getByPath(context, path);

    if (resolved === undefined) {
      throw new Error(`Unable to resolve token reference: ${path}`);
    }

    if (typeof resolved === 'string') {
      return resolveString(resolved, context, stack);
    }

    return resolved;
  }

  return value.replace(REFERENCE_PATTERN, (_, path: string) => {
    const resolved = getByPath(context, path);

    if (resolved === undefined) {
      throw new Error(`Unable to resolve token reference: ${path}`);
    }

    if (typeof resolved === 'string') {
      return String(resolveString(resolved, context, new Set(stack)));
    }

    return String(resolved);
  });
}

function resolveNode<T>(node: T, context: PlainObject, stack: Set<string> = new Set()): T {
  if (typeof node === 'string') {
    return resolveString(node, context, stack) as T;
  }

  if (typeof node === 'number' || typeof node === 'boolean' || node === null) {
    return node;
  }

  if (Array.isArray(node)) {
    return node.map((item) => resolveNode(item, context, new Set(stack))) as T;
  }

  if (node && typeof node === 'object') {
    const entries = Object.entries(node as PlainObject).map(([key, value]) => [
      key,
      resolveNode(value, context, new Set(stack)),
    ]);

    return Object.fromEntries(entries) as T;
  }

  return node;
}

const sections = createSections();

const primitivesLight = sections.primitives?.modes
  ? ((sections.primitives as PlainObject).modes as PlainObject)['Light']
  : undefined;

const themeMode = sections.theme?.modes
  ? ((sections.theme as PlainObject).modes as PlainObject)['Mode 1']
  : undefined;

const modeLight = sections.modes?.modes
  ? ((sections.modes as PlainObject).modes as PlainObject)['Light']
  : undefined;

const modeDark = sections.modes?.modes
  ? ((sections.modes as PlainObject).modes as PlainObject)['Dark']
  : undefined;

if (!primitivesLight || !themeMode || !modeLight || !modeDark) {
  throw new Error('Design token structure is missing expected modes.');
}

const primitiveContext: PlainObject = {
  ...primitivesLight,
  ...themeMode,
};

const lightContext: PlainObject = {
  ...primitiveContext,
  ...modeLight,
};

const darkContext: PlainObject = {
  ...primitiveContext,
  ...modeDark,
};

const resolvedPrimitivesLight = resolveNode(primitivesLight, primitiveContext) as TokenGroup;
const resolvedThemeMode = resolveNode(themeMode, {
  ...themeMode,
  ...primitivesLight,
}) as TokenGroup;
const resolvedLightMode = resolveNode(modeLight, lightContext) as TokenGroup;
const resolvedDarkMode = resolveNode(modeDark, darkContext) as TokenGroup;

export interface ParsedDesignTokens {
  primitives: { light: TokenGroup };
  theme: { base: TokenGroup };
  modes: { light: TokenGroup; dark: TokenGroup };
}

export const designTokens: ParsedDesignTokens = {
  primitives: {
    light: resolvedPrimitivesLight,
  },
  theme: {
    base: resolvedThemeMode,
  },
  modes: {
    light: resolvedLightMode,
    dark: resolvedDarkMode,
  },
};

export type DesignTokens = ParsedDesignTokens;
export type LightModeTokens = TokenGroup;
export type DarkModeTokens = TokenGroup;
export type PrimitiveTokens = TokenGroup;
export type ThemeModeTokens = TokenGroup;

export const primitiveTokens = designTokens.primitives.light;
export const themeTokens = designTokens.theme.base;
export const lightModeTokens = designTokens.modes.light;
export const darkModeTokens = designTokens.modes.dark;
