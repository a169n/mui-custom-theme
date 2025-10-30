import { Skeleton, Stack } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const skeletonUsage = createUsageSnippet([
  'return <Skeleton sx={{ bgcolor: theme.palette.action.hover }} />;',
]);

export const SkeletonPage = () => (
  <PageContainer
    title="Skeleton"
    description="Skeletons provide a placeholder while content loads."
    usage={skeletonUsage}
  >
    <Stack spacing={2}>
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="rectangular" height={120} />
      <Stack direction="row" spacing={2}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width="40%" />
      </Stack>
    </Stack>
  </PageContainer>
);

export default SkeletonPage;
