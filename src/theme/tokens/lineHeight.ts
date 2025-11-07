import type { LineHeightScale } from './types';

const MAX_LINE_HEIGHT = 20;
const LINE_HEIGHT_STEP = 4;

export const lineHeightScale: LineHeightScale = Array.from(
  { length: MAX_LINE_HEIGHT },
  (_, index) => {
    const key = `leading-${index + 1}`;
    const value = (index + 1) * LINE_HEIGHT_STEP;
    return [key, value] as const;
  }
).reduce<LineHeightScale>((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
