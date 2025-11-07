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

export const borderWidthScale: BorderWidthScale = borderValues.reduce<BorderWidthScale>(
  (acc, [key, value]) => {
    acc[key] = value;
    return acc;
  },
  {}
);
