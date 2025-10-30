import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import SectionCard from './SectionCard';

const TokensSection = () => {
  const theme = useTheme();

  const tokenExamples = [
    {
      label: 'Brand ramp',
      path: 'theme.tokens.primitives.colors.brand[600]',
      value: theme.tokens.primitives.colors.brand[600],
      preview: (
        <Box
          sx={{
            width: '100%',
            height: 32,
            borderRadius: 1,
            bgcolor: theme.tokens.primitives.colors.brand[600],
          }}
        />
      ),
    },
    {
      label: 'Neutral background',
      path: 'theme.tokens.modes.light.bg.default',
      value: theme.tokens.modes.light.bg.default,
      preview: (
        <Box
          sx={{
            width: '100%',
            height: 32,
            borderRadius: 1,
            bgcolor: theme.tokens.modes.light.bg.default,
            border: `1px solid ${theme.palette.gray[200]}`,
          }}
        />
      ),
    },
    {
      label: 'Radius - md',
      path: 'theme.tokens.theme.radius.md',
      value: `${theme.tokens.theme.radius.md}px`,
      preview: (
        <Box
          sx={{
            width: 48,
            height: 48,
            mx: 'auto',
            borderRadius: `${theme.tokens.theme.radius.md}px`,
            bgcolor: theme.palette.brand[500],
            boxShadow: theme.shadows[4],
          }}
        />
      ),
    },
    {
      label: 'Spacing unit',
      path: 'theme.tokens.primitives.spacing[4]',
      value: `${theme.tokens.primitives.spacing[4]}px`,
      preview: (
        <Box
          sx={{
            width: theme.spacing(4),
            height: 12,
            bgcolor: theme.palette.brand[300],
            borderRadius: 999,
          }}
        />
      ),
    },
    {
      label: 'Typography - H3 font-size',
      path: "theme.tokens.theme.text.H3['font-size']",
      value: `${theme.tokens.theme.text.H3['font-size']}px`,
      preview: (
        <Typography variant="h6" color="text.secondary">
          {theme.tokens.theme.text.H3['font-size']}px
        </Typography>
      ),
    },
  ];

  return (
    <SectionCard
      title="Design token access"
      description="The theme exposes the raw design tokens so primitives can be consumed alongside palette helpers."
    >
      <Stack spacing={2}>
        {tokenExamples.map((token) => (
          <Paper
            key={token.path}
            variant="outlined"
            sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <Box sx={{ flex: 1, width: '100%' }}>{token.preview}</Box>
              <Stack spacing={0.5} sx={{ flex: 2 }}>
                <Typography variant="subtitle">{token.label}</Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontFamily: 'monospace' }}
                >
                  {token.path}
                </Typography>
                <Typography variant="textM" sx={{ fontFamily: 'monospace' }}>
                  {token.value}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </SectionCard>
  );
};

export default TokensSection;
