/**
 * Palette configuration (dark)
 */

import type { PaletteOptions } from '@mui/material/styles';
import { designTokens } from '../tokens';
import { createPaletteScale } from './palette.utils';

const brand = createPaletteScale(designTokens.modes.dark.colors.brand, { mainShade: 500 });
const neutral = createPaletteScale(designTokens.modes.dark.colors.neutral, {
  lightShade: 300,
  mainShade: 500,
  darkShade: 700,
  contrastText: '#ffffff',
});
const green = createPaletteScale(designTokens.modes.dark.colors.green, { mainShade: 500 });
const red = createPaletteScale(designTokens.modes.dark.colors.red, { mainShade: 500 });
const yellow = createPaletteScale(designTokens.modes.dark.colors.yellow, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});
const cyan = createPaletteScale(designTokens.modes.dark.colors.cyan, { mainShade: 500 });
const purple = createPaletteScale(designTokens.modes.dark.colors.purple, { mainShade: 500 });

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

const darkPalette: PaletteOptions = {
  mode: 'dark',

  common: {
    black: designTokens.primitives.colors.base.black,
    white: designTokens.primitives.colors.base.white,
  },

  primary: createPaletteScale(designTokens.modes.dark.colors.brand, { mainShade: 500 }),
  secondary: createPaletteScale(designTokens.primitives.colors.purple, { mainShade: 500 }),
  success: createPaletteScale(designTokens.primitives.colors.green, { mainShade: 600 }),
  error: createPaletteScale(designTokens.primitives.colors.red, { mainShade: 500 }),
  warning: createPaletteScale(designTokens.primitives.colors.yellow, {
    mainShade: 500,
    contrastText: '#0a0a0a',
  }),
  info: createPaletteScale(designTokens.primitives.colors.cyan, { mainShade: 500 }),

  text: {
    primary: designTokens.modes.dark.text.default,
    secondary: designTokens.modes.dark.text.muted,
    disabled: designTokens.modes.dark.icon.muted,
  },

  divider: designTokens.modes.dark.border.muted,

  grey: {
    50: designTokens.modes.dark.colors.neutral[50],
    100: designTokens.modes.dark.colors.neutral[100],
    200: designTokens.modes.dark.colors.neutral[200],
    300: designTokens.modes.dark.colors.neutral[300],
    400: designTokens.modes.dark.colors.neutral[400],
    500: designTokens.modes.dark.colors.neutral[500],
    600: designTokens.modes.dark.colors.neutral[600],
    700: designTokens.modes.dark.colors.neutral[700],
    800: designTokens.modes.dark.colors.neutral[800],
    900: designTokens.modes.dark.colors.neutral[900],
    950: designTokens.modes.dark.colors.neutral[950],
  },

  background: {
    default: designTokens.modes.dark.bg.background,
    paper: designTokens.modes.dark.bg.default,
  },

  action: {
    hover: designTokens.modes.dark['alpha-white'][90],
    selected: designTokens.modes.dark['alpha-white'][80],
    disabled: designTokens.modes.dark['alpha-white'][60],
    disabledBackground: designTokens.modes.dark['alpha-white'][90],
    focus: designTokens.modes.dark['alpha-white'][80],
    active: designTokens.modes.dark['alpha-white'][70],
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

export default darkPalette;
