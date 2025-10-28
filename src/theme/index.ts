import { createTheme } from '@mui/material/styles';
import { createPalette } from './palette';
import { createShape } from './shape';
import { createSpacing } from './spacing';
import { createTypography } from './typography';
import { designTokens } from './tokens';

const theme = createTheme({
  palette: createPalette(designTokens),
  spacing: createSpacing(designTokens.primitives.light.spacing as Record<string, number>),
  typography: createTypography(designTokens),
  shape: createShape(designTokens),
  tokens: designTokens,
});

export { designTokens };
export default theme;
