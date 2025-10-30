/**
 * Palette helper utilities
 */

import type { ColorScale } from '../tokens';

export type Shade = keyof ColorScale;

export interface PaletteColorScale extends ColorScale {
  readonly light: string;
  readonly main: string;
  readonly dark: string;
  readonly contrastText: string;
}

interface PaletteScaleOptions {
  readonly lightShade?: Shade;
  readonly mainShade?: Shade;
  readonly darkShade?: Shade;
  readonly contrastText?: string;
}

const DEFAULT_LIGHT_SHADE: Shade = 300;
const DEFAULT_MAIN_SHADE: Shade = 500;
const DEFAULT_DARK_SHADE: Shade = 700;
const DEFAULT_CONTRAST_TEXT = '#ffffff';

export const createPaletteScale = (
  scale: ColorScale,
  options: PaletteScaleOptions = {},
): PaletteColorScale => {
  const {
    lightShade = DEFAULT_LIGHT_SHADE,
    mainShade = DEFAULT_MAIN_SHADE,
    darkShade = DEFAULT_DARK_SHADE,
    contrastText = DEFAULT_CONTRAST_TEXT,
  } = options;

  return {
    ...scale,
    light: scale[lightShade],
    main: scale[mainShade],
    dark: scale[darkShade],
    contrastText,
  } as const satisfies PaletteColorScale;
};
