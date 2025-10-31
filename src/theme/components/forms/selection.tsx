import type { Components, Theme } from '@mui/material/styles';
import { IconCircle, IconCircleCheckFilled } from '@tabler/icons-react';

export const selection: Components<Theme> = {
  MuiRadio: {
    styleOverrides: { root: { padding: 0, width: '20px', height: '20px' } },
    defaultProps: {
      icon: <IconCircle />,
      checkedIcon: <IconCircleCheckFilled />,
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiFormControlLabel-label': {
          color: theme.palette.text.primary,
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '20px',
          letterSpacing: '0px',
        },
        marginLeft: 0,
        marginRight: '20px',
        '& .MuiRadio-root': { marginRight: '4px' },
        alignItems: 'center',
      }),
    },
  },
  MuiRadioGroup: { styleOverrides: { root: { gap: '20px' } } },
};

export default selection;
