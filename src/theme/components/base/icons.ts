import type { Components, Theme } from '@mui/material/styles';

export const icons: Components<Theme> = {
  MuiSvgIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        cursor: 'pointer',
        color: `${theme.palette.gray[300]} !important`,
        '&.MuiSvgIcon-colorSuccess': { color: theme.palette.green[600] },
      }),
    },
  },
};

export default icons;
