import type { Components, Theme } from '@mui/material/styles';

const getTableRadius = (theme: Theme) =>
  `${theme.tokens?.theme?.radius?.md ?? theme.shape.borderRadius ?? 8}px`;

export const table: Components<Theme> = {
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }) => {
        const borderColor = theme.palette.gray[300];
        const radius = getTableRadius(theme);

        return {
          width: '100%',
          borderRadius: radius,
          border: `1px solid ${borderColor}`,
          overflow: 'auto',
          backgroundColor: theme.palette.white.main,
          scrollbarColor: `${theme.palette.gray[300]} transparent`,
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.gray[300],
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: theme.palette.gray[400],
            },
          },
          '&::-webkit-scrollbar-track': {
            background: theme.palette.gray[100],
          },
        };
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: ({ theme }) => {
        const borderColor = theme.palette.gray[300];
        const radius = getTableRadius(theme);

        return {
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: 0,
          backgroundColor: theme.palette.white.main,
          '& thead': {
            backgroundColor: theme.palette.white.main,
          },
          '& tbody': {
            backgroundColor: theme.palette.white.main,
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
        backgroundColor: theme.palette.white.main,
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
        backgroundColor: theme.palette.white.main,
      }),
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => {
        const borderColor = theme.palette.gray[300];

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
        const borderColor = theme.palette.gray[300];
        const modeTokens = theme.tokens?.modes?.[theme.palette.mode];
        const warningColor = modeTokens?.text.warning ?? theme.palette.warning.main;
        const negativeColor = modeTokens?.text.negative ?? theme.palette.error.main;
        const positiveColor = modeTokens?.text.positive ?? theme.palette.success.main;

        return {
          ...theme.typography.textM,
          color: theme.palette.text.primary,
          padding: theme.spacing(2),
          backgroundColor: theme.palette.white.main,
          borderBottom: 'none',
          borderTop: `1px solid ${borderColor}`,
          borderLeft: `1px solid ${borderColor}`,
          position: 'relative',
          '&:first-of-type': {
            borderLeft: 'none',
          },
          '&:last-of-type': {
            borderRight: `1px solid ${borderColor}`,
          },
          '&[data-editable="true"]': {
            cursor: 'text',
          },
          '&[data-editable="true"]:focus-within': {
            outline: `2px solid ${theme.palette.brand[700]}`,
            outlineOffset: '-2px',
            zIndex: 1,
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
        backgroundColor: theme.palette.white.main,
        borderTop: 'none',
        borderBottom: 'none',
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightRegular,
      }),
    },
  },
};

export default table;
