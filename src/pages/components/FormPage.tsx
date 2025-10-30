import { Checkbox, FormControlLabel, Stack, TextField } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button } from '../../components/Button';

const formUsage = createUsageSnippet([
  'return (',
  '  <Stack spacing={2}>',
  '    <TextField',
  '      label="Name"',
  '      sx={{',
  "        '& .MuiOutlinedInput-root': { bgcolor: theme.palette.background.paper },",
  '      }}',
  '    />',
  '  </Stack>',
  ');',
]);

export const FormPage = () => (
  <PageContainer
    title="Form"
    description="Combine inputs to capture information."
    usage={formUsage}
  >
    <Stack spacing={2} maxWidth={480}>
      <TextField label="Full name" fullWidth />
      <TextField label="Email" type="email" fullWidth />
      <FormControlLabel control={<Checkbox />} label="Subscribe to updates" />
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <Button>Cancel</Button>
        <Button variant="primary">Submit</Button>
      </Stack>
    </Stack>
  </PageContainer>
);

export default FormPage;
