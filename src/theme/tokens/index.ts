/**
 * Design Tokens - Main export
 *
 * All design tokens are organized into separate modules for better maintainability.
 * This file aggregates all tokens and provides a single source of truth.
 */

import type { DesignTokens } from './types';
import {
  baseColors,
  brandColors,
  cyanColors,
  greenColors,
  limeColors,
  neutralColors,
  orangeColors,
  pinkColors,
  purpleColors,
  redColors,
  roseColors,
  skyColors,
  tealColors,
  yellowColors,
} from './colors';
import { darkMode, lightMode } from './modes';
import { radius } from './radius';
import { spacing } from './spacing';
import { fontFamilies, typographyScale } from './typography';

/**
 * Complete design tokens
 */
export const designTokens: DesignTokens = {
  primitives: {
    colors: {
      base: baseColors,
      brand: brandColors,
      neutral: neutralColors,
      green: greenColors,
      red: redColors,
      yellow: yellowColors,
      cyan: cyanColors,
      purple: purpleColors,
      orange: orangeColors,
      pink: pinkColors,
      rose: roseColors,
      sky: skyColors,
      teal: tealColors,
      lime: limeColors,
    },
    spacing,
  },
  theme: {
    font: fontFamilies,
    text: typographyScale,
    radius,
  },
  modes: {
    light: lightMode,
    dark: darkMode,
  },
} as const;

// Export types
export type * from './types';

// Export individual token modules for direct access if needed
export * from './colors';
export * from './spacing';
export * from './typography';
export * from './radius';
export * from './modes';

// Default export
export default designTokens;
