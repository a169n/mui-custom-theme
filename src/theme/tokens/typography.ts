/**
 * Typography tokens
 */

import type { FontFamilies, TypographyScale } from './types';

/**
 * Font families
 */
export const fontFamilies: FontFamilies = {
  'font-sans': 'Roboto',
  'font-mono': 'Roboto Mono',
} as const;

/**
 * Typography scale
 */
export const typographyScale: TypographyScale = {
  H1: {
    'font-size': 44,
    'line-height': 48,
  },
  H2: {
    'font-size': 40,
    'line-height': 44,
  },
  H3: {
    'font-size': 36,
    'line-height': 40,
  },
  H4: {
    'font-size': 32,
    'line-height': 36,
  },
  H5: {
    'font-size': 28,
    'line-height': 32,
  },
  H6: {
    'font-size': 24,
    'line-height': 28,
  },
  Title: {
    'font-size': 20,
    'line-height': 24,
  },
  Subtitle: {
    'font-size': 16,
    'line-height': 20,
  },
  Caption: {
    'font-size': 14,
    'line-height': 16,
  },
  text2xl: {
    'font-size': 20,
    'line-height': 28,
  },
  textXl: {
    'font-size': 18,
    'line-height': 24,
  },
  textL: {
    'font-size': 16,
    'line-height': 24,
  },
  textM: {
    'font-size': 14,
    'line-height': 20,
  },
  textS: {
    'font-size': 12,
    'line-height': 16,
  },
  textXs: {
    'font-size': 10,
    'line-height': 12,
  },
} as const;
