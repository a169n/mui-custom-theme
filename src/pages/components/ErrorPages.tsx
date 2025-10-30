import { Paper, Stack, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button } from '../../components/Button';

const errorPagesUsage = createUsageSnippet([
  'return (',
  '  <Typography variant="h2" sx={{ color: theme.palette.error.main }}>',
  '    404',
  '  </Typography>',
  ');',
]);

export const ErrorPages = () => (
  <PageContainer
    title="404 & 500"
    description="Template layouts for error states."
    usage={errorPagesUsage}
  >
    <Stack spacing={3}>
      <Paper variant="outlined" sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          404
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          The page you were looking for could not be found.
        </Typography>
        <Button variant="primary">Go home</Button>
      </Paper>
      <Paper variant="outlined" sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          500
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Something went wrong on our end. Please try again later.
        </Typography>
        <Button variant="outline">Retry</Button>
      </Paper>
    </Stack>
  </PageContainer>
);

export default ErrorPages;
