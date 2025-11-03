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
      root: ({ theme }) => {
        const modeTokens = theme.tokens.modes[theme.palette.mode];
        const focusShadow = `0 0 0 4px ${modeTokens.custom.focused}`;
        const destructiveShadow = `0 0 0 4px ${modeTokens.custom.destructive}`;

        return {
          borderRadius: `${theme.tokens.theme.radius.lg}px`,
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: modeTokens.border.default,
            borderRadius: `${theme.tokens.theme.radius.lg}px`,
            transition: 'border-color 0.2s ease',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: modeTokens.border.brand,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: modeTokens.border.brand,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: modeTokens.border.negative,
          },
          '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: modeTokens.border.negative,
          },
          '&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: modeTokens.border.negative,
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: modeTokens.border.muted,
          },
          '&.Mui-focused': {
            boxShadow: focusShadow,
          },
          '&.Mui-focused.Mui-error': {
            boxShadow: destructiveShadow,
          },
        };
      },
      input: ({ theme }) => ({
        padding: theme.spacing(2.5, 3),
        ...theme.typography.caption,
      }),
    },
  },
};
