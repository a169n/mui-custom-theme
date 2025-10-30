/**
 * Miscellaneous component overrides
 */

import type { Components, Theme } from '@mui/material/styles';
import { IconCircle, IconCircleCheckFilled } from '@tabler/icons-react';

export const others: Components<Theme> = {
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
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '8px 10px',
        '& .MuiTypography-root': {
          fontSize: '14px',
          lineHeight: '20px',
          color: theme.palette.gray[800],
          transition: 'color 0.2s ease',
        },
        '&:hover': { backgroundColor: 'transparent !important' },
        '&:hover .MuiTypography-root': {
          color: theme.palette.brand[500],
        },
        '&.Mui-selected': {
          backgroundColor: 'transparent !important',
          '& .MuiTypography-root': {
            color: theme.palette.brand[500],
            fontWeight: 500,
          },
        },
        '&.Mui-selected:hover': { backgroundColor: 'transparent !important' },
        '&.Mui-focusVisible': { backgroundColor: 'transparent !important' },
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        backgroundColor: '#eef3f8',
      },
    },
  },
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
  MuiSvgIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        cursor: 'pointer',
        color: `${theme.palette.gray[300]} !important`,
        '&.MuiSvgIcon-colorSuccess': { color: theme.palette.green[600] },
      }),
    },
  },
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
