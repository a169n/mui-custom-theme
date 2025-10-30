/**
 * Typography configuration
 */

import type { TypographyOptions } from '@mui/material/styles/createTypography';
import { designTokens } from '../tokens';
import type { TypographyToken } from '../tokens';

const FONT_WEIGHTS = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
} as const;

const toRem = (pixels: number): string => `${pixels / 16}rem`;

const createVariant = (token: TypographyToken, fontWeight: number) =>
  ({
    fontSize: toRem(token['font-size']),
    lineHeight: token['font-size'] === 0 ? 1 : token['line-height'] / token['font-size'],
    fontWeight,
  }) as const;

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

  h1: createVariant(designTokens.theme.text.H1, FONT_WEIGHTS.Bold),
  h2: createVariant(designTokens.theme.text.H2, FONT_WEIGHTS.Bold),
  h3: createVariant(designTokens.theme.text.H3, FONT_WEIGHTS.Semibold),
  h4: createVariant(designTokens.theme.text.H4, FONT_WEIGHTS.Semibold),
  h5: createVariant(designTokens.theme.text.H5, FONT_WEIGHTS.Medium),
  h6: createVariant(designTokens.theme.text.H6, FONT_WEIGHTS.Medium),

  subtitle1: createVariant(designTokens.theme.text.Title, FONT_WEIGHTS.Semibold),
  subtitle2: createVariant(designTokens.theme.text.Subtitle, FONT_WEIGHTS.Medium),

  body1: createVariant(designTokens.theme.text['Text l'], FONT_WEIGHTS.Regular),
  body2: createVariant(designTokens.theme.text['Text m'], FONT_WEIGHTS.Regular),

  caption: createVariant(designTokens.theme.text['Text s'], FONT_WEIGHTS.Regular),

  overline: {
    ...createVariant(designTokens.theme.text['Text xs'], FONT_WEIGHTS.Medium),
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  },

  button: {
    ...createVariant(designTokens.theme.text['Text s'], FONT_WEIGHTS.Medium),
    textTransform: 'none' as const,
  },
};

export default typography;
