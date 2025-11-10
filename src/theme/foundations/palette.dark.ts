/**
 * Palette configuration (dark)
 */

import type { PaletteOptions } from '@mui/material/styles';
import { designTokens } from '../tokens';
import { createPaletteScale } from './palette.utils';

const darkColors = designTokens.modes.dark.colors;

const brand = createPaletteScale(darkColors.brand, { mainShade: 500 });
const neutral = createPaletteScale(darkColors.neutral, {
  lightShade: 300,
  mainShade: 500,
  darkShade: 700,
  contrastText: '#ffffff',
});
const green = createPaletteScale(darkColors.green, { mainShade: 500 });
const red = createPaletteScale(darkColors.red, { mainShade: 500 });
const yellow = createPaletteScale(darkColors.yellow, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});
const cyan = createPaletteScale(darkColors.cyan, { mainShade: 500 });
const purple = createPaletteScale(darkColors.purple, { mainShade: 500 });

const orange = createPaletteScale(darkColors.orange!, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});
const pink = createPaletteScale(darkColors.pink!, { mainShade: 500 });
const rose = createPaletteScale(darkColors.rose!, { mainShade: 500 });
const teal = createPaletteScale(darkColors.teal!, { mainShade: 500 });
const lime = createPaletteScale(darkColors.lime!, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});

const darkPalette: PaletteOptions = {
  mode: 'dark',

  common: {
    black: designTokens.primitives.colors.base.black,
    white: designTokens.primitives.colors.base.white,
  },

  alpha: {
    black: designTokens.modes.dark.alpha.black,
    white: designTokens.modes.dark.alpha.white,
  },

  primary: createPaletteScale(darkColors.brand, { mainShade: 500 }),
  secondary: createPaletteScale(darkColors.purple, { mainShade: 500 }),
  success: createPaletteScale(darkColors.green, { mainShade: 600 }),
  error: createPaletteScale(darkColors.red, { mainShade: 500 }),
  warning: createPaletteScale(darkColors.yellow, {
    mainShade: 500,
    contrastText: '#0a0a0a',
  }),
  info: createPaletteScale(darkColors.cyan, { mainShade: 500 }),

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
    hover: designTokens.modes.dark.alpha.white[90],
    selected: designTokens.modes.dark.alpha.white[80],
    disabled: designTokens.modes.dark.alpha.white[60],
    disabledBackground: designTokens.modes.dark.alpha.white[90],
    focus: designTokens.modes.dark.alpha.white[80],
    active: designTokens.modes.dark.alpha.white[70],
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
