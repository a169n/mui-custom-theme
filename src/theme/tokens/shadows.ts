/**
 * Shadow tokens
 */

export type ShadowLevel = 1 | 2 | 3 | 4 | 5;

export type ShadowScale = Record<ShadowLevel, string>;

export interface ShadowPalette {
  readonly black: ShadowScale;
  readonly white: ShadowScale;
  readonly brand: ShadowScale;
  readonly negative: ShadowScale;
  readonly positive: ShadowScale;
}

const formatShadow = (
  offsetX: number,
  offsetY: number,
  blurRadius: number,
  spreadRadius: number,
  color: string,
): string => `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;

export const shadows: ShadowPalette = {
  black: {
    1: formatShadow(0, 1, 4, 0, 'rgba(33, 33, 33, 0.08)'),
    2: formatShadow(0, 4, 6, -1, 'rgba(33, 33, 33, 0.08)'),
    3: formatShadow(0, 10, 16, -3, 'rgba(33, 33, 33, 0.08)'),
    4: formatShadow(0, 20, 24, -5, 'rgba(33, 33, 33, 0.1)'),
    5: formatShadow(0, 24, 50, -12, 'rgba(33, 33, 33, 0.16)'),
  },
  white: {
    1: formatShadow(0, 1, 4, 0, 'rgba(255, 255, 255, 0.08)'),
    2: formatShadow(0, 4, 6, -1, 'rgba(255, 255, 255, 0.08)'),
    3: formatShadow(0, 10, 16, -3, 'rgba(255, 255, 255, 0.08)'),
    4: formatShadow(0, 20, 24, -5, 'rgba(255, 255, 255, 0.1)'),
    5: formatShadow(0, 24, 50, -12, 'rgba(255, 255, 255, 0.16)'),
  },
  brand: {
    1: formatShadow(0, 1, 4, 0, 'rgba(0, 96, 254, 0.08)'),
    2: formatShadow(0, 4, 6, -1, 'rgba(0, 96, 254, 0.08)'),
    3: formatShadow(0, 10, 16, -3, 'rgba(0, 96, 254, 0.08)'),
    4: formatShadow(0, 20, 24, -5, 'rgba(0, 96, 254, 0.1)'),
    5: formatShadow(0, 24, 50, -12, 'rgba(0, 96, 254, 0.16)'),
  },
  negative: {
    1: formatShadow(0, 1, 4, 0, 'rgba(231, 0, 11, 0.08)'),
    2: formatShadow(0, 4, 6, -1, 'rgba(231, 0, 11, 0.08)'),
    3: formatShadow(0, 10, 16, -3, 'rgba(231, 0, 11, 0.08)'),
    4: formatShadow(0, 20, 24, -5, 'rgba(231, 0, 11, 0.1)'),
    5: formatShadow(0, 24, 50, -12, 'rgba(231, 0, 11, 0.16)'),
  },
  positive: {
    1: formatShadow(0, 1, 4, 0, 'rgba(0, 166, 62, 0.08)'),
    2: formatShadow(0, 4, 6, -1, 'rgba(0, 166, 62, 0.08)'),
    3: formatShadow(0, 10, 16, -3, 'rgba(0, 166, 62, 0.08)'),
    4: formatShadow(0, 20, 24, -5, 'rgba(0, 166, 62, 0.1)'),
    5: formatShadow(0, 24, 50, -12, 'rgba(0, 166, 62, 0.16)'),
  },
} as const;

export default shadows;
