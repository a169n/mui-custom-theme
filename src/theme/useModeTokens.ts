import { useTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const getModeTokens = (theme: Theme, mode: PaletteMode = theme.palette.mode) =>
  theme.tokens?.modes?.[mode];

export const useModeTokens = () => {
  const theme = useTheme();
  return getModeTokens(theme);
};
