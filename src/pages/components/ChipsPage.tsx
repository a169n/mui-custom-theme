import { Chip, Stack } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const chipsUsage = createUsageSnippet([
  'return (',
  '  <Chip',
  '    label="Status"',
  '    sx={{ bgcolor: theme.palette.info[100], color: theme.palette.info[800] }}',
  '  />',
  ');',
]);

export const ChipsPage = () => (
  <PageContainer title="Chips" description="Chips represent compact elements." usage={chipsUsage}>
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Chip label="Default" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Clickable" onClick={() => undefined} />
    </Stack>
  </PageContainer>
);

export default ChipsPage;
