import { Paper, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const bannerUsage = createUsageSnippet([
  'return (',
  '  <Paper sx={{ bgcolor: theme.palette.info.light, color: theme.palette.info.contrastText }}>',
  '    Update available',
  '  </Paper>',
  ');',
]);

export const BannerPage = () => (
  <PageContainer
    title="Banner"
    description="Banners draw attention to high-level updates."
    usage={bannerUsage}
  >
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'info.light',
        color: 'info.contrastText',
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        We have updated our privacy policy
      </Typography>
      <Typography variant="textM">
        Review the changes to stay informed about how we handle your data.
      </Typography>
    </Paper>
  </PageContainer>
);

export default BannerPage;
