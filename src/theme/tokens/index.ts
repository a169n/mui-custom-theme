/**
 * Design Tokens - Main export
 *
 * All design tokens are organized into separate modules for better maintainability.
 * This file aggregates all tokens and provides a single source of truth.
 */

import type { DesignTokens, ModeColorTokens, ModeTokens } from './types';
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
  tealColors,
  yellowColors,
} from './colors';
import { darkMode, lightMode } from './modes';
import { widthScale, heightScale } from './dimensions';
import { lineHeightScale } from './lineHeight';
import { opacityScale } from './opacity';
import { borderWidthScale } from './borderWidth';
import { radius } from './radius';
import { spacing } from './spacing';
import { fontFamilies, typographyScale } from './typography';
import { shadows } from './shadows';
import { fontWeights } from './fontWeight';
import { containerScale, breakpointScale } from './layout';

const addFriendlyAlias = (store: Record<string, number>, alias: string, value: number) => {
  store[alias] = value;
  if (/^\d/.test(alias)) {
    store[`_${alias}`] = value;
  }
};

const borderRadiusEntries = [
  ['rounded-none', 0],
  ['rounded-xs', radius.xs],
  ['rounded-sm', radius.sm],
  ['rounded-md', radius.md],
  ['rounded-lg', radius.lg],
  ['rounded-xl', radius.xl],
  ['rounded-2xl', radius['2xl']],
  ['rounded-3xl', radius['3xl']],
  ['rounded-4xl', radius['4xl']],
  ['rounded-5xl', radius['5xl']],
  ['rounded-6xl', radius['6xl']],
  ['rounded-7xl', radius['7xl']],
  ['rounded-full', 9999],
] as const satisfies ReadonlyArray<[string, number]>;

const borderRadiusTokens = borderRadiusEntries.reduce<Record<string, number>>((acc, [token, value]) => {
  acc[token] = value;
  const alias = token.replace('rounded-', '');
  addFriendlyAlias(acc, alias, value);
  return acc;
}, {});

const buildModeTokens = (appearance: ModeColorTokens): ModeTokens => ({
  font: fontFamilies,
  typography: typographyScale,
  breakpoint: breakpointScale,
  container: containerScale,
  fontWeight: fontWeights,
  radius,
  shadow: shadows,
  ...appearance,
});

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
      teal: tealColors,
      lime: limeColors,
    },
    spacing,
    width: widthScale,
    height: heightScale,
    borderRadius: borderRadiusTokens,
    borderWidth: borderWidthScale,
    opacity: opacityScale,
    lineHeight: lineHeightScale,
    default: neutralColors[950],
  },
  modes: {
    light: buildModeTokens(lightMode),
    dark: buildModeTokens(darkMode),
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
export * from './dimensions';
export * from './lineHeight';
export * from './opacity';
export * from './borderWidth';
export * from './fontWeight';
export * from './layout';
export { shadows } from './shadows';
export type { ShadowLevel } from './shadows';

// Default export
export default designTokens;
