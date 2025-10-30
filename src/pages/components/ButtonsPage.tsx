import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button, ButtonSize, ButtonVariant, ButtonColor } from '../../components/Button';

const buttonsUsage = createUsageSnippet([
  'return (',
  '  <Button variant="primary" sx={{ borderRadius: theme.shape.borderRadius * 2 }}>',
  '    Save changes',
  '  </Button>',
  ');',
]);

const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost', 'link'];
const sizes: ButtonSize[] = ['small', 'medium', 'large'];
const colors: ButtonColor[] = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
  'inherit',
];

type ButtonShowcaseState = 'default' | 'disabled';

const states: { key: ButtonShowcaseState; label: string }[] = [
  { key: 'default', label: 'Default' },
  { key: 'disabled', label: 'Disabled' },
];

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const getStateProps = (state: ButtonShowcaseState) => {
  switch (state) {
    case 'disabled':
      return { disabled: true };
    default:
      return {};
  }
};

const HeaderCell = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      p: 1.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.paper',
      borderRight: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'divider',
      minHeight: 56,
      textAlign: 'center',
    }}
  >
    {children}
  </Box>
);

const BodyCell = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      p: 1.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRight: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'divider',
      minHeight: 64,
    }}
  >
    {children}
  </Box>
);

export const ButtonsPage = () => {
  const theme = useTheme();

  // total columns = 1 (color label) + size/state matrix
  const totalMatrixCols = 1 + sizes.length * states.length;
  const firstColWidth = 160;

  return (
    <PageContainer
      title="Buttons"
      description="All theme button variants, states, and sizes. One button per cell; no icons."
      usage={buttonsUsage}
    >
      {variants.map((variant) => (
        <Box key={variant} sx={{ mb: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: 1, mb: 2 }}
          >
            {capitalize(variant)}
          </Typography>

          {/* Matrix wrapper with scroll if overflow */}
          <Box sx={{ overflowX: 'auto' }}>
            {/* Table-like grid with single outer border */}
            <Box
              sx={{
                minWidth: firstColWidth + sizes.length * states.length * 160,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              {/* Header Row */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: `${firstColWidth}px repeat(${sizes.length * states.length}, 1fr)`,
                }}
              >
                {/* Top-left corner cell */}
                <HeaderCell>
                  <Typography variant="caption" color="text.secondary">
                    Size / State
                  </Typography>
                </HeaderCell>

                {/* Size-State headers */}
                {sizes.map((size) =>
                  states.map((state) => (
                    <HeaderCell key={`hdr-${size}-${state.key}`}>
                      <Box sx={{ lineHeight: 1.2 }}>
                        <Typography variant="caption" color="text.secondary">
                          {capitalize(size)}
                        </Typography>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {capitalize(state.key)}
                        </Typography>
                      </Box>
                    </HeaderCell>
                  ))
                )}
              </Box>

              {/* Body Rows: one per color */}
              {colors.map((color, rowIdx) => (
                <Box
                  key={`${variant}-${color}`}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: `${firstColWidth}px repeat(${sizes.length * states.length}, 1fr)`,
                    // subtle zebra striping for readability
                    bgcolor: rowIdx % 2 === 0 ? 'background.default' : 'background.paper',
                  }}
                >
                  {/* Color label cell (first column) */}
                  <BodyCell>
                    <Typography variant="body2" color="text.secondary">
                      {capitalize(color)}
                    </Typography>
                  </BodyCell>

                  {/* Buttons matrix cells */}
                  {sizes.map((size) =>
                    states.map((state) => (
                      <BodyCell key={`cell-${color}-${size}-${state.key}`}>
                        <Button
                          variant={variant}
                          color={color}
                          size={size}
                          {...getStateProps(state.key)}
                          disableRipple
                          sx={{ width: 'fit-content', minWidth: 'fit-content' }}
                        >
                          {capitalize(size)}
                        </Button>
                      </BodyCell>
                    ))
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </PageContainer>
  );
};

export default ButtonsPage;
