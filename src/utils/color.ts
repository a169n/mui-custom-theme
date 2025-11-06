const HEX_COLOR_REGEX = /^#([0-9a-fA-F]{6})$/;
const RGBA_COLOR_REGEX =
  /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)$/;

export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export const isValidHexColor = (hexColor: string): boolean => HEX_COLOR_REGEX.test(hexColor);

const clampOpacity = (opacity: number): number => {
  if (!Number.isFinite(opacity)) {
    return 1;
  }

  if (opacity < 0) {
    return 0;
  }

  if (opacity > 1) {
    return 1;
  }

  return opacity;
};

export const hexToRgbaObject = (hexColor: string, opacity = 1): RgbaColor => {
  if (!isValidHexColor(hexColor)) {
    throw new Error(`Invalid hex color provided: "${hexColor}". Expected format "#RRGGBB".`);
  }

  const normalized = hexColor.slice(1);
  const red = parseInt(normalized.substring(0, 2), 16);
  const green = parseInt(normalized.substring(2, 4), 16);
  const blue = parseInt(normalized.substring(4, 6), 16);

  return {
    r: red,
    g: green,
    b: blue,
    a: clampOpacity(opacity),
  };
};

export const rgbaObjectToString = ({ r, g, b, a }: RgbaColor): string => `rgba(${r}, ${g}, ${b}, ${a})`;

/**
 * Convert a hexadecimal color value to an RGBA string.
 * Defaults to full opacity when no opacity is provided.
 */
export const hexToRgba = (hexColor: string, opacity = 1): string => {
  const rgba = hexToRgbaObject(hexColor, opacity);

  return rgbaObjectToString(rgba);
};

/**
 * Parse an rgba() string into its component values.
 */
export const rgbaStringToObject = (rgba: string): RgbaColor | null => {
  const match = rgba.match(RGBA_COLOR_REGEX);

  if (!match) {
    return null;
  }

  const [, r, g, b, a] = match;

  return {
    r: Math.max(0, Math.min(255, parseInt(r, 10))),
    g: Math.max(0, Math.min(255, parseInt(g, 10))),
    b: Math.max(0, Math.min(255, parseInt(b, 10))),
    a: clampOpacity(parseFloat(a)),
  };
};

export default hexToRgba;
