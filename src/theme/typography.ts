import type { TypographyOptions } from '@mui/material/styles';
import type { DesignTokens } from './tokens';

const FONT_WEIGHTS: Record<string, number> = {
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
};

const toRem = (value: number) => `${value / 16}rem`;

const createVariant = (
  token: { 'font-size': number; 'line-height': number },
  weight: number,
) => ({
  fontSize: toRem(token['font-size']),
  lineHeight: token['font-size'] === 0 ? 1 : token['line-height'] / token['font-size'],
  fontWeight: weight,
});

export const createTypography = (tokens: DesignTokens): TypographyOptions => {
  const base = tokens.theme.base;
  const fontFamilies = base.font as Record<string, string>;
  const textTokens = base.text as Record<string, { 'font-size': number; 'line-height': number }>;

  const primaryFont = fontFamilies['font-sans'] ?? 'Roboto';
  const fontFamily = [
    primaryFont,
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Helvetica',
    'Arial',
    'sans-serif',
  ].join(', ');

  return {
    fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: FONT_WEIGHTS.Regular,
    fontWeightMedium: FONT_WEIGHTS.Medium,
    fontWeightBold: FONT_WEIGHTS.Bold,
    h1: createVariant(textTokens.H1, FONT_WEIGHTS.Bold),
    h2: createVariant(textTokens.H2, FONT_WEIGHTS.Bold),
    h3: createVariant(textTokens.H3, FONT_WEIGHTS.Semibold),
    h4: createVariant(textTokens.H4, FONT_WEIGHTS.Semibold),
    h5: createVariant(textTokens.H5, FONT_WEIGHTS.Medium),
    h6: createVariant(textTokens.H6, FONT_WEIGHTS.Medium),
    subtitle1: createVariant(textTokens.Title, FONT_WEIGHTS.Semibold),
    subtitle2: createVariant(textTokens.Subtitle, FONT_WEIGHTS.Medium),
    body1: createVariant(textTokens['Text l'], FONT_WEIGHTS.Regular),
    body2: createVariant(textTokens['Text m'], FONT_WEIGHTS.Regular),
    caption: createVariant(textTokens['Text s'], FONT_WEIGHTS.Regular),
    overline: {
      ...createVariant(textTokens['Text xs'], FONT_WEIGHTS.Medium),
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    button: {
      ...createVariant(textTokens['Text s'], FONT_WEIGHTS.Medium),
      textTransform: 'none',
    },
  } satisfies TypographyOptions;
};
