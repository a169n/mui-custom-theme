import type { Components, Theme } from '@mui/material/styles';

export const navigationMenus: Components<Theme> = {
  MuiMenu: {
    defaultProps: { disableScrollLock: true },
    styleOverrides: {
      paper: ({ theme }) => {
        const modeTokens = theme.tokens.modes[theme.palette.mode];

        return {
          marginTop: theme.spacing(1),
          padding: 0,
          borderRadius: `${modeTokens.radius.xl}px`,
          backgroundColor: theme.palette.background.paper,
          boxShadow: modeTokens.shadow.black[2],
          '& .MuiMenu-list': {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          },
        };
      },
      list: ({ theme }) => ({
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }),
    },
  },
  MuiMenuItem: {
    defaultProps: { disableRipple: true },
    styleOverrides: {
      root: ({ theme }) => {
        const modeTokens = theme.tokens.modes[theme.palette.mode];
        const highlightColor = theme.palette.alpha.black[100];

        return {
          borderRadius: `${modeTokens.radius.md}px`,
          padding: theme.spacing(2),
          minHeight: 36,
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(2),
          transition: 'background-color 0.2s ease',
          '& .MuiListItemIcon-root': {
            minWidth: 0,
            color: modeTokens.icon.muted,
            '& svg': {
              color: 'inherit',
            },
          },
          '& .MuiTypography-root': {
            ...theme.typography.caption,
            color: modeTokens.text.default,
          },
          '&:hover': {
            backgroundColor: highlightColor,
          },
          '&.Mui-selected': {
            backgroundColor: highlightColor,
            '& .MuiTypography-root': {
              color: modeTokens.text.default,
            },
            '& .MuiListItemIcon-root': {
              color: modeTokens.icon.brand,
            },
          },
          '&.Mui-selected:hover': {
            backgroundColor: highlightColor,
          },
          '&.Mui-disabled': {
            opacity: 0.5,
            backgroundColor: 'transparent',
            '& .MuiTypography-root': {
              color: modeTokens.text.muted,
            },
            '& .MuiListItemIcon-root': {
              color: modeTokens.icon.muted,
            },
          },
        };
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
};

export default navigationMenus;
