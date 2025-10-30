import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Fragment } from 'react';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button, ButtonSize, ButtonVariant } from '../../components/Button';

const buttonsUsage = createUsageSnippet([
  'return (',
  '  <Button variant="primary" sx={{ borderRadius: theme.shape.borderRadius * 2 }}>',
  '    Save changes',
  '  </Button>',
  ');',
]);

const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost', 'link'];
const sizes: ButtonSize[] = ['small', 'medium', 'large'];

const StartIcon = () => <span style={{ display: 'inline-block', fontWeight: 600 }}>S</span>;
const EndIcon = () => <span style={{ display: 'inline-block', fontWeight: 600 }}>E</span>;

type ButtonShowcaseState = 'default' | 'hover' | 'loading' | 'disabled';

const states: { key: ButtonShowcaseState; label: string }[] = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover' },
  { key: 'loading', label: 'Loading' },
  { key: 'disabled', label: 'Disabled' },
];

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const getHoverOverrides = (variant: ButtonVariant, theme: any) => {
  const palette = theme.palette?.primary ?? theme.palette.primary;
  const colors = {
    bg: palette.main,
    text: palette.contrastText,
    textDark: palette.dark || palette.main,
  };

  switch (variant) {
    case 'secondary':
      return { opacity: 0.8, backgroundColor: colors.bg, color: colors.text };
    case 'link':
      return { opacity: 0.8, color: colors.textDark };
    default:
      return { opacity: 0.8 };
  }
};

const getStateProps = (state: ButtonShowcaseState, variant: ButtonVariant, theme: any) => {
  switch (state) {
    case 'hover':
      return { sx: { pointerEvents: 'none', ...getHoverOverrides(variant, theme) } };
    case 'loading':
      return { loading: true };
    case 'disabled':
      return { disabled: true };
    default:
      return {};
  }
};

export const ButtonsPage = () => {
  const theme = useTheme();
  const gridTemplateColumns = `180px repeat(${states.length}, minmax(180px, 1fr))`;

  return (
    <PageContainer
      title="Buttons"
      description="All theme button variants, states, and sizes."
      usage={buttonsUsage}
    >
      <Box sx={{ display: 'grid', gridTemplateColumns, gap: 3 }}>
        <Box />
        {states.map((state) => (
          <Box key={state.key} sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle2" color="text.secondary">
              {state.label}
            </Typography>
          </Box>
        ))}
        {variants.map((variant) => (
          <Fragment key={variant}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle1">{capitalize(variant)}</Typography>
            </Box>
            {states.map((state) => (
              <Stack key={`${variant}-${state.key}`} spacing={1.5} alignItems="flex-start">
                {sizes.map((size) => (
                  <Stack key={`${variant}-${state.key}-${size}`} spacing={0.5} alignItems="flex-start">
                    <Typography variant="caption" color="text.secondary">
                      {capitalize(size)}
                    </Typography>
                    <Button
                      variant={variant}
                      size={size}
                      disableRipple
                      {...getStateProps(state.key, variant, theme)}
                    >
                      Button
                    </Button>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Fragment>
        ))}
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="subtitle1" gutterBottom>
          Icons
        </Typography>
        <Stack spacing={2}>
          {variants.map((variant) => (
            <Stack key={`${variant}-icons`} direction="row" spacing={2} alignItems="center">
              <Button variant={variant} startIcon={<StartIcon />}>Button</Button>
              <Button variant={variant} endIcon={<EndIcon />}>Button</Button>
            </Stack>
          ))}
        </Stack>
      </Box>
    </PageContainer>
  );
};

export default ButtonsPage;
