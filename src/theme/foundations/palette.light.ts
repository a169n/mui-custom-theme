/**
 * Palette configuration (light)
 */

import type { PaletteOptions } from '@mui/material/styles';
import { designTokens } from '../tokens';
import type { ColorScale } from '../tokens';

const createPaletteColor = (scale: ColorScale, mainShade: keyof ColorScale = 500) =>
  ({
    light: scale[300],
    main: scale[mainShade],
    dark: scale[700],
    contrastText: '#ffffff',
  }) as const;

const palette: PaletteOptions = {
  mode: 'light',

  common: {
    black: designTokens.primitives.colors.base.black,
    white: designTokens.primitives.colors.base.white,
  },

  primary: createPaletteColor(designTokens.primitives.colors.brand, 600),
  secondary: createPaletteColor(designTokens.primitives.colors.purple),
  success: createPaletteColor(designTokens.primitives.colors.green, 600),
  error: createPaletteColor(designTokens.primitives.colors.red, 600),
  warning: createPaletteColor(designTokens.primitives.colors.yellow, 500),
  info: createPaletteColor(designTokens.primitives.colors.cyan, 600),

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
};

export default palette;
