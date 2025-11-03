/**
 * Type definitions for design tokens
 */

/**
 * Color scale with shades from 50 to 950
 */
export interface ColorScale {
  readonly 50: string;
  readonly 100: string;
  readonly 200: string;
  readonly 300: string;
  readonly 400: string;
  readonly 500: string;
  readonly 600: string;
  readonly 700: string;
  readonly 800: string;
  readonly 900: string;
  readonly 950: string;
}

/**
 * Alpha color scale with opacity values
 */
export interface AlphaColorScale {
  readonly 5: string;
  readonly 10: string;
  readonly 20: string;
  readonly 30: string;
  readonly 40: string;
  readonly 50: string;
  readonly 60: string;
  readonly 70: string;
  readonly 80: string;
  readonly 90: string;
  readonly 100: string;
}

/**
 * Base colors
 */
export interface BaseColors {
  readonly black: string;
  readonly white: string;
  readonly transparent: string;
}

/**
 * Spacing scale
 */
export interface SpacingScale {
  readonly 0: 0;
  readonly px: 1;
  readonly 0.5: 2;
  readonly 1: 4;
  readonly 1.5: 6;
  readonly 2: 8;
  readonly 2.5: 10;
  readonly 3: 12;
  readonly 3.5: 14;
  readonly 4: 16;
  readonly 5: 20;
  readonly 6: 24;
  readonly 7: 28;
  readonly 8: 32;
  readonly 9: 36;
  readonly 10: 40;
  readonly 11: 44;
  readonly 12: 48;
  readonly 14: 56;
  readonly 16: 64;
  readonly 20: 80;
  readonly 24: 96;
  readonly 28: 112;
  readonly 32: 128;
  readonly 36: 144;
  readonly 40: 160;
  readonly 44: 176;
  readonly 48: 192;
  readonly 52: 208;
  readonly 56: 224;
  readonly 60: 240;
  readonly 64: 256;
  readonly 72: 288;
  readonly 80: 320;
  readonly 96: 384;
}

/**
 * Typography token
 */
export interface TypographyToken {
  readonly 'font-size': number;
  readonly 'line-height': number;
}

/**
 * Typography scale
 */
export interface TypographyScale {
  readonly H1: TypographyToken;
  readonly H2: TypographyToken;
  readonly H3: TypographyToken;
  readonly H4: TypographyToken;
  readonly H5: TypographyToken;
  readonly H6: TypographyToken;
  readonly Title: TypographyToken;
  readonly Subtitle: TypographyToken;
  readonly Caption: TypographyToken;
  readonly text2xl: TypographyToken;
  readonly textXl: TypographyToken;
  readonly textL: TypographyToken;
  readonly textM: TypographyToken;
  readonly textS: TypographyToken;
  readonly textXs: TypographyToken;
}

/**
 * Font families
 */
export interface FontFamilies {
  readonly 'font-sans': string;
  readonly 'font-mono': string;
}

/**
 * Border radius scale
 */
export interface RadiusScale {
  readonly xs: number;
  readonly sm: number;
  readonly md: number;
  readonly lg: number;
  readonly xl: number;
  readonly '2xl': number;
  readonly '3xl': number;
  readonly '4xl': number;
  readonly '5xl': number;
  readonly '6xl': number;
  readonly '7xl': number;
}

/**
 * Semantic colors for backgrounds
 */
export interface BackgroundColors {
  readonly default: string;
  readonly muted: string;
  readonly background: string;
  readonly input: string;
  readonly brand: string;
  readonly 'brand-muted': string;
  readonly positive: string;
  readonly 'positive-muted': string;
  readonly negative: string;
  readonly 'negative-muted': string;
  readonly warning: string;
  readonly 'warning-muted': string;
  readonly overlay: string;
}

/**
 * Semantic colors for text
 */
export interface TextColors {
  readonly default: string;
  readonly muted: string;
  readonly light: string;
  readonly dark: string;
  readonly brand: string;
  readonly positive: string;
  readonly negative: string;
  readonly warning: string;
  readonly link: string;
}

/**
 * Semantic colors for icons
 */
export interface IconColors {
  readonly default: string;
  readonly muted: string;
  readonly light: string;
  readonly dark: string;
  readonly brand: string;
  readonly positive: string;
  readonly negative: string;
  readonly warning: string;
  readonly link: string;
}

/**
 * Semantic colors for borders
 */
export interface BorderColors {
  readonly default: string;
  readonly muted: string;
  readonly brand: string;
  readonly positive: string;
  readonly negative: string;
  readonly warning: string;
}

/**
 * Color palette with all color scales
 */
export interface ColorPalette {
  readonly brand: ColorScale;
  readonly neutral: ColorScale;
  readonly green: ColorScale;
  readonly red: ColorScale;
  readonly yellow: ColorScale;
  readonly cyan: ColorScale;
  readonly purple: ColorScale;
}

/**
 * Mode colors (light or dark)
 */
export interface ModeColors {
  readonly bg: BackgroundColors;
  readonly text: TextColors;
  readonly icon: IconColors;
  readonly border: BorderColors;
  readonly colors: ColorPalette;
  readonly custom: {
    readonly focused: string;
    readonly destructive: string;
  };
  readonly 'alpha-black': AlphaColorScale;
  readonly 'alpha-white': AlphaColorScale;
}

/**
 * Complete design tokens structure
 */
export interface DesignTokens {
  readonly primitives: {
    readonly colors: {
      readonly base: BaseColors;
      readonly brand: ColorScale;
      readonly neutral: ColorScale;
      readonly green: ColorScale;
      readonly red: ColorScale;
      readonly yellow: ColorScale;
      readonly cyan: ColorScale;
      readonly purple: ColorScale;
      readonly orange: ColorScale;
      readonly pink: ColorScale;
      readonly rose: ColorScale;
      readonly sky: ColorScale;
      readonly teal: ColorScale;
      readonly lime: ColorScale;
    };
    readonly spacing: SpacingScale;
  };
  readonly theme: {
    readonly font: FontFamilies;
    readonly text: TypographyScale;
    readonly radius: RadiusScale;
  };
  readonly modes: {
    readonly light: ModeColors;
    readonly dark: ModeColors;
  };
}
