/**
 * Palette configuration (light)
 */

import type { PaletteOptions } from '@mui/material/styles';
import { designTokens } from '../tokens';
import { createPaletteScale } from './palette.utils';

const lightColors = designTokens.modes.light.colors;

const brand = createPaletteScale(lightColors.brand, { mainShade: 600 });
const neutral = createPaletteScale(lightColors.neutral, {
  lightShade: 100,
  mainShade: 500,
  darkShade: 700,
  contrastText: '#0a0a0a',
});
const green = createPaletteScale(lightColors.green, { mainShade: 600 });
const red = createPaletteScale(lightColors.red, { mainShade: 500 });
const yellow = createPaletteScale(lightColors.yellow, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});
const cyan = createPaletteScale(lightColors.cyan, { mainShade: 600 });
const purple = createPaletteScale(lightColors.purple, { mainShade: 500 });

const orange = createPaletteScale(lightColors.orange!, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});
const pink = createPaletteScale(lightColors.pink!, { mainShade: 500 });
const rose = createPaletteScale(lightColors.rose!, { mainShade: 500 });
const teal = createPaletteScale(lightColors.teal!, { mainShade: 500 });
const lime = createPaletteScale(lightColors.lime!, {
  mainShade: 500,
  contrastText: '#0a0a0a',
});

const palette: PaletteOptions = {
  mode: 'light',

  common: {
    black: designTokens.primitives.colors.base.black,
    white: designTokens.primitives.colors.base.white,
  },

  alpha: {
    black: designTokens.modes.light.alpha.black,
    white: designTokens.modes.light.alpha.white,
  },

  primary: createPaletteScale(lightColors.brand, { mainShade: 600 }),
  secondary: createPaletteScale(lightColors.purple, { mainShade: 500 }),
  success: createPaletteScale(lightColors.green, { mainShade: 600 }),
  error: createPaletteScale(lightColors.red, { mainShade: 600 }),
  warning: createPaletteScale(lightColors.yellow, {
    mainShade: 500,
    contrastText: '#0a0a0a',
  }),
  info: createPaletteScale(lightColors.cyan, { mainShade: 600 }),

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
    950: designTokens.primitives.colors.neutral[950],
  },

  background: {
    default: designTokens.modes.light.bg.background,
    paper: designTokens.modes.light.bg.default,
  },

  action: {
    hover: designTokens.modes.light.alpha.black[90],
    selected: designTokens.modes.light.alpha.black[80],
    disabled: designTokens.modes.light.alpha.black[60],
    disabledBackground: designTokens.modes.light.alpha.black[90],
    focus: designTokens.modes.light.alpha.black[80],
    active: designTokens.modes.light.alpha.black[70],
  },

  icon: {
    default: designTokens.modes.light.icon.default,
    muted: designTokens.modes.light.icon.muted,
    light: designTokens.modes.light.icon.light,
    dark: designTokens.modes.light.icon.dark,
    brand: designTokens.modes.light.icon.brand,
    positive: designTokens.modes.light.icon.positive,
    negative: designTokens.modes.light.icon.negative,
    warning: designTokens.modes.light.icon.warning,
    link: designTokens.modes.light.icon.link,
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

export default palette;
