/**
 * Theme configuration
 * Main entry point for the MUI custom theme
 */

import { createTheme } from '@mui/material/styles';
import palette from './foundations/palette.light';
import darkPalette from './foundations/palette.dark';
import typography from './foundations/typography';
import spacing from './foundations/spacing';
import shape from './foundations/shape';
import components from './components/index';
import breakpoints from './foundations/breakpoints';
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
