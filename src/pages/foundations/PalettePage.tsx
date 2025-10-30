import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import PageContainer from '../PageContainer';

const PalettePage = () => {
  const theme = useTheme();
  const colorKeys: Array<'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'> = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error',
  ];

  return (
    <PageContainer
      title="Palette"
      description="Preview the core brand colors defined in the custom theme."
    >
      <Grid container spacing={3}>
        {colorKeys.map((colorKey) => {
          const paletteColor = theme.palette[colorKey];
          return (
            <Grid item xs={12} sm={6} md={4} key={colorKey}>
              <Stack spacing={2}>
                <Typography variant="h6" textTransform="capitalize">
                  {colorKey}
                </Typography>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[2],
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Box sx={{ bgcolor: paletteColor.main, height: 96 }} />
                  <Stack direction="row" justifyContent="space-between" sx={{ p: 2 }}>
                    <Typography variant="body2">main</Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'fontFamily.monospace' }}>
                      {paletteColor.main}
                    </Typography>
                  </Stack>
                  <Box sx={{ bgcolor: paletteColor.light, height: 48 }} />
                  <Stack direction="row" justifyContent="space-between" sx={{ p: 2 }}>
                    <Typography variant="body2">light</Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'fontFamily.monospace' }}>
                      {paletteColor.light}
                    </Typography>
                  </Stack>
                  <Box sx={{ bgcolor: paletteColor.dark, height: 48 }} />
                  <Stack direction="row" justifyContent="space-between" sx={{ p: 2 }}>
                    <Typography variant="body2">dark</Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'fontFamily.monospace' }}>
                      {paletteColor.dark}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </PageContainer>
  );
};

export default PalettePage;
