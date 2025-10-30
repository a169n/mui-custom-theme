/**
 * Palette configuration (light)
 */

import type { PaletteOptions } from '@mui/material/styles';
import { designTokens } from '../tokens';
import { createPaletteScale } from './palette.utils';

const brand = createPaletteScale(designTokens.modes.light.colors.brand, { mainShade: 600 });
const neutral = createPaletteScale(designTokens.modes.light.colors.neutral, {
  lightShade: 100,
  mainShade: 500,
  darkShade: 700,
  contrastText: '#0a0a0a',
});
const green = createPaletteScale(designTokens.modes.light.colors.green, { mainShade: 600 });
const red = createPaletteScale(designTokens.modes.light.colors.red, { mainShade: 500 });
const yellow = createPaletteScale(designTokens.modes.light.colors.yellow, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});
const cyan = createPaletteScale(designTokens.modes.light.colors.cyan, { mainShade: 600 });
const purple = createPaletteScale(designTokens.modes.light.colors.purple, { mainShade: 500 });

const orange = createPaletteScale(designTokens.primitives.colors.orange, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});
const pink = createPaletteScale(designTokens.primitives.colors.pink, { mainShade: 500 });
const rose = createPaletteScale(designTokens.primitives.colors.rose, { mainShade: 500 });
const sky = createPaletteScale(designTokens.primitives.colors.sky, { mainShade: 500 });
const teal = createPaletteScale(designTokens.primitives.colors.teal, { mainShade: 500 });
const lime = createPaletteScale(designTokens.primitives.colors.lime, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});

const palette: PaletteOptions = {
  mode: 'light',

  common: {
    black: designTokens.primitives.colors.base.black,
    white: designTokens.primitives.colors.base.white,
  },

  primary: createPaletteScale(designTokens.modes.light.colors.brand, { mainShade: 600 }),
  secondary: createPaletteScale(designTokens.primitives.colors.purple, { mainShade: 500 }),
  success: createPaletteScale(designTokens.primitives.colors.green, { mainShade: 600 }),
  error: createPaletteScale(designTokens.primitives.colors.red, { mainShade: 600 }),
  warning: createPaletteScale(designTokens.primitives.colors.yellow, {
    mainShade: 500,
    contrastText: '#0a0a0a',
  }),
  info: createPaletteScale(designTokens.primitives.colors.cyan, { mainShade: 600 }),

  text: {
    primary: designTokens.modes.light.text.default,
    secondary: designTokens.modes.light.text.muted,
    disabled: designTokens.modes.light.icon.muted,
  },

  divider: designTokens.modes.light.border.muted,

  grey: {
    50: designTokens.primitives.colors.neutral[50],
    100: designTokens.primitives.colors.neutral[100],
    200: designTokens.primitives.colors.neutral[200],
    300: designTokens.primitives.colors.neutral[300],
    400: designTokens.primitives.colors.neutral[400],
    500: designTokens.primitives.colors.neutral[500],
    600: designTokens.primitives.colors.neutral[600],
    700: designTokens.primitives.colors.neutral[700],
    800: designTokens.primitives.colors.neutral[800],
    900: designTokens.primitives.colors.neutral[900],
  },

  background: {
    default: designTokens.modes.light.bg.background,
    paper: designTokens.modes.light.bg.default,
  },

  action: {
    hover: designTokens.modes.light['alpha-black'][90],
    selected: designTokens.modes.light['alpha-black'][80],
    disabled: designTokens.modes.light['alpha-black'][60],
    disabledBackground: designTokens.modes.light['alpha-black'][90],
    focus: designTokens.modes.light['alpha-black'][80],
    active: designTokens.modes.light['alpha-black'][70],
  },

  brand,
  gray: neutral,
  green,
  red,
  yellow,
  cyan,
  purple,
  orange,
  pink,
  rose,
  sky,
  teal,
  lime,
  white: {
    main: designTokens.primitives.colors.base.white,
    contrastText: '#0a0a0a',
  },
  black: {
    main: designTokens.primitives.colors.base.black,
    contrastText: '#ffffff',
  },
};

export default palette;
