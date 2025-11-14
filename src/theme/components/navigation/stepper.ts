import type { Components, Theme } from '@mui/material/styles';

const lineHorizontalSelector = '.CustomStepper--line.CustomStepper--horizontal';
const indicatorSize = 24;

export const navigationStepper: Components<Theme> = {
  MuiStepConnector: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const offset = `${indicatorSize / 2}px`;

        if (ownerState?.orientation === 'vertical') {
          return {
            marginLeft: offset,
            padding: 0,
          };
        }

        if (ownerState?.alternativeLabel || ownerState?.orientation === 'horizontal') {
          return {
            left: `calc(-50% + ${offset})`,
            right: `calc(50% + ${offset})`,
          };
        }

        return {};
      },
      line: ({ theme, ownerState }) => {
        const modeTokens = theme.tokens?.modes?.[theme.palette.mode];
        const borderColor = modeTokens?.border?.default ?? theme.palette.divider;

        if (ownerState?.orientation === 'vertical') {
          const offset = `${indicatorSize / 2}px`;

          return {
            borderColor,
            borderLeftWidth: '1px',
            borderTopWidth: 0,
            // Extend the line beyond its container
            marginTop: `-${offset}`,
            marginBottom: `-${offset}`,
            paddingTop: offset,
            paddingBottom: offset,
            zIndex: -1,
          };
        }

        return {
          borderColor,
          borderTopWidth: '1px',
          borderLeftWidth: 0,
        };
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      root: ({ ownerState }) => {
        if (ownerState?.orientation === 'vertical') {
          return {
            // Ensure step content is above the connector line
            position: 'relative',
            zIndex: 1,
            backgroundColor: 'transparent',
            [`${lineHorizontalSelector} & .MuiStepLabel-iconContainer`]: {
              padding: 0,
              width: `${indicatorSize}px`,
              justifyContent: 'center',
            },
          };
        }

        return {
          [`${lineHorizontalSelector} & .MuiStepLabel-iconContainer`]: {
            padding: 0,
            width: `${indicatorSize}px`,
            justifyContent: 'center',
          },
        };
      },
      labelContainer: ({ ownerState }) => {
        if (ownerState?.orientation === 'vertical') {
          return {
            paddingTop: 0,
            paddingBottom: 0,
            position: 'relative',
            zIndex: 1,
          };
        }
        return {};
      },
      iconContainer: ({ ownerState }) => {
        if (ownerState?.orientation === 'vertical') {
          return {
            position: 'relative',
            zIndex: 1,
          };
        }
        return {};
      },
    },
  },
  MuiStep: {
    styleOverrides: {
      root: () => {
        return {
          position: 'relative',
          zIndex: 1,
        };
      },
    },
  },
};

export default navigationStepper;
