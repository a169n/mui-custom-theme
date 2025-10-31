/**
 * Color tokens
 */

import type { BaseColors, ColorScale } from './types';

/**
 * Base colors
 */
export const baseColors: BaseColors = {
  black: '#000000',
  white: '#ffffff',
  transparent: 'rgba(255, 255, 255, 0)',
} as const;

/**
 * Brand color scale
 */
export const brandColors: ColorScale = {
  50: '#edf8ff',
  100: '#d6eeff',
  200: '#b5e3ff',
  300: '#83d2ff',
  400: '#48b8ff',
  500: '#1e95ff',
  600: '#0675ff',
  700: '#0060fe',
  800: '#084ac5',
  900: '#0d429b',
  950: '#0e295d',
} as const;

/**
 * Neutral/Grey color scale
 */
export const neutralColors: ColorScale = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a1a1a1',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a',
} as const;

/**
 * Green color scale (success/positive)
 */
export const greenColors: ColorScale = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#b9f8cf',
  300: '#7bf1a8',
  400: '#05df72',
  500: '#00c950',
  600: '#00a63e',
  700: '#008236',
  800: '#016630',
  900: '#0d542b',
  950: '#052e16',
} as const;

/**
 * Red color scale (error/negative)
 */
export const redColors: ColorScale = {
  50: '#fef2f2',
  100: '#ffe2e2',
  200: '#ffc9c9',
  300: '#ffa2a2',
  400: '#ff6467',
  500: '#fb2c36',
  600: '#e7000b',
  700: '#c10007',
  800: '#9f0712',
  900: '#82181a',
  950: '#460809',
} as const;

/**
 * Yellow color scale (warning)
 */
export const yellowColors: ColorScale = {
  50: '#fffbeb',
  100: '#fef3c6',
  200: '#fee685',
  300: '#ffd230',
  400: '#ffb900',
  500: '#fe9a00',
  600: '#e17100',
  700: '#bb4d00',
  800: '#973c00',
  900: '#7b3306',
  950: '#461901',
} as const;

/**
 * Cyan color scale (info)
 */
export const cyanColors: ColorScale = {
  50: '#ecfeff',
  100: '#cefafe',
  200: '#a5f3fc',
  300: '#53eafd',
  400: '#00d3f2',
  500: '#00b8db',
  600: '#0092b8',
  700: '#007595',
  800: '#005f78',
  900: '#104e64',
  950: '#053345',
} as const;

/**
 * Purple color scale
 */
export const purpleColors: ColorScale = {
  50: '#faf5ff',
  100: '#f3e8ff',
  200: '#e9d4ff',
  300: '#dab2ff',
  400: '#c27aff',
  500: '#ad46ff',
  600: '#9810fa',
  700: '#8200db',
  800: '#6e11b0',
  900: '#59168b',
  950: '#3c0366',
} as const;

/**
 * Orange color scale
 */
export const orangeColors: ColorScale = {
  50: '#fff7ed',
  100: '#ffedd4',
  200: '#ffd6a7',
  300: '#ffb86a',
  400: '#ff8904',
  500: '#ff6900',
  600: '#f54900',
  700: '#ca3500',
  800: '#9f2d00',
  900: '#7e2a0c',
  950: '#441306',
} as const;

/**
 * Pink color scale
 */
export const pinkColors: ColorScale = {
  50: '#fdf2f8',
  100: '#fce7f3',
  200: '#fccee8',
  300: '#fda5d5',
  400: '#fb64b6',
  500: '#f6339a',
  600: '#e60076',
  700: '#c6005c',
  800: '#a3004c',
  900: '#861043',
  950: '#510424',
} as const;

/**
 * Rose color scale
 */
export const roseColors: ColorScale = {
  50: '#fff1f2',
  100: '#ffe4e6',
  200: '#ffccd3',
  300: '#ffa1ad',
  400: '#ff637e',
  500: '#ff2056',
  600: '#ec003f',
  700: '#c70036',
  800: '#a50036',
  900: '#8b0836',
  950: '#4d0218',
} as const;

/**
 * Sky color scale
 */
export const skyColors: ColorScale = {
  50: '#f0f9ff',
  100: '#dff2fe',
  200: '#b8e6fe',
  300: '#74d4ff',
  400: '#00bcff',
  500: '#00a6f4',
  600: '#0084d1',
  700: '#0069a8',
  800: '#00598a',
  900: '#024a70',
  950: '#052f4a',
} as const;

/**
 * Teal color scale
 */
export const tealColors: ColorScale = {
  50: '#f0fdfa',
  100: '#cbfbf1',
  200: '#96f7e4',
  300: '#46ecd5',
  400: '#00d5be',
  500: '#00bba7',
  600: '#009689',
  700: '#00786f',
  800: '#005f5a',
  900: '#0b4f4a',
  950: '#022f2e',
} as const;

/**
 * Lime color scale
 */
export const limeColors: ColorScale = {
  50: '#f7fee7',
  100: '#ecfcca',
  200: '#d8f999',
  300: '#bbf451',
  400: '#9ae600',
  500: '#7ccf00',
  600: '#5ea500',
  700: '#497d00',
  800: '#3c6300',
  900: '#35530e',
  950: '#1a2e05',
} as const;
