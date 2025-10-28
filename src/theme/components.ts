/**
 * Component overrides
 * Customizes default styles for MUI components
 */

import type { Components, Theme } from '@mui/material/styles';

const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: 8,
      },
    },
  },
};

export default components;
