import type { DimensionScale } from './types';
import { spacing } from './spacing';

const formatKey = (prefix: string, key: string) => {
  if (key === 'px') {
    return `${prefix}-px`;
  }

  return `${prefix}-${key.replace('.', ',')}`;
};

const buildDimensionScale = (prefix: string): DimensionScale =>
  Object.entries(spacing).reduce<DimensionScale>((acc, [key, value]) => {
    acc[formatKey(prefix, key)] = value;
    return acc;
  }, {});

export const widthScale: DimensionScale = buildDimensionScale('w');
export const heightScale: DimensionScale = buildDimensionScale('h');
