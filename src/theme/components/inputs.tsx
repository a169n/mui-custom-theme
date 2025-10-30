/**
 * Input related component overrides
 */

import type { Components, Theme } from '@mui/material/styles';
import { IconChevronDown } from '@tabler/icons-react';

export const inputs: Components<Theme> = {
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: '16px',
        color: theme.palette.text.primary,
      }),
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
      spellCheck: false,
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '12px',
        backgroundColor: theme.palette.common.white,
        minWidth: 160,
        width: 'fit-content',
        '& .MuiSelect-select': {
          textAlign: 'center !important',
          display: 'flex',
          alignItems: 'center',
        },
      }),
      icon: ({ theme }) => ({
        color: `${theme.palette.gray[500]} !important`,
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        transition: 'transform 0.2s',
      }),
      iconOpen: {
        transform: 'translateY(-50%) rotate(180deg)',
      },
    },
    defaultProps: {
      IconComponent: (props) => <IconChevronDown size={20} {...props} />,
      MenuProps: {
        slotProps: {
          paper: {
            sx: {
              borderRadius: '12px',
            },
          },
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '12px',
        transition: 'border-color 0.2s ease',
        '& fieldset': {
          borderWidth: '1px !important',
          borderStyle: 'solid',
          borderColor: `${theme.palette.gray[300]} !important`,
          borderRadius: '12px',
          transition: 'border-color 0.2s ease',
        },
        '&:hover fieldset': {
          borderColor: `${theme.palette.brand[500]} !important`,
        },
        '&.Mui-focused fieldset': {
          borderColor: `${theme.palette.brand[500]} !important`,
        },
        '&.Mui-disabled fieldset': {
          borderColor: `${theme.palette.gray[500]} !important`,
        },
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: '12px',
        color: theme.palette.gray[500],
        padding: '4px 0 5px 0',
      }),
    },
  },
};
