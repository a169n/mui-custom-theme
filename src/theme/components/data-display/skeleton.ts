import type { Components, Theme } from '@mui/material/styles';

export const skeleton: Components<Theme> = {
  MuiSkeleton: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.tokens?.primitives?.colors.neutral[600] ?? theme.palette.grey[600],
      }),
    },
  },
};

export default skeleton;
