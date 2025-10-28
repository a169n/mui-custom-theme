/**
 * Spacing configuration
 * Defines the spacing scale based on a 4px grid system
 */

import { designTokens } from './tokens';

/**
 * Default base unit for spacing calculations
 */
const DEFAULT_UNIT = 4;

/**
 * Parse a spacing key to extract its numeric factor
 */
const parseSpacingKey = (key: string, value: number): number | null => {
  // Handle 'px' key
  if (key === 'px') {
    return value / DEFAULT_UNIT;
  }

  // Skip keys with spaces (not directly mappable)
  if (key.includes(' ')) {
    return null;
  }

  // Normalize keys like "0,5" or "0-5" to "0.5"
  const normalized = key.replace(',', '.').replace('-', '.');
  const factor = Number(normalized);

  return Number.isNaN(factor) ? null : factor;
};

/**
 * Create spacing function from design tokens
 *
 * @example
 * spacing(1)   // returns "4px"
 * spacing(2)   // returns "8px"
 * spacing(0.5) // returns "2px"
 * spacing(3)   // returns "12px"
 */
const createSpacingFunction = () => {
  const spacingTokens = designTokens.primitives.spacing;

  // Build a map of factors to pixel values
  const spacingMap = new Map<number, number>();

  for (const [key, value] of Object.entries(spacingTokens)) {
    const factor = parseSpacingKey(key, value);
    if (factor !== null) {
      spacingMap.set(factor, value);
    }
  }

  // Determine base unit (value for factor 1)
  const baseUnit = spacingTokens[1];

  /**
   * Spacing resolver function
   */
  return (input: number): string => {
    const isNegative = input < 0;
    const factor = Math.abs(input);

    // Try to find exact match in map, otherwise calculate
    const pixels = spacingMap.get(factor) ?? factor * baseUnit;
    const value = `${pixels}px`;

    return isNegative ? `-${value}` : value;
  };
};

const spacing = createSpacingFunction();

export default spacing;
