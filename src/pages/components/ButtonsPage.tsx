import { Box, Stack, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button, ButtonSize, ButtonVariant, ButtonTone } from '../../components/Button';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const buttonsUsage = createUsageSnippet([
  'return (',
  '  <Button variant="primary" tone="default">',
  '    Save changes',
  '  </Button>',
  ');',
]);

const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost', 'link'];
const sizes: ButtonSize[] = ['small', 'medium', 'large'];
const tones: ButtonTone[] = ['default', 'positive', 'negative'];
const variantToneMap: Record<ButtonVariant, ButtonTone[]> = {
  primary: tones,
  secondary: ['default'],
  outline: tones,
  ghost: tones,
  link: ['default'],
};

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
  const firstColWidth = 160;

  return (
    <PageContainer
      title="Buttons"
      description="All theme button variants, states, and sizes with dedicated loading and icon examples. One button per matrix cell."
      usage={buttonsUsage}
    >
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="subtitle1"
          sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: 1, mb: 2 }}
        >
          Loading states
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {sizes.map((size) => (
            <Button
              key={`loading-${size}`}
              variant="primary"
              tone="default"
              size={size}
              loading
              disableRipple
              sx={{ minWidth: 160 }}
            >
              Loading
            </Button>
          ))}
        </Stack>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="subtitle1"
          sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: 1, mb: 2 }}
        >
          Icon placement
        </Typography>

        <Stack spacing={2}>
          {sizes.map((size) => (
            <Stack key={`icons-${size}`} direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button
                variant="primary"
                tone="default"
                size={size}
                startIcon={<IconArrowLeft size={18} stroke={1.5} />}
                disableRipple
                sx={{ minWidth: 160 }}
              >
                Start icon
              </Button>
              <Button
                variant="primary"
                tone="default"
                size={size}
                endIcon={<IconArrowRight size={18} stroke={1.5} />}
                disableRipple
                sx={{ minWidth: 160 }}
              >
                End icon
              </Button>
            </Stack>
          ))}
        </Stack>
      </Box>

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

              {/* Body Rows: one per tone */}
              {variantToneMap[variant].map((tone, rowIdx) => (
                <Box
                  key={`${variant}-${tone}`}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: `${firstColWidth}px repeat(${sizes.length * states.length}, 1fr)`,
                    // subtle zebra striping for readability
                  }}
                >
                  {/* Tone label cell (first column) */}
                  <BodyCell>
                    <Typography variant="body2" color="text.secondary">
                      {capitalize(tone)}
                    </Typography>
                  </BodyCell>

                  {/* Buttons matrix cells */}
                  {sizes.map((size) =>
                    states.map((state) => (
                      <BodyCell key={`cell-${tone}-${size}-${state.key}`}>
                        <Button
                          variant={variant}
                          tone={tone}
                          size={size}
                          {...getStateProps(state.key)}
                          disableRipple
                          sx={{ width: 'fit-content', minWidth: 'fit-content' }}
                        >
                          Button
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
