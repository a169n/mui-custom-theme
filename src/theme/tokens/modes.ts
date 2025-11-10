/**
 * Mode-specific color tokens (light and dark)
 */

import type { AlphaColorScale, ColorScale, ModeColorTokens } from './types';
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

const alphaBlackScale: AlphaColorScale = {
  5: 'rgba(10, 10, 10, 0.95)',
  10: 'rgba(10, 10, 10, 0.9)',
  20: 'rgba(10, 10, 10, 0.8)',
  30: 'rgba(10, 10, 10, 0.7)',
  40: 'rgba(10, 10, 10, 0.6)',
  50: 'rgba(10, 10, 10, 0.5)',
  60: 'rgba(10, 10, 10, 0.4)',
  70: 'rgba(10, 10, 10, 0.3)',
  80: 'rgba(10, 10, 10, 0.2)',
  90: 'rgba(10, 10, 10, 0.1)',
  100: 'rgba(10, 10, 10, 0.05)',
};

const alphaWhiteScale: AlphaColorScale = {
  5: 'rgba(255, 255, 255, 0.95)',
  10: 'rgba(255, 255, 255, 0.9)',
  20: 'rgba(255, 255, 255, 0.8)',
  30: 'rgba(255, 255, 255, 0.7)',
  40: 'rgba(255, 255, 255, 0.6)',
  50: 'rgba(255, 255, 255, 0.5)',
  60: 'rgba(255, 255, 255, 0.4)',
  70: 'rgba(255, 255, 255, 0.3)',
  80: 'rgba(255, 255, 255, 0.2)',
  90: 'rgba(255, 255, 255, 0.1)',
  100: 'rgba(255, 255, 255, 0.05)',
};

const invertScale = (scale: ColorScale): ColorScale => ({
  50: scale[950],
  100: scale[900],
  200: scale[800],
  300: scale[700],
  400: scale[600],
  500: scale[500],
  600: scale[400],
  700: scale[300],
  800: scale[200],
  900: scale[100],
  950: scale[50],
});

const buildSurfaceTone = (base: string, muted: string) =>
  ({
    default: base,
    muted,
  }) as const;

/**
 * Light mode colors
 */
export const lightMode: ModeColorTokens = {
  bg: {
    default: '#ffffff',
    muted: '#f5f5f5',
    background: '#f5f5f5',
    input: '#e5e5e5',
    brand: buildSurfaceTone('#0060fe', '#edf8ff'),
    positive: buildSurfaceTone('#00a63e', '#dcfce7'),
    negative: buildSurfaceTone('#e7000b', '#fef2f2'),
    warning: buildSurfaceTone('#fe9a00', '#fffbeb'),
    overlay: 'rgba(10, 10, 10, 0.1)',
  },
  text: {
    default: '#0a0a0a',
    muted: '#737373',
    light: '#ffffff',
    dark: '#0a0a0a',
    brand: '#0060fe',
    positive: '#00a63e',
    negative: '#e7000b',
    warning: '#fe9a00',
    link: '#0060fe',
  },
  icon: {
    default: '#0a0a0a',
    muted: '#737373',
    light: '#ffffff',
    dark: '#0a0a0a',
    brand: '#0060fe',
    positive: '#00a63e',
    negative: '#e7000b',
    warning: '#fe9a00',
    link: '#0060fe',
  },
  border: {
    default: '#d4d4d4',
    muted: '#e5e5e5',
    brand: '#0060fe',
    positive: '#00a63e',
    negative: '#e7000b',
    warning: '#fe9a00',
  },
  colors: {
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
  custom: {
    focused: 'rgba(0, 96, 254, 0.3)',
    destructive: 'rgba(251, 44, 54, 0.3)',
  },
  logo: {
    default: '#27348b',
    stage: redColors[600],
    test: greenColors[600],
  },
  alpha: {
    black: alphaBlackScale,
    white: alphaWhiteScale,
  },
} as const;

/**
 * Dark mode colors (inverted scales)
 */
export const darkMode: ModeColorTokens = {
  bg: {
    default: '#171717',
    muted: '#262626',
    background: '#0a0a0a',
    input: '#404040',
    brand: buildSurfaceTone('#0675ff', 'rgba(14, 41, 93, 0.8)'),
    positive: buildSurfaceTone('#00a63e', '#052e16'),
    negative: buildSurfaceTone('#fb2c36', '#460809'),
    warning: buildSurfaceTone('#fe9a00', '#461901'),
    overlay: 'rgba(255, 255, 255, 0.5)',
  },
  text: {
    default: '#f5f5f5',
    muted: '#a1a1a1',
    light: '#ffffff',
    dark: '#0a0a0a',
    brand: '#1e95ff',
    positive: '#00a63e',
    negative: '#fb2c36',
    warning: '#fe9a00',
    link: '#1e95ff',
  },
  icon: {
    default: '#f5f5f5',
    muted: '#a1a1a1',
    light: '#ffffff',
    dark: '#0a0a0a',
    brand: '#1e95ff',
    positive: '#00a63e',
    negative: '#fb2c36',
    warning: '#fe9a00',
    link: '#1e95ff',
  },
  border: {
    default: '#404040',
    muted: '#262626',
    brand: '#1e95ff',
    positive: '#00a63e',
    negative: '#fb2c36',
    warning: '#fe9a00',
  },
  colors: {
    brand: invertScale(brandColors),
    neutral: invertScale(neutralColors),
    green: invertScale(greenColors),
    red: invertScale(redColors),
    yellow: invertScale(yellowColors),
    cyan: invertScale(cyanColors),
    purple: invertScale(purpleColors),
    orange: invertScale(orangeColors),
    pink: invertScale(pinkColors),
    rose: invertScale(roseColors),
    teal: invertScale(tealColors),
    lime: invertScale(limeColors),
  },
  custom: {
    focused: 'rgba(0, 96, 254, 0.8)',
    destructive: 'rgba(251, 44, 54, 0.8)',
  },
  logo: {
    default: baseColors.white,
    stage: redColors[400],
    test: greenColors[400],
  },
  alpha: {
    black: alphaBlackScale,
    white: alphaWhiteScale,
  },
} as const;

export default {
  lightMode,
  darkMode,
};
