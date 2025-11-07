/**
 * Mode-specific color tokens (light and dark)
 */

import type { AlphaColorScale, ModeColors } from './types';
import {
  brandColors,
  cyanColors,
  greenColors,
  neutralColors,
  purpleColors,
  redColors,
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

/**
 * Light mode colors
 */
export const lightMode: ModeColors = {
  bg: {
    default: '#ffffff',
    muted: '#f5f5f5',
    background: '#f5f5f5',
    input: '#e5e5e5',
    brand: '#0060fe',
    'brand-muted': '#edf8ff',
    positive: '#00a63e',
    'positive-muted': '#dcfce7',
    negative: '#e7000b',
    'negative-muted': '#fef2f2',
    warning: '#fe9a00',
    'warning-muted': '#fffbeb',
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
  },

  custom: {
    focused: 'rgba(0, 96, 254, 0.3)',
    destructive: 'rgba(251, 44, 54, 0.3)',
  },

  'alpha-black': alphaBlackScale,
  'alpha-white': alphaWhiteScale,
} as const;

/**
 * Dark mode colors (inverted scales)
 */
export const darkMode: ModeColors = {
  bg: {
    default: '#171717',
    muted: '#262626',
    background: '#0a0a0a',
    input: '#404040',
    brand: '#0675ff',
    'brand-muted': 'rgba(14, 41, 93, 0.8)',
    positive: '#00a63e',
    'positive-muted': '#052e16',
    negative: '#fb2c36',
    'negative-muted': '#460809',
    warning: '#fe9a00',
    'warning-muted': '#461901',
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
    brand: {
      50: brandColors[950],
      100: brandColors[900],
      200: brandColors[800],
      300: brandColors[700],
      400: brandColors[600],
      500: brandColors[500],
      600: brandColors[400],
      700: brandColors[300],
      800: brandColors[200],
      900: brandColors[100],
      950: brandColors[50],
    },
    neutral: {
      50: neutralColors[950],
      100: neutralColors[900],
      200: neutralColors[800],
      300: neutralColors[700],
      400: neutralColors[600],
      500: neutralColors[500],
      600: neutralColors[400],
      700: neutralColors[300],
      800: neutralColors[200],
      900: neutralColors[100],
      950: neutralColors[50],
    },
    green: {
      50: greenColors[950],
      100: greenColors[900],
      200: greenColors[800],
      300: greenColors[700],
      400: greenColors[600],
      500: greenColors[500],
      600: greenColors[400],
      700: greenColors[300],
      800: greenColors[200],
      900: greenColors[100],
      950: greenColors[50],
    },
    red: {
      50: redColors[950],
      100: redColors[900],
      200: redColors[800],
      300: redColors[700],
      400: redColors[600],
      500: redColors[500],
      600: redColors[400],
      700: redColors[300],
      800: redColors[200],
      900: redColors[100],
      950: redColors[50],
    },
    yellow: {
      50: yellowColors[950],
      100: yellowColors[900],
      200: yellowColors[800],
      300: yellowColors[700],
      400: yellowColors[600],
      500: yellowColors[500],
      600: yellowColors[400],
      700: yellowColors[300],
      800: yellowColors[200],
      900: yellowColors[100],
      950: yellowColors[50],
    },
    cyan: {
      50: cyanColors[950],
      100: cyanColors[900],
      200: cyanColors[800],
      300: cyanColors[700],
      400: cyanColors[600],
      500: cyanColors[500],
      600: cyanColors[400],
      700: cyanColors[300],
      800: cyanColors[200],
      900: cyanColors[100],
      950: cyanColors[50],
    },
    purple: {
      50: purpleColors[950],
      100: purpleColors[900],
      200: purpleColors[800],
      300: purpleColors[700],
      400: purpleColors[600],
      500: purpleColors[500],
      600: purpleColors[400],
      700: purpleColors[300],
      800: purpleColors[200],
      900: purpleColors[100],
      950: purpleColors[50],
    },
  },

  custom: {
    focused: 'rgba(0, 96, 254, 0.3)',
    destructive: 'rgba(251, 44, 54, 0.3)',
  },

  'alpha-black': alphaWhiteScale,
  'alpha-white': alphaBlackScale,
} as const;
