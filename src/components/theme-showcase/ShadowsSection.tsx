import { Grid, Paper, Typography } from '@mui/material';
import SectionCard from './SectionCard';

const shadowLevels = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];

const ShadowsSection = () => (
  <SectionCard
    title="Elevation shadows"
    description="MUI's elevation scale rendered with the custom palette applied to surfaces."
  >
    <Grid container spacing={3}>
      {shadowLevels.map((elevation) => (
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
              gap: 1,
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
  </SectionCard>
);

export default ShadowsSection;
