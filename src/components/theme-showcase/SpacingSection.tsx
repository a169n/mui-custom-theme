import { Box, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import SectionCard from './SectionCard';

const spacingExamples = [0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20];

const SpacingSection = () => {
  const theme = useTheme();

  const radiusScale = theme.tokens.theme.radius;
  const radiusEntries = Object.entries(radiusScale) as Array<[string, number]>;

  return (
    <SectionCard
      title="Spacing & Radius"
      description="Spacing values leverage the 4px grid while radius tokens come directly from the design system."
    >
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Typography variant="title">Spacing (theme.spacing)</Typography>
          <Grid container spacing={2}>
            {spacingExamples.map((factor) => {
              const spacingValue = theme.spacing(factor);
              return (
                <Grid item xs={6} sm={4} md={3} key={factor}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Box
                      sx={{
                        bgcolor: 'brand[500]',
                        height: spacingValue,
                        width: spacingValue,
                        borderRadius: 1,
                        mx: 'auto',
                        mb: 1,
                      }}
                    />
                    <Typography variant="textM" sx={{ fontFamily: 'monospace' }}>
                      spacing({factor})
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontFamily: 'monospace' }}
                    >
                      {spacingValue}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="title">Radius tokens</Typography>
          <Grid container spacing={2}>
            {radiusEntries.map(([label, value]) => (
              <Grid item xs={6} sm={4} md={3} key={label}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Box
                    sx={{
                      bgcolor: 'gray[100]',
                      borderRadius: `${value}px`,
                      height: 80,
                      width: 80,
                      mx: 'auto',
                      mb: 1,
                      border: `1px solid ${theme.palette.gray[300]}`,
                    }}
                  />
                  <Typography variant="textM" sx={{ textTransform: 'uppercase' }}>
                    {label}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: 'monospace' }}
                  >
                    {value}px
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </SectionCard>
  );
};

export default SpacingSection;
