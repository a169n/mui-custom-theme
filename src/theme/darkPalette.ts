/**
 * Dark mode palette configuration
 */

import type { PaletteOptions } from '@mui/material/styles';
import { designTokens } from './tokens';
import type { ColorScale } from './tokens';

/**
 * Helper to convert a color scale into a MUI PaletteColor object
 */
const createPaletteColor = (scale: ColorScale, mainShade: keyof ColorScale = 500) =>
  ({
    light: scale[300],
    main: scale[mainShade],
    dark: scale[700],
    contrastText: '#ffffff',
  }) as const;

/**
 * Dark mode palette
 */
const darkPalette: PaletteOptions = {
  mode: 'dark',

  common: {
    black: designTokens.primitives.colors.base.black,
    white: designTokens.primitives.colors.base.white,
  },

  primary: createPaletteColor(designTokens.primitives.colors.brand, 500),
  secondary: createPaletteColor(designTokens.primitives.colors.purple),
  success: createPaletteColor(designTokens.primitives.colors.green, 600),
  error: createPaletteColor(designTokens.primitives.colors.red, 500),
  warning: createPaletteColor(designTokens.primitives.colors.yellow, 500),
  info: createPaletteColor(designTokens.primitives.colors.cyan, 500),

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
};

export default darkPalette;
