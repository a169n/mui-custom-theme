import type { OpacityScale } from './types';

const opacitySteps = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
];

export const opacityScale: OpacityScale = opacitySteps.reduce<OpacityScale>((acc, value) => {
  acc[`opacity-${value}`] = value;
  return acc;
}, {});
