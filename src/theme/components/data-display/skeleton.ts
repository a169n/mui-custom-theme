import type { Components, Theme } from '@mui/material/styles';

export const skeleton: Components<Theme> = {
  MuiSkeleton: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.tokens?.primitives?.colors.neutral[200] ?? theme.palette.grey[200],
      }),
    },
  },
};

export default skeleton;
