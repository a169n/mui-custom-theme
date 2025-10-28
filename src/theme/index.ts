/**
 * Theme configuration
 * Main entry point for the MUI custom theme
 */

import { createTheme } from '@mui/material/styles';
import palette from './palette';
import darkPalette from './darkPalette';
import typography from './typography';
import spacing from './spacing';
import shape from './shape';
import components from './components';
import breakpoints from './breakpoints';
import { designTokens } from './tokens';

/**
 * Light theme (default)
 */
const theme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  components,
  breakpoints,
  tokens: designTokens,
});

/**
 * Dark theme
 */
export const darkTheme = createTheme({
  palette: darkPalette,
  typography,
  spacing,
  shape,
  components,
  breakpoints,
  tokens: designTokens,
});

// Export design tokens for direct access
export { designTokens };

// Export types
export type * from './tokens';

// Default export (light theme)
export default theme;
