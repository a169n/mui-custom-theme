import type { PaletteOptions } from '@mui/material/styles';
import type { DesignTokens } from './tokens';

export const createPalette = (tokens: DesignTokens): PaletteOptions => {
  const lightMode = tokens.modes.light as Record<string, any>;
  const baseColors = tokens.primitives.light.colors?.base as Record<string, string> | undefined;
  const colorScale = lightMode.colors as Record<string, Record<string, string>>;

  const toPaletteColor = (scale: Record<string, string>, options?: { main?: string }) => ({
    light: scale['300'],
    main: options?.main ?? scale['500'],
    dark: scale['700'],
    contrastText: lightMode.text.light,
  });

  return {
    mode: 'light',
    common: {
      black: baseColors?.black ?? '#000000',
      white: baseColors?.white ?? '#ffffff',
    },
    primary: toPaletteColor(colorScale.brand, { main: colorScale.brand['600'] }),
    secondary: toPaletteColor(colorScale.purple),
    success: toPaletteColor(colorScale.green, { main: colorScale.green['600'] }),
    error: toPaletteColor(colorScale.red, { main: colorScale.red['600'] }),
    warning: toPaletteColor(colorScale.yellow, { main: colorScale.yellow['500'] }),
    info: toPaletteColor(colorScale.cyan, { main: colorScale.cyan['600'] }),
    text: {
      primary: lightMode.text.default as string,
      secondary: lightMode.text.muted as string,
      disabled: lightMode.icon.muted as string,
    },
    divider: lightMode.border.muted as string,
    grey: {
      '50': colorScale.neutral['50'],
      '100': colorScale.neutral['100'],
      '200': colorScale.neutral['200'],
      '300': colorScale.neutral['300'],
      '400': colorScale.neutral['400'],
      '500': colorScale.neutral['500'],
      '600': colorScale.neutral['600'],
      '700': colorScale.neutral['700'],
      '800': colorScale.neutral['800'],
      '900': colorScale.neutral['900'],
      '950': colorScale.neutral['950'],
    },
    background: {
      default: lightMode.bg.background as string,
      paper: lightMode.bg.default as string,
    },
    action: {
      hover: lightMode['alpha-black']['5'] as string,
      selected: lightMode['alpha-black']['10'] as string,
      disabled: lightMode['alpha-black']['30'] as string,
      disabledBackground: lightMode['alpha-black']['10'] as string,
      focus: lightMode['alpha-black']['20'] as string,
      active: lightMode['alpha-black']['20'] as string,
    },
  } satisfies PaletteOptions;
};
