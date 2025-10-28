import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import type { PaletteColor } from '@mui/material/styles';
import type { TypographyProps } from '@mui/material/Typography';

// ThemeShowcase renders a quick visual overview of the custom tokens wired into the MUI theme.
// Drop the component anywhere inside the ThemeProvider to inspect colors and typography variants.
const ThemeShowcase = () => {
  const theme = useTheme();

  // Helper for mapping palette colors (primary, secondary, etc.) into swatch objects.
  const buildColorRow = (label: string, color: PaletteColor) => ({
    label,
    swatches: [
      { tone: 'light', value: color.light ?? color.main },
      { tone: 'main', value: color.main },
      { tone: 'dark', value: color.dark ?? color.main },
    ],
    contrastText: color.contrastText ?? theme.palette.common.white,
  });

  const standardPalette = [
    buildColorRow('Primary', theme.palette.primary),
    buildColorRow('Secondary', theme.palette.secondary),
    buildColorRow('Success', theme.palette.success),
    buildColorRow('Info', theme.palette.info),
    buildColorRow('Warning', theme.palette.warning),
    buildColorRow('Error', theme.palette.error),
  ];

  // Neutral scales have numeric keys, so we derive them dynamically for display.
  const neutralKeys = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '950',
  ] as const;

  const neutralShades = neutralKeys
    .filter((shade) => shade in theme.palette.grey)
    .map((shade) => ({
      tone: shade,
      value: theme.palette.grey[shade],
    }));

  // Typography variants are listed explicitly to ensure a stable showcase order.
  const typographyVariants: Array<TypographyProps['variant']> = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
  ];

  return (
    <Stack spacing={4}>
      {/* Palette card shows each primary color ramp built from the BI tokens. */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Palette overview
          </Typography>
          <Stack spacing={3}>
            {standardPalette.map((row) => (
              <Box key={row.label}>
                <Typography variant="subtitle1" gutterBottom>
                  {row.label}
                </Typography>
                <Grid container spacing={2}>
                  {row.swatches.map((swatch) => (
                    <Grid item xs={12} sm={4} key={swatch.tone}>
                      <Box
                        sx={{
                          bgcolor: swatch.value,
                          color: row.contrastText,
                          borderRadius: 1,
                          p: 2,
                          minHeight: 96,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                          {swatch.tone}
                        </Typography>
                        <Typography variant="body2">{swatch.value}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}

            <Divider />

            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Neutral greys
              </Typography>
              <Grid container spacing={2}>
                {neutralShades.map((swatch) => {
                  const shadeNumber = Number.parseInt(swatch.tone, 10);
                  const useDarkText = Number.isNaN(shadeNumber) || shadeNumber < 500;

                  return (
                    <Grid item xs={6} sm={3} md={2} key={swatch.tone}>
                      <Box
                        sx={{
                          bgcolor: swatch.value,
                          color: useDarkText
                            ? theme.palette.text.primary
                            : theme.palette.common.white,
                          borderRadius: 1,
                          p: 2,
                          minHeight: 80,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                          {swatch.tone}
                        </Typography>
                        <Typography variant="body2" noWrap>
                          {swatch.value}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Typography card renders every variant so product teams can copy/paste examples. */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Typography overview
          </Typography>
          <Stack spacing={2}>
            {typographyVariants.map((variant) => (
              <Box key={variant}>
                <Typography variant="overline" color="text.secondary">
                  {variant}
                </Typography>
                {/* Render each sample text with its matching variant to preview sizes and weights. */}
                <Typography variant={variant}>
                  The quick brown fox jumps over the lazy dog.
                </Typography>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ThemeShowcase;
