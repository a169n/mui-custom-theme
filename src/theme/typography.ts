/**
 * Typography configuration
 * Defines font families, sizes, weights, and text styles
 */

import type { TypographyOptions } from '@mui/material/styles/createTypography';
import { designTokens } from './tokens';
import type { TypographyToken } from './tokens';

/**
 * Font weight constants
 */
const FONT_WEIGHTS = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
} as const;

/**
 * Convert pixels to rem units
 */
const toRem = (pixels: number): string => `${pixels / 16}rem`;

/**
 * Create a typography variant from a design token
 */
const createVariant = (token: TypographyToken, fontWeight: number) =>
  ({
    fontSize: toRem(token['font-size']),
    lineHeight: token['font-size'] === 0 ? 1 : token['line-height'] / token['font-size'],
    fontWeight,
  }) as const;

/**
 * Typography configuration
 */
const typography: TypographyOptions = {
  fontFamily: [
    designTokens.theme.font['font-sans'],
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Helvetica',
    'Arial',
    'sans-serif',
  ].join(', '),

  fontWeightLight: FONT_WEIGHTS.Light,
  fontWeightRegular: FONT_WEIGHTS.Regular,
  fontWeightMedium: FONT_WEIGHTS.Medium,
  fontWeightBold: FONT_WEIGHTS.Bold,

  // Headings
  h1: createVariant(designTokens.theme.text.H1, FONT_WEIGHTS.Bold),
  h2: createVariant(designTokens.theme.text.H2, FONT_WEIGHTS.Bold),
  h3: createVariant(designTokens.theme.text.H3, FONT_WEIGHTS.Semibold),
  h4: createVariant(designTokens.theme.text.H4, FONT_WEIGHTS.Semibold),
  h5: createVariant(designTokens.theme.text.H5, FONT_WEIGHTS.Medium),
  h6: createVariant(designTokens.theme.text.H6, FONT_WEIGHTS.Medium),

  // Subtitles
  subtitle1: createVariant(designTokens.theme.text.Title, FONT_WEIGHTS.Semibold),
  subtitle2: createVariant(designTokens.theme.text.Subtitle, FONT_WEIGHTS.Medium),

  // Body text
  body1: createVariant(designTokens.theme.text['Text l'], FONT_WEIGHTS.Regular),
  body2: createVariant(designTokens.theme.text['Text m'], FONT_WEIGHTS.Regular),

  // Small text
  caption: createVariant(designTokens.theme.text['Text s'], FONT_WEIGHTS.Regular),

  // Overline (uppercase small text)
  overline: {
    ...createVariant(designTokens.theme.text['Text xs'], FONT_WEIGHTS.Medium),
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  },

  // Button text
  button: {
    ...createVariant(designTokens.theme.text['Text s'], FONT_WEIGHTS.Medium),
    textTransform: 'none' as const,
  },
};

export default typography;
