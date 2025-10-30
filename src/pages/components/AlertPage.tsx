import { Alert, Stack } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const alertUsage = createUsageSnippet([
  'const successStyles = {',
  '  backgroundColor: theme.palette.success[50],',
  '  color: theme.palette.success.dark,',
  '};',
  '',
  'return <Alert severity="success" sx={successStyles}>Action complete</Alert>;',
]);

export const AlertPage = () => (
  <PageContainer
    title="Alert"
    description="Use alerts to communicate contextual feedback."
    usage={alertUsage}
  >
    <Stack spacing={2}>
      <Alert severity="success">Success state</Alert>
      <Alert severity="info">Informational state</Alert>
      <Alert severity="warning">Warning state</Alert>
      <Alert severity="error">Error state</Alert>
    </Stack>
  </PageContainer>
);

export default AlertPage;
