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

export type DimensionScale = Record<string, number>;

export type BorderWidthScale = Record<string, number>;

export type OpacityScale = Record<string, number>;

export type LineHeightScale = Record<string, number>;

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

export interface FontWeightScale {
  readonly Regular: string;
  readonly Medium: string;
  readonly Semibold: string;
  readonly Bold: string;
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
 * Shadow scale with levels 1 to 5
 */
export interface ShadowScale {
  readonly 1: string;
  readonly 2: string;
  readonly 3: string;
  readonly 4: string;
  readonly 5: string;
}

/**
 * Shadow palette definitions
 */
export interface ShadowPalette {
  readonly black: ShadowScale;
  readonly white: ShadowScale;
  readonly brand: ShadowScale;
  readonly negative: ShadowScale;
  readonly positive: ShadowScale;
}

export interface BreakpointScale {
  readonly sm: number;
  readonly md: number;
  readonly lg: number;
  readonly xl: number;
  readonly '2xl': number;
  readonly '3xl': number;
}

export interface ContainerScale {
  readonly '3xs': number;
  readonly '2xs': number;
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
  readonly '8xl': number;
}

/**
 * Semantic colors for backgrounds
 */
export interface ToneBackground {
  readonly default: string;
  readonly muted: string;
}

export interface BackgroundColors {
  readonly default: string;
  readonly muted: string;
  readonly background: string;
  readonly input: string;
  readonly brand: ToneBackground;
  readonly positive: ToneBackground;
  readonly negative: ToneBackground;
  readonly warning: ToneBackground;
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

export interface LogoColors {
  readonly default: string;
  readonly stage: string;
  readonly test: string;
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
  readonly orange?: ColorScale;
  readonly pink?: ColorScale;
  readonly rose?: ColorScale;
  readonly teal?: ColorScale;
  readonly lime?: ColorScale;
}

export interface CustomModeColors {
  readonly focused: string;
  readonly destructive: string;
}

export interface ModeColorTokens {
  readonly bg: BackgroundColors;
  readonly text: TextColors;
  readonly icon: IconColors;
  readonly border: BorderColors;
  readonly colors: ColorPalette;
  readonly custom: CustomModeColors;
  readonly logo: LogoColors;
  readonly alpha: {
    readonly black: AlphaColorScale;
    readonly white: AlphaColorScale;
  };
}

export interface ModeFoundationTokens {
  readonly font: FontFamilies;
  readonly typography: TypographyScale;
  readonly breakpoint: BreakpointScale;
  readonly container: ContainerScale;
  readonly fontWeight: FontWeightScale;
  readonly radius: RadiusScale;
  readonly shadow: ShadowPalette;
}

export type ModeTokens = ModeColorTokens & ModeFoundationTokens;

export interface PrimitiveTokens {
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
    readonly teal: ColorScale;
    readonly lime: ColorScale;
  };
  readonly spacing: SpacingScale;
  readonly width: DimensionScale;
  readonly height: DimensionScale;
  readonly borderRadius: Record<string, number>;
  readonly borderWidth: BorderWidthScale;
  readonly opacity: OpacityScale;
  readonly lineHeight: LineHeightScale;
  readonly default: string;
}

/**
 * Complete design tokens structure
 */
export interface DesignTokens {
  readonly primitives: PrimitiveTokens;
  readonly modes: {
    readonly light: ModeTokens;
    readonly dark: ModeTokens;
  };
}
