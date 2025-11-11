import type { Shadows } from '@mui/material/styles';
import { designTokens } from '../tokens';
import type { ShadowLevel } from '../tokens/shadows';

type ShadowTone = keyof typeof designTokens.modes.light.shadow;

const mapIndexToLevel = (index: number): ShadowLevel => {
  if (index <= 1) {
    return 1;
  }

  if (index === 2) {
    return 2;
  }

  if (index === 3) {
    return 3;
  }

  if (index <= 8) {
    return 4;
  }

  return 5;
};

const buildShadows = (tone: ShadowTone): Shadows => {
  const scale = designTokens.modes.light.shadow[tone];
  const muiShadows: string[] = ['none'];

  for (let i = 1; i < 25; i += 1) {
    const level = mapIndexToLevel(i);
    muiShadows.push(scale[level]);
  }

  return muiShadows as Shadows;
};

export const lightShadows = buildShadows('black');
export const darkShadows = buildShadows('white');

export default lightShadows;
