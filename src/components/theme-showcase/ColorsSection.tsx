import { Box, Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import type { PaletteColor } from '@mui/material/styles';
import SectionCard from './SectionCard';

const rampShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;

type RampShade = (typeof rampShades)[number];

type RampConfig = {
  readonly label: string;
  readonly ramp: Record<RampShade | 'contrastText', string>;
};

type StandardPaletteConfig = {
  readonly label: string;
  readonly color: PaletteColor;
};

const ColorsSection = () => {
  const theme = useTheme();

  const standardPalette: StandardPaletteConfig[] = [
    { label: 'Primary', color: theme.palette.primary },
    { label: 'Secondary', color: theme.palette.secondary },
    { label: 'Success', color: theme.palette.success },
    { label: 'Info', color: theme.palette.info },
    { label: 'Warning', color: theme.palette.warning },
    { label: 'Error', color: theme.palette.error },
  ];

  const extendedRamps: RampConfig[] = [
    { label: 'Brand', ramp: theme.palette.brand },
    { label: 'Gray', ramp: theme.palette.gray },
    { label: 'Green', ramp: theme.palette.green },
    { label: 'Red', ramp: theme.palette.red },
    { label: 'Yellow', ramp: theme.palette.yellow },
    { label: 'Purple', ramp: theme.palette.purple },
  ];

  const surfaceExamples = [
    {
      label: 'Background (default)',
      token: 'theme.palette.background.default',
      value: theme.palette.background.default,
      textColor: theme.palette.text.primary,
    },
    {
      label: 'Background (paper)',
      token: 'theme.palette.background.paper',
      value: theme.palette.background.paper,
      textColor: theme.palette.text.primary,
    },
    {
      label: 'Brand [600]',
      token: 'theme.palette.brand[600]',
      value: theme.palette.brand[600],
      textColor: theme.palette.brand.contrastText,
    },
    {
      label: 'Red [500]',
      token: 'theme.palette.red[500]',
      value: theme.palette.red[500],
      textColor: theme.palette.white.main,
    },
    {
      label: 'Gray [100]',
      token: 'theme.palette.gray[100]',
      value: theme.palette.gray[100],
      textColor: theme.palette.text.primary,
    },
    {
      label: 'Lime [500]',
      token: 'theme.palette.lime[500]',
      value: theme.palette.lime[500],
      textColor: theme.palette.lime.contrastText,
    },
  ];

  const getRampToneColor = (tone: RampShade, contrastText: string) => {
    const numericTone = Number.parseInt(tone, 10);

    if (Number.isNaN(numericTone) || numericTone < 500) {
      return theme.palette.text.primary;
    }

    return contrastText || theme.palette.common.white;
  };

  return (
    <SectionCard
      title="Color palette"
      description="Core palettes and extended ramps generated from the custom design tokens."
    >
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Typography variant="title">Core palette colors</Typography>
          <Grid container spacing={2}>
            {standardPalette.map((entry) => (
              <Grid item xs={12} sm={6} md={4} key={entry.label}>
                <Stack spacing={1}>
                  <Typography variant="subtitle" color="text.secondary">
                    {entry.label}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {(['light', 'main', 'dark'] as const).map((tone) => (
                      <Box
                        key={tone}
                        sx={{
                          flex: 1,
                          minHeight: 96,
                          borderRadius: 1,
                          bgcolor: entry.color[tone],
                          color: entry.color.contrastText,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          p: 2,
                        }}
                      >
                        <Typography variant="subtitle" sx={{ opacity: 0.75 }}>
                          {tone}
                        </Typography>
                        <Typography variant="textM" sx={{ fontFamily: 'monospace' }}>
                          {entry.color[tone]}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Divider />

        <Stack spacing={2}>
          <Typography variant="title">Extended color ramps</Typography>
          <Grid container spacing={2}>
            {extendedRamps.map((entry) => (
              <Grid item xs={12} key={entry.label}>
                <Stack spacing={1}>
                  <Typography variant="subtitle" color="text.secondary">
                    {entry.label}
                  </Typography>
                  <Grid container spacing={1.5}>
                    {rampShades.map((tone) => (
                      <Grid item xs={6} sm={4} md={2} lg={1} key={tone}>
                        <Box
                          sx={{
                            borderRadius: 1,
                            bgcolor: entry.ramp[tone],
                            color: getRampToneColor(tone, entry.ramp.contrastText),
                            minHeight: 88,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 1.5,
                          }}
                        >
                          <Typography variant="caption" sx={{ opacity: 0.8 }}>
                            {tone}
                          </Typography>
                          <Typography variant="textM" sx={{ fontFamily: 'monospace' }}>
                            {entry.ramp[tone]}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Divider />

        <Stack spacing={2}>
          <Typography variant="title">Semantic surfaces</Typography>
          <Grid container spacing={2}>
            {surfaceExamples.map((example) => (
              <Grid item xs={12} sm={6} md={4} key={example.token}>
                <Box
                  sx={{
                    borderRadius: 1,
                    bgcolor: example.value,
                    color: example.textColor,
                    p: 2,
                    minHeight: 96,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="subtitle" sx={{ opacity: 0.75 }}>
                    {example.label}
                  </Typography>
                  <Stack spacing={0.5}>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      {example.token}
                    </Typography>
                    <Typography variant="textM" sx={{ fontFamily: 'monospace' }}>
                      {example.value}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </SectionCard>
  );
};

export default ColorsSection;
