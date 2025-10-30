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
      paper: { borderRadius: '24px', overflowX: 'hidden', overflowY: 'auto' },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: '24px',
        fontWeight: 500,
        color: theme.palette.text.primary,
        lineHeight: '28px',
        letterSpacing: '0px',
        padding: '20px 24px',
        position: 'relative',
        borderBottom: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiIconButton-root': {
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: theme.palette.gray[500],
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.gray[600],
          },
        },
      }),
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: { position: 'relative', borderTop: 'none', padding: '20px 24px' },
    },
  },
  MuiDialogContent: {
    styleOverrides: { root: { padding: '24px' } },
    defaultProps: { dividers: true },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.common.white,
        borderRadius: '4px',
        height: 'fit-content',
        width: 'fit-content',
        maxWidth: '250px',
        textAlign: 'center',
        padding: '4px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0px',
      }),
      arrow: ({ theme }) => ({ color: theme.palette.text.primary }),
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
  MuiTableCell: {
    styleOverrides: {
      root: { backgroundColor: 'transparent', padding: '10px 12px !important' },
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
