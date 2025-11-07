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

const typographyTokens = designTokens.modes.light.typography;

const textVariants: Record<TextVariantKey, ReturnType<typeof createVariant>> = {
  title: createVariant(typographyTokens.Title, FONT_WEIGHTS.Semibold),
  subtitle: createVariant(typographyTokens.Subtitle, FONT_WEIGHTS.Medium),
  caption: createVariant(typographyTokens.Caption, FONT_WEIGHTS.Regular),
  text2xl: createVariant(typographyTokens.text2xl, FONT_WEIGHTS.Regular),
  textXl: createVariant(typographyTokens.textXl, FONT_WEIGHTS.Regular),
  textL: createVariant(typographyTokens.textL, FONT_WEIGHTS.Regular),
  textM: createVariant(typographyTokens.textM, FONT_WEIGHTS.Regular),
  textS: createVariant(typographyTokens.textS, FONT_WEIGHTS.Regular),
  textXs: createVariant(typographyTokens.textXs, FONT_WEIGHTS.Regular),
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

  h1: createVariant(typographyTokens.H1, FONT_WEIGHTS.Bold),
  h2: createVariant(typographyTokens.H2, FONT_WEIGHTS.Bold),
  h3: createVariant(typographyTokens.H3, FONT_WEIGHTS.Semibold),
  h4: createVariant(typographyTokens.H4, FONT_WEIGHTS.Semibold),
  h5: createVariant(typographyTokens.H5, FONT_WEIGHTS.Medium),
  h6: createVariant(typographyTokens.H6, FONT_WEIGHTS.Medium),

  ...textVariants,

  subtitle1: textVariants.title,
  subtitle2: textVariants.subtitle,

  body1: textVariants.textL,
  body2: textVariants.textM,

  caption: textVariants.caption,

  overline: {
    ...createVariant(typographyTokens.textXs, FONT_WEIGHTS.Medium),
    letterSpacing: '0px',
    textTransform: 'uppercase' as const,
  },

  button: {
    ...createVariant(typographyTokens.textS, FONT_WEIGHTS.Medium),
    letterSpacing: '0px',
    textTransform: 'none' as const,
  },
};

export default typography;
