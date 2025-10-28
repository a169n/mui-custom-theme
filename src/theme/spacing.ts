export type SpacingFunction = (factor: number) => string;

const DEFAULT_UNIT = 4;

const parseSpacingKey = (key: string, value: number): number | null => {
  if (key === 'px') {
    return value / DEFAULT_UNIT;
  }

  if (key.includes(' ')) {
    return null;
  }

  const normalized = key.replace(',', '.').replace('-', '.');
  const factor = Number(normalized);

  return Number.isNaN(factor) ? null : factor;
};

export const createSpacing = (spacingTokens: Record<string, number>): SpacingFunction => {
  const entries = Object.entries(spacingTokens).filter(([, value]) => typeof value === 'number');
  const spacingMap = new Map<number, number>();

  for (const [key, rawValue] of entries) {
    const factor = parseSpacingKey(key, rawValue as number);

    if (factor !== null) {
      spacingMap.set(factor, rawValue as number);
    }
  }

  const baseUnit = (spacingTokens['1'] as number | undefined) ?? DEFAULT_UNIT;

  const resolver: SpacingFunction = (input) => {
    const isNegative = input < 0;
    const factor = Math.abs(input);
    const stored = spacingMap.get(factor);
    const numeric = stored ?? factor * baseUnit;
    const value = `${numeric}px`;

    return isNegative ? `-${value}` : value;
  };

  return resolver;
};
