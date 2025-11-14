/**
 * Surface and overlay related overrides
 */

import type { Components, Theme } from '@mui/material/styles';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { getModeTokens } from '../useModeTokens';

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
      paper: ({ theme }) => {
        const modeTokens = getModeTokens(theme);
        return {
          borderRadius: `${theme.tokens.primitives.borderRadius['rounded-3xl']}px`,
          overflow: 'hidden',
          boxShadow: modeTokens?.shadow?.black?.[3],
        };
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
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
        padding: theme.spacing(4),
        gap: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }),
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(4),
      }),
      dividers: ({ theme }) => {
        const modeTokens = getModeTokens(theme);
        return {
          borderTop: `1px solid ${modeTokens?.border?.default}`,
          borderBottom: `1px solid ${modeTokens?.border?.default}`,
        };
      },
    },
    defaultProps: { dividers: true },
  },
  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
    styleOverrides: {
      tooltip: ({ theme }) => {
        const modeTokens = getModeTokens(theme);
        return {
          backgroundColor: theme.tokens.primitives.colors.brand?.[700],
          color: theme.palette.common.white,
          borderRadius: `${modeTokens?.radius?.sm}px`,
          maxWidth: 320,
          textAlign: 'center',
          padding: theme.spacing(1, 2),
          boxShadow: theme.shadows[2],
          ...theme.typography.textS,
          fontWeight: theme.typography.fontWeightRegular,
        };
      },
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
        '& .MuiPagination-ul': {
          gap: theme.spacing(1),
        },
      }),
    },
  },
  MuiPaginationItem: {
    defaultProps: {
      slots: {
        previous: IconArrowLeft,
        next: IconArrowRight,
      },
    },
    styleOverrides: {
      root: ({ theme }) => {
        const modeTokens = getModeTokens(theme);
        const bgMuted = modeTokens?.bg?.muted ?? theme.palette.action.hover;
        const textDefault = modeTokens?.text?.default ?? theme.palette.text.primary;
        const borderRadius =
          theme.tokens?.primitives?.borderRadius?.['rounded-md'] ?? theme.shape.borderRadius;

        return {
          minWidth: 'auto',
          height: 'auto',
          borderRadius: `${borderRadius}px`,
          padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
          border: 'none',
          color: textDefault,
          backgroundColor: 'transparent',
          transition: 'background-color 0.2s ease, color 0.2s ease',
          margin: 0,
          ...theme.typography.textM,
          '&.Mui-selected': {
            backgroundColor: bgMuted,
            color: textDefault,
            '&:hover': {
              backgroundColor: bgMuted,
            },
          },
          '&.MuiPaginationItem-page:hover': {
            backgroundColor: bgMuted,
          },
          '&.MuiPaginationItem-previousNext:hover': {
            backgroundColor: 'transparent',
          },
          '&.MuiPaginationItem-ellipsis': {
            backgroundColor: 'transparent',
            pointerEvents: 'none',
            cursor: 'default',
          },
          '&.Mui-disabled': {
            color: theme.palette.action.disabled,
            opacity: 1,
          },
          '&.MuiPaginationItem-previousNext': {
            padding: theme.spacing(1.5),
          },
          '& .MuiPaginationItem-icon': {
            width: 20,
            height: 20,
          },
        };
      },
    },
  },
};
