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
      root: ({ theme }) => {
        const modeTokens = theme.tokens.modes[theme.palette.mode];

        return {
          borderRadius: `${theme.tokens.theme.radius.lg}px`,
          backgroundColor: modeTokens.bg.default,
          width: 'fit-content',
          minWidth: 200,
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            minHeight: 36,
            padding: theme.spacing(0, 2),
            ...theme.typography.caption,
            color: modeTokens.text.default,
          },
        };
      },
      icon: ({ theme }) => ({
        color: `${theme.tokens.modes[theme.palette.mode].icon.muted} !important`,
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
          '& .MuiInputAdornment-root': {
            margin: 0,
          },
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
        '&.MuiOutlinedInput-inputAdornedStart, &.MuiInputBase-inputAdornedStart': {
          paddingLeft: theme.spacing(2),
        },
        '&.MuiOutlinedInput-inputAdornedEnd, &.MuiInputBase-inputAdornedEnd': {
          paddingRight: theme.spacing(2),
        },
      }),
    },
  },
};
