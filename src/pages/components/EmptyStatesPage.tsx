import { Paper, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button } from '../../components/Button';

const emptyStateUsage = createUsageSnippet([
  'return (',
  '  <Paper',
  '    sx={{',
  '      bgcolor: theme.palette.background.default,',
  '      borderColor: theme.palette.divider,',
  '    }}',
  '  />',
  ');',
]);

export const EmptyStatesPage = () => (
  <PageContainer
    title="Empty States"
    description="Communicate next steps when content is missing."
    usage={emptyStateUsage}
  >
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        borderRadius: 3,
        textAlign: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Nothing here yet
      </Typography>
      <Typography variant="textM" color="text.secondary" sx={{ mb: 2 }}>
        Get started by creating your first item.
      </Typography>
      <Button variant="primary">Create item</Button>
    </Paper>
  </PageContainer>
);

export default EmptyStatesPage;
