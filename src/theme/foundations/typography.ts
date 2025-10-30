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
    letterSpacing: '0px',
  }) as const;

type TextVariantKey =
  | 'title'
  | 'subtitle'
  | 'caption'
  | 'text2xl'
  | 'textXl'
  | 'textL'
  | 'textM'
  | 'textS'
  | 'textXs';

const textVariants: Record<TextVariantKey, ReturnType<typeof createVariant>> = {
  title: createVariant(designTokens.theme.text.Title, FONT_WEIGHTS.Semibold),
  subtitle: createVariant(designTokens.theme.text.Subtitle, FONT_WEIGHTS.Medium),
  caption: createVariant(designTokens.theme.text.Caption, FONT_WEIGHTS.Regular),
  text2xl: createVariant(designTokens.theme.text.text2xl, FONT_WEIGHTS.Regular),
  textXl: createVariant(designTokens.theme.text.textXl, FONT_WEIGHTS.Regular),
  textL: createVariant(designTokens.theme.text.textL, FONT_WEIGHTS.Regular),
  textM: createVariant(designTokens.theme.text.textM, FONT_WEIGHTS.Regular),
  textS: createVariant(designTokens.theme.text.textS, FONT_WEIGHTS.Regular),
  textXs: createVariant(designTokens.theme.text.textXs, FONT_WEIGHTS.Regular),
};

const typography: TypographyOptions = {
  fontFamily: [
    'Roboto',
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

  ...textVariants,

  subtitle1: textVariants.title,
  subtitle2: textVariants.subtitle,

  body1: textVariants.textL,
  body2: textVariants.textM,

  caption: textVariants.caption,

  overline: {
    ...createVariant(designTokens.theme.text.textXs, FONT_WEIGHTS.Medium),
    letterSpacing: '0px',
    textTransform: 'uppercase' as const,
  },

  button: {
    ...createVariant(designTokens.theme.text.textS, FONT_WEIGHTS.Medium),
    letterSpacing: '0px',
    textTransform: 'none' as const,
  },
};

export default typography;
