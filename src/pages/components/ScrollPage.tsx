import { Box, Stack, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const scrollUsage = createUsageSnippet([
  'return (',
  '  <Box',
  '    sx={{',
  '      maxHeight: 200,',
  "      overflowY: 'auto',",
  '      borderColor: theme.palette.divider,',
  '    }}',
  '  />',
  ');',
]);

export const ScrollPage = () => (
  <PageContainer
    title="Scroll"
    description="Scrollable containers manage overflowed content."
    usage={scrollUsage}
  >
    <Box
      sx={{
        maxHeight: 200,
        width: 400,
        overflowY: 'auto',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        p: 2,
      }}
    >
      <Stack spacing={1}>
        {Array.from({ length: 30 }, (_, index) => (
          <Typography key={index} variant="body2">
            Item {index + 1}
          </Typography>
        ))}
      </Stack>
    </Box>
  </PageContainer>
);

export default ScrollPage;
