import { Box, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import { useState } from 'react';
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

type ButtonShowcaseState = 'default' | 'hover' | 'disabled';

const states: { key: ButtonShowcaseState; label: string }[] = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover' },
  { key: 'disabled', label: 'Disabled' },
];

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const getStateProps = (state: ButtonShowcaseState) => {
  switch (state) {
    case 'disabled':
      return { disabled: true };
    case 'hover':
      return { forceHoverState: true, disableRipple: true };
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
  const [showStartIcon, setShowStartIcon] = useState(false);
  const [showEndIcon, setShowEndIcon] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);
  const startIcon = showStartIcon ? <IconArrowLeft size={18} stroke={1.5} /> : undefined;
  const endIcon = showEndIcon ? <IconArrowRight size={18} stroke={1.5} /> : undefined;

  return (
    <PageContainer
      title="Buttons"
      description="All theme button variants, states, and sizes with dedicated loading examples plus toggleable icons. One button per matrix cell."
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
              startIcon={startIcon}
              endIcon={endIcon}
              disableRipple
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
        Width-safe loading toggle
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
        <FormControlLabel
          control={
            <Switch checked={demoLoading} onChange={(event) => setDemoLoading(event.target.checked)} />
          }
          label="Toggle loading"
        />
        <Button variant="primary" size="medium" loading={demoLoading}>
          Consistent width
        </Button>
      </Stack>
    </Box>

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="subtitle1"
          sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: 1, mb: 2 }}
        >
          Icon controls
        </Typography>

        <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap>
          <FormControlLabel
            control={
              <Switch
                checked={showStartIcon}
                onChange={(event) => setShowStartIcon(event.target.checked)}
              />
            }
            label="Show start icon"
          />
          <FormControlLabel
            control={
              <Switch
                checked={showEndIcon}
                onChange={(event) => setShowEndIcon(event.target.checked)}
              />
            }
            label="Show end icon"
          />
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
                          {state.label}
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
                    <Typography variant="textM" color="text.secondary">
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
                          startIcon={startIcon}
                          endIcon={endIcon}
                          {...getStateProps(state.key)}
                          disableRipple
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
