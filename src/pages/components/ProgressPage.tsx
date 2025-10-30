import { CircularProgress, LinearProgress, Stack } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const progressUsage = createUsageSnippet([
  'return <LinearProgress sx={{ bgcolor: theme.palette.action.hover }} />;',
]);

export const ProgressPage = () => (
  <PageContainer
    title="Progress"
    description="Progress indicators show loading states."
    usage={progressUsage}
  >
    <Stack spacing={2} alignItems="flex-start">
      <LinearProgress sx={{ width: '100%', maxWidth: 320 }} />
      <CircularProgress color="primary" />
    </Stack>
  </PageContainer>
);

export default ProgressPage;
