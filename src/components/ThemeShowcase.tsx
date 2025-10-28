import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import type { PaletteColor } from '@mui/material/styles';
import type { TypographyProps } from '@mui/material/Typography';

/**
 * ThemeShowcase - Comprehensive visualization of all theme properties
 * Displays colors, typography, spacing, border radius, shadows, and more
 */
const ThemeShowcase = () => {
  const theme = useTheme();

  // Helper for mapping palette colors into swatch objects
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

  // Neutral grey scale
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
  ] as const;
  const neutralShades = neutralKeys
    .filter((shade) => shade in theme.palette.grey)
    .map((shade) => ({
      tone: shade,
      value: theme.palette.grey[shade],
    }));

  // Typography variants
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

  // Spacing scale examples
  const spacingExamples = [0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];

  // Border radius examples
  const radiusExamples = [
    { label: 'xs (2px)', value: 2 },
    { label: 'sm (6px)', value: 6 },
    { label: 'md (8px)', value: 8 },
    { label: 'lg (10px)', value: 10 },
    { label: 'xl (12px)', value: 12 },
    { label: '2xl (14px)', value: 14 },
    { label: '3xl (16px)', value: 16 },
    { label: '4xl (20px)', value: 20 },
  ];

  // Shadow examples
  const shadowExamples = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];

  // Breakpoints
  const breakpoints = [
    { label: 'xs', value: theme.breakpoints.values.xs },
    { label: 'sm', value: theme.breakpoints.values.sm },
    { label: 'md', value: theme.breakpoints.values.md },
    { label: 'lg', value: theme.breakpoints.values.lg },
    { label: 'xl', value: theme.breakpoints.values.xl },
  ];

  return (
    <Stack spacing={4}>
      {/* Color Palette */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Color Palette
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
                        <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                          {swatch.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}

            <Divider />

            {/* Neutral Greys */}
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Neutral Greys
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
                        <Typography variant="body2" noWrap sx={{ fontFamily: 'monospace' }}>
                          {swatch.value}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>

            <Divider />

            {/* Text & Background Colors */}
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Text & Background Colors
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      background.default
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                      {theme.palette.background.default}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      background.paper
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                      {theme.palette.background.paper}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="body2" color="text.primary" gutterBottom>
                      text.primary
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                      {theme.palette.text.primary}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      text.secondary
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                      {theme.palette.text.secondary}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="body2" color="text.disabled" gutterBottom>
                      text.disabled
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                      {theme.palette.text.disabled}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Typography
          </Typography>
          <Stack spacing={2}>
            {typographyVariants.map((variant) => {
              const variantStyle = theme.typography[variant];
              const fontSize =
                typeof variantStyle === 'object' && 'fontSize' in variantStyle
                  ? variantStyle.fontSize
                  : 'inherit';
              const fontWeight =
                typeof variantStyle === 'object' && 'fontWeight' in variantStyle
                  ? variantStyle.fontWeight
                  : 'inherit';
              const lineHeight =
                typeof variantStyle === 'object' && 'lineHeight' in variantStyle
                  ? variantStyle.lineHeight
                  : 'inherit';

              return (
                <Box key={variant}>
                  <Stack direction="row" spacing={2} alignItems="baseline" flexWrap="wrap">
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ minWidth: 100, fontFamily: 'monospace' }}
                    >
                      {variant}
                    </Typography>
                    <Typography variant={variant} sx={{ flex: 1 }}>
                      The quick brown fox jumps over the lazy dog
                    </Typography>
                  </Stack>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: 'monospace', ml: 2 }}
                  >
                    {fontSize} / {fontWeight} / {String(lineHeight)}
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </CardContent>
      </Card>

      {/* Spacing */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Spacing Scale (4px grid)
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            theme.spacing(n) generates spacing values
          </Typography>
          <Grid container spacing={2}>
            {spacingExamples.map((factor) => {
              const spacingValue = theme.spacing(factor);
              return (
                <Grid item xs={6} sm={4} md={3} key={factor}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Box
                      sx={{
                        bgcolor: 'primary.main',
                        height: spacingValue,
                        width: spacingValue,
                        borderRadius: 1,
                        mx: 'auto',
                        mb: 1,
                      }}
                    />
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
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
        </CardContent>
      </Card>

      {/* Border Radius */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Border Radius
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Default: {theme.shape.borderRadius}px
          </Typography>
          <Grid container spacing={2}>
            {radiusExamples.map((example) => (
              <Grid item xs={6} sm={4} md={3} key={example.label}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Box
                    sx={{
                      bgcolor: 'secondary.main',
                      height: 80,
                      width: 80,
                      borderRadius: `${example.value}px`,
                      mx: 'auto',
                      mb: 1,
                    }}
                  />
                  <Typography variant="body2">{example.label}</Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: 'monospace' }}
                  >
                    borderRadius: {example.value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Shadows */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Elevation Shadows
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            MUI elevation levels (0-24)
          </Typography>
          <Grid container spacing={3}>
            {shadowExamples.map((elevation) => (
              <Grid item xs={6} sm={4} md={3} key={elevation}>
                <Paper
                  elevation={elevation}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: 120,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h6">{elevation}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    elevation={elevation}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Breakpoints */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Responsive Breakpoints
          </Typography>
          <Grid container spacing={2}>
            {breakpoints.map((bp) => (
              <Grid item xs={12} sm={6} md={4} key={bp.label}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">{bp.label}</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: 'monospace' }}
                  >
                    {bp.value}px
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Component Examples */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Component Examples
          </Typography>
          <Stack spacing={3}>
            {/* Buttons */}
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Buttons
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <Button variant="contained" color="error">
                  Error
                </Button>
                <Button variant="contained" color="warning">
                  Warning
                </Button>
                <Button variant="contained" color="info">
                  Info
                </Button>
              </Stack>
            </Box>

            <Divider />

            {/* Chips */}
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Chips
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Default" />
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Error" color="error" />
                <Chip label="Warning" color="warning" />
                <Chip label="Info" color="info" />
              </Stack>
            </Box>

            <Divider />

            {/* Cards */}
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Cards
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Default Card
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This is a default card with elevation
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Outlined Card
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This is an outlined card variant
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card elevation={8}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Elevated Card
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This card has elevation=8
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Design Tokens Access */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Design Tokens
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Access raw design tokens via theme.tokens
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.50', fontFamily: 'monospace', fontSize: '0.875rem' }}>
            <pre style={{ margin: 0, overflow: 'auto' }}>
              {`// Access colors
theme.tokens.primitives.colors.brand[600]

// Access spacing
theme.tokens.primitives.spacing[4]

// Access typography
theme.tokens.theme.text.H1['font-size']

// Access radius
theme.tokens.theme.radius.md

// Access mode colors
theme.tokens.modes.light.bg.default`}
            </pre>
          </Paper>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ThemeShowcase;
