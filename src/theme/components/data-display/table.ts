import { Components, Theme } from '@mui/material/styles';

const getTableRadius = (theme: Theme) =>
  `${theme.tokens?.theme?.radius?.md ?? theme.shape.borderRadius ?? 8}px`;

const getTableBorderColor = (theme: Theme) => {
  const modeTokens = theme.tokens?.modes?.[theme.palette.mode];

  return modeTokens?.border?.default ?? theme.palette.gray[300];
};

const getTableBackgroundColor = (theme: Theme) => {
  if (theme.palette.mode === 'dark') {
    return theme.tokens?.primitives?.colors?.neutral?.[900] ?? theme.palette.grey[900];
  }

  return theme.tokens?.primitives?.colors?.base?.white ?? theme.palette.common.white;
};

export const table: Components<Theme> = {
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }) => {
        const borderColor = getTableBorderColor(theme);
        const radius = getTableRadius(theme);
        const backgroundColor = getTableBackgroundColor(theme); // Set default background color

        return {
          width: '100%',
          borderRadius: radius,
          borderTop: `1px solid ${borderColor}`,
          borderLeft: `1px solid ${borderColor}`,
          overflow: 'auto',
          backgroundColor, // Apply the default background color
        };
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: ({ theme }) => {
        const borderColor = getTableBorderColor(theme);
        const radius = getTableRadius(theme);
        const backgroundColor = getTableBackgroundColor(theme); // Set default background color

        return {
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: 0,
          backgroundColor, // Apply the default background color
          '& thead': {
            backgroundColor, // Apply the default background color
          },
          '& tbody': {
            backgroundColor, // Apply the default background color
          },
          '& thead tr:first-of-type th:first-of-type': {
            borderTopLeftRadius: radius,
          },
          '& thead tr:first-of-type th:last-of-type': {
            borderTopRightRadius: radius,
          },
          '& tbody tr:last-of-type td:first-of-type': {
            borderBottomLeftRadius: radius,
          },
          '& tbody tr:last-of-type td:last-of-type': {
            borderBottomRightRadius: radius,
          },
          '& thead tr:last-of-type .MuiTableCell-root': {
            borderBottom: `1px solid ${borderColor}`,
          },
          '& tbody tr:last-of-type .MuiTableCell-root': {
            borderBottom: `1px solid ${borderColor}`,
          },
        };
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: getTableBackgroundColor(theme), // Apply the default background color
        '& .MuiTableCell-root': {
          ...theme.typography.textM,
          color: theme.palette.text.secondary,
          fontWeight: theme.typography.fontWeightRegular,
        },
      }),
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: getTableBackgroundColor(theme), // Apply the default background color
      }),
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => {
        const borderColor = getTableBorderColor(theme);

        return {
          '&:last-of-type .MuiTableCell-root': {
            borderBottom: `1px solid ${borderColor}`,
          },
        };
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => {
        const borderColor = getTableBorderColor(theme);
        const modeTokens = theme.tokens?.modes?.[theme.palette.mode];
        const warningColor = modeTokens?.text.warning ?? theme.palette.warning.main;
        const negativeColor = modeTokens?.text.negative ?? theme.palette.error.main;
        const positiveColor = modeTokens?.text.positive ?? theme.palette.success.main;
        const hoverBackground = modeTokens?.bg?.muted ?? theme.palette.action.hover;
        const focusBorderColor = modeTokens?.border?.brand ?? theme.palette.brand[600];
        const backgroundColor = getTableBackgroundColor(theme); // Apply the default background color

        return {
          ...theme.typography.textM,
          color: theme.palette.text.primary,
          padding: theme.spacing(2),
          backgroundColor, // Apply the default background color
          borderBottom: 'none',
          borderTop: `1px solid ${borderColor}`,
          borderLeft: `1px solid ${borderColor}`,
          position: 'relative',
          transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
            duration: theme.transitions.duration.shortest,
          }),
          '&:first-of-type': {
            borderLeft: 'none',
          },
          '&:last-of-type': {
            borderRight: `1px solid ${borderColor}`,
          },
          '&:hover': {
            backgroundColor: hoverBackground,
          },
          '&[data-editable="true"]': {
            cursor: 'text',
          },
          '&[data-editable="true"]:hover': {
            backgroundColor: hoverBackground,
          },
          '&[data-editable="true"]:focus-within': {
            boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,
            zIndex: 1,
          },
          '&[data-editable="true"]:focus-within:last-of-type': {
            borderRight: `1px solid ${focusBorderColor}`,
          },
          '&[data-tone="default"]': {
            color: theme.palette.text.primary,
          },
          '&[data-tone="warning"]': {
            color: warningColor,
          },
          '&[data-tone="negative"]': {
            color: negativeColor,
          },
          '&[data-tone="positive"]': {
            color: positiveColor,
          },
        };
      },
      head: ({ theme }) => ({
        backgroundColor: getTableBackgroundColor(theme), // Apply the default background color
        borderTop: 'none',
        borderBottom: 'none',
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightRegular,
      }),
    },
  },
};

export default table;
