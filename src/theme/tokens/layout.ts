import type { BreakpointScale, ContainerScale } from './types';

export const breakpointScale: BreakpointScale = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const;

export const containerScale: ContainerScale = {
  '3xs': 256,
  '2xs': 288,
  xs: 360,
  sm: 384,
  md: 448,
  lg: 512,
  xl: 576,
  '2xl': 672,
  '3xl': 768,
  '4xl': 896,
  '5xl': 1024,
  '6xl': 1152,
  '7xl': 1280,
  '8xl': 1872,
} as const;
