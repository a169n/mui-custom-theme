/**
 * TypeScript declarations for MUI theme extensions
 */

import type { CSSProperties } from 'react';
import type { PaletteColorScale } from './foundations/palette.utils';
import type { AlphaColorScale, DesignTokens } from './tokens';

declare module '@mui/material/styles' {
  interface Theme {
    tokens: DesignTokens;
  }

  interface ThemeOptions {
    tokens?: DesignTokens;
  }

  interface Palette {
    brand: PaletteColorScale;
    gray: PaletteColorScale;
    green: PaletteColorScale;
    red: PaletteColorScale;
    yellow: PaletteColorScale;
    cyan: PaletteColorScale;
    purple: PaletteColorScale;
    orange: PaletteColorScale;
    pink: PaletteColorScale;
    rose: PaletteColorScale;
    sky: PaletteColorScale;
    teal: PaletteColorScale;
    lime: PaletteColorScale;
    white: {
      main: string;
      contrastText: string;
    };
    black: {
      main: string;
      contrastText: string;
    };
    alpha: {
      black: AlphaColorScale;
      white: AlphaColorScale;
    };
  }

  interface PaletteOptions {
    brand?: PaletteColorScale;
    gray?: PaletteColorScale;
    green?: PaletteColorScale;
    red?: PaletteColorScale;
    yellow?: PaletteColorScale;
    cyan?: PaletteColorScale;
    purple?: PaletteColorScale;
    orange?: PaletteColorScale;
    pink?: PaletteColorScale;
    rose?: PaletteColorScale;
    sky?: PaletteColorScale;
    teal?: PaletteColorScale;
    lime?: PaletteColorScale;
    white?: {
      main: string;
      contrastText?: string;
    };
    black?: {
      main: string;
      contrastText?: string;
    };
    alpha?: {
      black?: AlphaColorScale;
      white?: AlphaColorScale;
    };
  }

  interface TypographyVariants {
    title: CSSProperties;
    subtitle: CSSProperties;
    caption: CSSProperties;
    text2xl: CSSProperties;
    textXl: CSSProperties;
    textL: CSSProperties;
    textM: CSSProperties;
    textS: CSSProperties;
    textXs: CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: CSSProperties;
    subtitle?: CSSProperties;
    caption?: CSSProperties;
    text2xl?: CSSProperties;
    textXl?: CSSProperties;
    textL?: CSSProperties;
    textM?: CSSProperties;
    textS?: CSSProperties;
    textXs?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    subtitle: true;
    caption: true;
    text2xl: true;
    textXl: true;
    textL: true;
    textM: true;
    textS: true;
    textXs: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    outline: true;
    ghost: true;
    link: true;
  }
}

declare module '@mui/material' {
  interface Color {
    950?: string;
  }
}
