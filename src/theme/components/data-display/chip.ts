import type { Components, Theme } from '@mui/material/styles';

export const chip: Components<Theme> = {
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor:
          theme.tokens?.modes?.[theme.palette.mode ?? 'light']?.bg?.['brand-muted'] ?? '#eef3f8',
      }),
    },
  },
};

export default chip;
