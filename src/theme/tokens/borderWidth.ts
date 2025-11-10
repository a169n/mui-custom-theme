import type { BorderWidthScale } from './types';

const borderValues: Array<[string, number]> = [
  ['border-0', 0],
  ['border', 1],
  ['border-2', 2],
  ['border-3', 3],
  ['border-4', 4],
  ['border-5', 5],
  ['border-6', 6],
  ['border-7', 7],
  ['border-8', 8],
];

const normalizeBorderAlias = (token: string) => {
  if (token === 'border') {
    return token;
  }

  if (!token.startsWith('border-')) {
    return token;
  }

  const suffix = token.replace('border-', '');
  return `border${suffix.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase())}`;
};

export const borderWidthScale: BorderWidthScale = borderValues.reduce<BorderWidthScale>(
  (acc, [key, value]) => {
    acc[key] = value;
    const alias = normalizeBorderAlias(key);
    if (alias !== key) {
      acc[alias] = value;
    }
    return acc;
  },
  {}
);
