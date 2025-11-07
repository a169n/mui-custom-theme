import { Box, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const tokensUsage = createUsageSnippet([
  "const modeTokens = theme.tokens.modes?.[theme.palette.mode];",
  '',
  'return (',
  '  <Box',
  '    sx={{',
  '      bgcolor: modeTokens.bg.default,',
  '      color: modeTokens.text.default,',
  '      borderRadius: `${modeTokens.radius.lg}px`,',
  '      padding: theme.spacing(4),',
  '      boxShadow: modeTokens.shadow.black[2],',
  '    }}',
  '  >',
  '    theme.tokens gives you direct access to the BI primitives.',
  '  </Box>',
  ');',
]);

type ThemeWithTokens = Theme & {
  tokens: NonNullable<Theme['tokens']>;
};

type TokenCard = {
  title: string;
  description: string;
  render: (theme: ThemeWithTokens) => React.ReactNode;
  value: (theme: ThemeWithTokens) => string;
};

const primitiveCards: TokenCard[] = [
  {
    title: 'Brand 600',
    description: 'Static ramp from primitives.colors.brand[600]',
    render: (theme: ThemeWithTokens) => (
      <Box
        sx={{
          height: 80,
          borderRadius: 2,
          bgcolor: theme.tokens.primitives.colors.brand[600],
        }}
      />
    ),
    value: (theme: ThemeWithTokens) => theme.tokens.primitives.colors.brand[600],
  },
  {
    title: 'Spacing unit',
    description: 'Spacing scale matches tailwind-friendly aliases',
    render: (theme: ThemeWithTokens) => (
      <Box
        sx={{
          height: theme.tokens.primitives.spacing[6],
          width: theme.tokens.primitives.spacing[6],
          borderRadius: '50%',
          bgcolor: theme.palette.brand[300],
          mx: 'auto',
        }}
      />
    ),
    value: (theme: ThemeWithTokens) => `${theme.tokens.primitives.spacing[6]}px`,
  },
  {
    title: 'Rounded-lg',
    description: 'Use rounded aliases for consistent radii',
    render: (theme: ThemeWithTokens) => (
      <Box
        sx={{
          height: 64,
          borderRadius: `${theme.tokens.primitives['border-radius']['rounded-lg']}px`,
          border: '1px dashed',
          borderColor: theme.palette.divider,
        }}
      />
    ),
    value: (theme: ThemeWithTokens) =>
      `${theme.tokens.primitives['border-radius']['rounded-lg']}px`,
  },
];

const DeveloperTokensPage = () => {
  const theme = useTheme<ThemeWithTokens>();
  const mode = theme.palette.mode ?? 'light';
  const modeTokens = theme.tokens.modes?.[mode];

  return (
    <PageContainer
      title="Token Usage"
      description="Quick references for consuming the BI primitives and mode-specific tokens."
      usage={tokensUsage}
    >
      {modeTokens ? (
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Typography variant="subtitle">When to use what?</Typography>
            <Typography variant="textM" color="text.secondary">
              - Use `theme.tokens.primitives.*` for static assets such as illustrations, charts, or
              design exports.
              <br />- Use `theme.tokens.modes[theme.palette.mode]` for anything rendered inside the
              app so it automatically follows light/dark mode.
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="title">Primitive snapshots</Typography>
            <Grid container spacing={3}>
              {primitiveCards.map((card) => (
                <Grid item xs={12} sm={6} md={4} key={card.title}>
                  <Paper sx={{ p: 2, height: '100%' }} variant="outlined">
                    <Stack spacing={1.5}>
                      {card.render(theme)}
                      <Typography variant="subtitle">{card.title}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {card.description}
                      </Typography>
                      <Typography variant="textS" sx={{ fontFamily: 'monospace' }}>
                        {card.value(theme)}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="title">Mode aware tokens</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }} variant="outlined">
                  <Typography variant="subtitle" sx={{ mb: 1 }}>
                    Surfaces
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {['default', 'muted', 'background'].map((key) => (
                      <Box key={key} sx={{ textAlign: 'center', flex: 1 }}>
                        <Box
                          sx={{
                            height: 80,
                            borderRadius: 2,
                            bgcolor: modeTokens.bg[key as keyof typeof modeTokens.bg],
                            border: '1px solid',
                            borderColor: theme.palette.divider,
                          }}
                        />
                        <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                          bg.{key}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }} variant="outlined">
                  <Typography variant="subtitle" sx={{ mb: 1 }}>
                    Shadows & radius
                  </Typography>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        height: 64,
                        borderRadius: `${modeTokens.radius.lg}px`,
                        bgcolor: modeTokens.bg.brand,
                        boxShadow: modeTokens.shadow.black[2],
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      radius.lg = {modeTokens.radius.lg}px / shadow.black[2]
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      ) : (
        <Typography color="error.main">
          Tokens are unavailable on the current theme instance. Ensure the custom theme injects the
          `tokens` field.
        </Typography>
      )}
    </PageContainer>
  );
};

export default DeveloperTokensPage;
