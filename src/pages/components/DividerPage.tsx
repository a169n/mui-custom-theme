import { Divider, Stack, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const dividerUsage = createUsageSnippet([
  'return <Divider sx={{ borderColor: theme.palette.divider }} />;',
]);

export const DividerPage = () => (
  <PageContainer
    title="Divider"
    description="Dividers separate content into sections."
    usage={dividerUsage}
  >
    <Stack spacing={2}>
      <Typography variant="body1">Section one</Typography>
      <Divider />
      <Typography variant="body1">Section two</Typography>
    </Stack>
  </PageContainer>
);

export default DividerPage;
