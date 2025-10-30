/**
 * Spacing configuration
 */

import { designTokens } from '../tokens';

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

const createSpacingFunction = () => {
  const spacingTokens = designTokens.primitives.spacing;

  const spacingMap = new Map<number, number>();

  for (const [key, value] of Object.entries(spacingTokens)) {
    const factor = parseSpacingKey(key, value as number);
    if (factor !== null) {
      spacingMap.set(factor, value as number);
    }
  }

  const baseUnit = spacingTokens[1];

  return (input: number): string => {
    const isNegative = input < 0;
    const factor = Math.abs(input);

    const pixels = spacingMap.get(factor) ?? factor * (baseUnit as number);
    const value = `${pixels}px`;

    return isNegative ? `-${value}` : value;
  };
};

const spacing = createSpacingFunction();

export default spacing;
