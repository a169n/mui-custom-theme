import { Box, Skeleton, Stack, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const skeletonUsage = createUsageSnippet([
  'return (',
  '  <Stack spacing={2}>',
  '    <Skeleton variant="text" width="60%" />',
  '    <Skeleton variant="rectangular" height={160} />',
  '  </Stack>',
  ');',
]);

export const SkeletonPage = () => (
  <PageContainer
    title="Skeleton"
    description="Skeletons provide a placeholder while content loads."
    usage={skeletonUsage}
  >
    <Stack spacing={4}>
      <Stack spacing={1.5}>
        <Typography variant="subtitle1">Text rows</Typography>
        <Stack spacing={1}>
          <Skeleton variant="text" width="50%" />
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="60%" />
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle1">Card placeholder</Typography>
        <Box
          sx={{
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            p: 3,
          }}
        >
          <Stack spacing={2}>
            <Skeleton variant="rectangular" height={160} />
            <Stack direction="row" spacing={2} alignItems="center">
              <Skeleton variant="circular" width={48} height={48} />
              <Stack spacing={1} flex={1}>
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="text" width="65%" />
              </Stack>
            </Stack>
            <Skeleton variant="rectangular" height={32} />
          </Stack>
        </Box>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle1">List items</Typography>
        <Stack spacing={1.25}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center">
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="text" width="70%" />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  </PageContainer>
);

export default SkeletonPage;
