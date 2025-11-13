import { Box, Typography } from '@mui/material';
import { IconBorderSides } from '@tabler/icons-react';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import {
  IconButton,
  IconButtonSize,
  IconButtonTone,
  IconButtonVariant,
} from '../../components/IconButton';

const iconButtonsUsage = createUsageSnippet([
  'return (',
  '  <IconButton variant="primary" tone="default" aria-label="Settings">',
  '    <IconBorderSides size={20} stroke={1.5} />',
  '  </IconButton>',
  ');',
]);

const variants: IconButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost'];
const sizes: IconButtonSize[] = ['small', 'medium', 'large'];
const tones: IconButtonTone[] = ['default', 'positive', 'negative'];
const variantToneMap: Record<IconButtonVariant, IconButtonTone[]> = {
  primary: tones,
  secondary: ['default'],
  outline: tones,
  ghost: tones,
};

type IconButtonShowcaseState = 'default' | 'disabled' | 'loading';

const states: { key: IconButtonShowcaseState; label: string }[] = [
  { key: 'default', label: 'Default' },
  { key: 'disabled', label: 'Disabled' },
  { key: 'loading', label: 'Loading' },
];

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const getStateProps = (state: IconButtonShowcaseState) => {
  switch (state) {
    case 'disabled':
      return { disabled: true };
    case 'loading':
      return { loading: true };
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

export const IconButtonsPage = () => {
  const firstColWidth = 160;

  return (
    <PageContainer
      title="Icon Buttons"
      description="Matrix of every icon button variant, size, tone, and state to validate spacing, radii, and tone styling."
      usage={iconButtonsUsage}
    >
      {variants.map((variant) => (
        <Box key={variant} sx={{ mb: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: 1, mb: 2 }}
          >
            {capitalize(variant)}
          </Typography>

          <Box sx={{ overflowX: 'auto' }}>
            <Box
              sx={{
                minWidth: firstColWidth + sizes.length * states.length * 160,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: `${firstColWidth}px repeat(${sizes.length * states.length}, 1fr)`,
                }}
              >
                <HeaderCell>
                  <Typography variant="caption" color="text.secondary">
                    Size / State
                  </Typography>
                </HeaderCell>

                {sizes.map((size) =>
                  states.map((state) => (
                    <HeaderCell key={`hdr-${size}-${state.key}`}>
                      <Box sx={{ lineHeight: 1.2 }}>
                        <Typography variant="caption" color="text.secondary">
                          {capitalize(size)}
                        </Typography>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {capitalize(state.label)}
                        </Typography>
                      </Box>
                    </HeaderCell>
                  ))
                )}
              </Box>

              {variantToneMap[variant].map((tone) => (
                <Box
                  key={`${variant}-${tone}`}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: `${firstColWidth}px repeat(${sizes.length * states.length}, 1fr)`,
                  }}
                >
                  <BodyCell>
                    <Typography variant="textM" color="text.secondary">
                      {capitalize(tone)}
                    </Typography>
                  </BodyCell>

                  {sizes.map((size) =>
                    states.map((state) => (
                      <BodyCell key={`cell-${variant}-${tone}-${size}-${state.key}`}>
                        <IconButton
                          variant={variant}
                          tone={tone}
                          size={size}
                          aria-label={`${variant} ${tone} icon button`}
                          {...getStateProps(state.key)}
                        >
                          <IconBorderSides size={size === 'large' ? 24 : 20} stroke={1.5} />
                        </IconButton>
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

export default IconButtonsPage;
