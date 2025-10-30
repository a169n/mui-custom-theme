import { Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import SectionCard from './SectionCard';

const BreakpointsSection = () => {
  const theme = useTheme();

  const breakpointEntries = Object.entries(theme.breakpoints.values) as Array<[string, number]>;

  return (
    <SectionCard
      title="Responsive breakpoints"
      description="Breakpoint values configured on the theme."
    >
      <Grid container spacing={2}>
        {breakpointEntries.map(([label, value]) => (
          <Grid item xs={12} sm={6} md={4} key={label}>
            <Paper sx={{ p: 2 }}>
              <Stack spacing={1}>
                <Typography variant="h6">{label}</Typography>
                <Typography variant="textM" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                  {value}px
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionCard>
  );
};

export default BreakpointsSection;
