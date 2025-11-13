/**
 * Surface and overlay related overrides
 */

import type { Components, Theme } from '@mui/material/styles';

export const surfaces: Components<Theme> = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        '&:before': { display: 'none' },
        '&.Mui-expanded': { margin: 0 },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: 0,
        minHeight: 'auto',
        '&.Mui-expanded': { minHeight: 'auto' },
      },
      content: { margin: 0, '&.Mui-expanded': { margin: 0 } },
    },
  },
  MuiAccordionDetails: { styleOverrides: { root: { padding: 0 } } },
  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: `${theme.tokens.primitives.borderRadius['rounded-3xl']}px`,
        overflow: 'hidden',
        boxShadow: theme.tokens.modes[theme.palette.mode].shadow.black[3],
      }),
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary,
        padding: theme.spacing(3.5),
        position: 'relative',
        borderBottom: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiIconButton-root': {
          marginLeft: 'auto',
          padding: theme.spacing(1.5),
          color: theme.palette.icon?.muted ?? theme.palette.gray[500],
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.icon?.default ?? theme.palette.gray[600],
          },
          '& svg': {
            width: 20,
            height: 20,
          },
        },
      }),
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(2),
        gap: theme.spacing(2),
      }),
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(4),
      }),
      dividers: ({ theme }) => ({
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
    defaultProps: { dividers: true },
  },
  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
    styleOverrides: {
      tooltip: ({ theme }) => ({
        backgroundColor: theme.tokens.primitives.colors.brand?.[700],
        color: theme.palette.common.white,
        borderRadius: `${theme.tokens.modes[theme.palette.mode].radius.sm}px`,
        maxWidth: 320,
        textAlign: 'center',
        padding: theme.spacing(1, 2),
        boxShadow: theme.shadows[2],
        ...theme.typography.textS,
        fontWeight: theme.typography.fontWeightRegular,
      }),
      arrow: ({ theme }) => ({
        color: theme.tokens.primitives.colors.brand?.[700],
      }),
    },
  },
  MuiPopover: {
    defaultProps: { disableScrollLock: true },
    styleOverrides: {
      paper: { boxShadow: '0px 0px 50px 0px #33415514', borderRadius: '12px' },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: { height: '1px', border: 'none', boxShadow: 'none' },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: { display: 'flex', justifyContent: 'center' },
      root: { '& .MuiTabs-flexContainer': { gap: '16px' } },
    },
  },
  MuiPagination: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: '32px',
        '& .MuiPagination-ul': {
          gap: '8px',
        },
        '& .MuiPaginationItem-root': {
          minWidth: '32px',
          height: '32px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: 'transparent',
          color: theme.palette.gray[500],
          fontSize: '14px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.brand[700],
            color: theme.palette.white.main,
            '&:hover': {
              backgroundColor: theme.palette.brand[700],
            },
          },
          '&.Mui-disabled': {
            color: theme.palette.white.main,
            opacity: 0.5,
          },
        },
        '& .MuiPaginationItem-icon': {
          fontSize: '24px',
          color: theme.palette.gray[500],
        },
        '& .MuiPaginationItem-root.Mui-disabled .MuiPaginationItem-icon': {
          color: theme.palette.white.main,
          opacity: 0.5,
        },
        '& .MuiPaginationItem-root:not(.Mui-disabled) .MuiPaginationItem-icon': {
          color: theme.palette.gray[500],
        },
      }),
    },
  },
};
