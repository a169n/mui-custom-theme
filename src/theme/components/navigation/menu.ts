import type { Components, Theme } from '@mui/material/styles';

export const navigationMenus: Components<Theme> = {
  MuiMenu: {
    defaultProps: { disableScrollLock: true },
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: '12px',
        marginTop: '4px',
        padding: 0,
        backgroundColor: theme.palette.common.white,
        '& .MuiMenu-list': {
          padding: 0,
        },
      }),
      list: {
        p: '0px !important',
      },
    },
  },
  // MuiMenuItem: {
  //   styleOverrides: {
  //     root: ({ theme }) => ({
  //       padding: '8px 10px',
  //       '& .MuiTypography-root': {
  //         fontSize: '14px',
  //         lineHeight: '20px',
  //         color: theme.palette.gray[800],
  //         transition: 'color 0.2s ease',
  //       },
  //       '&:hover': { backgroundColor: 'transparent !important' },
  //       '&:hover .MuiTypography-root': {
  //         color: theme.palette.brand[500],
  //       },
  //       '&.Mui-selected': {
  //         backgroundColor: 'transparent !important',
  //         '& .MuiTypography-root': {
  //           color: theme.palette.brand[500],
  //           fontWeight: 500,
  //         },
  //       },
  //       '&.Mui-selected:hover': { backgroundColor: 'transparent !important' },
  //       '&.Mui-focusVisible': { backgroundColor: 'transparent !important' },
  //     }),
  //   },
  // },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20px',
        color: theme.palette.gray[600],
        padding: '0',
        minWidth: 'auto',
        '&.Mui-selected': {
          color: theme.palette.brand[700],
          '&:hover': { color: '#0849C6' },
        },
        '&:hover': { color: theme.palette.gray[500] },
      }),
    },
    defaultProps: { disableRipple: true },
  },
};

export default navigationMenus;
