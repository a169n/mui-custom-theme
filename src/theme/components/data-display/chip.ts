import type { Components, Theme } from '@mui/material/styles';
import { getModeTokens } from '../../useModeTokens';

export const chip: Components<Theme> = {
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => {
        const modeTokens = getModeTokens(theme);
        return {
          backgroundColor: modeTokens?.bg?.brand?.muted ?? '#eef3f8',
        };
      },
    },
  },
};

export default chip;
