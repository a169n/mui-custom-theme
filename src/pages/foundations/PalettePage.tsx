import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import type { PaletteColorScale } from '../../theme/foundations/palette.utils';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import PageContainer from '../PageContainer';

const shadeOrder = [
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

const paletteUsage = createUsageSnippet([
  'return (',
  '  <Box',
  '    sx={{',
  '      bgcolor: theme.palette.primary[600] ?? theme.palette.primary.main,',
  '      color: theme.palette.primary.contrastText,',
  '      px: 3,',
  '      py: 2,',
  '      borderRadius: theme.shape.borderRadius,',
  '    }}',
  '  >',
  '    Use theme.palette values for consistent surfaces',
  '  </Box>',
  ');',
]);

const colorKeys = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
  'brand',
  'gray',
  'green',
  'red',
  'yellow',
  'cyan',
  'purple',
  'orange',
  'pink',
  'rose',
  'sky',
  'teal',
  'lime',
] as const;

type PaletteKey = (typeof colorKeys)[number];

const findShadeKey = (
  value: string | undefined,
  scale: Record<string, string>
): string | undefined => shadeOrder.find((shade) => scale[shade] === value);

const PalettePage = () => {
  const theme = useTheme();
  const usageFont =
    theme.tokens?.theme.font['font-sans'] ?? theme.typography?.fontFamily ?? 'Roboto, sans-serif';

  return (
    <PageContainer
      title="Palette"
      description="Preview the core brand colors defined in the custom theme."
      usage={paletteUsage}
    >
      <Grid container spacing={3}>
        {colorKeys.map((colorKey) => {
          const paletteColor = theme.palette[colorKey as PaletteKey] as PaletteColorScale;
          const scale = paletteColor as unknown as Record<string, string>;
          const aliasEntries = [
            { alias: 'light', shade: findShadeKey(paletteColor.light, scale) },
            { alias: 'main', shade: findShadeKey(paletteColor.main, scale) },
            { alias: 'dark', shade: findShadeKey(paletteColor.dark, scale) },
          ];

          return (
            <Grid item xs={12} sm={6} md={4} key={colorKey}>
              <Stack spacing={2}>
                <Typography variant="h6" textTransform="capitalize">
                  {colorKey}
                </Typography>
                <Stack spacing={1.5}>
                  {shadeOrder.map((shade) => {
                    const value = scale[shade];
                    if (!value) {
                      return null;
                    }

                    const aliases = aliasEntries
                      .filter((entry) => entry.shade === shade)
                      .map((entry) => entry.alias);
                    const label = aliases.length ? `${shade} (${aliases.join(', ')})` : shade;

                    return (
                      <Box
                        key={shade}
                        sx={{
                          display: 'flex',
                          alignItems: 'stretch',
                          borderRadius: 2,
                          overflow: 'hidden',
                          border: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Box sx={{ width: 56, bgcolor: value }} />
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          sx={{ flexGrow: 1, px: 2, py: 1, bgcolor: 'background.paper' }}
                        >
                          <Typography variant="body2" fontWeight={600}>
                            {label}
                          </Typography>
                          <Typography variant="body2" sx={{ fontFamily: usageFont }}>
                            {value}
                          </Typography>
                        </Stack>
                      </Box>
                    );
                  })}
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Box
                      sx={{
                        px: 2,
                        py: 1.5,
                        bgcolor: paletteColor.main,
                        color: paletteColor.contrastText,
                      }}
                    >
                      <Typography variant="body2" fontWeight={600}>
                        contrastText
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: usageFont }}>
                        {paletteColor.contrastText}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </PageContainer>
  );
};

export default PalettePage;
