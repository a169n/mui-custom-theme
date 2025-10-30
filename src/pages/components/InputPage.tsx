import { TextField } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const inputUsage = createUsageSnippet([
  'return (',
  '  <TextField',
  '    label="Email"',
  '    sx={{',
  "      '& input': { color: theme.palette.text.primary },",
  '    }}',
  '  />',
  ');',
]);

export const InputPage = () => (
  <PageContainer title="Input" description="Text fields accept short form text." usage={inputUsage}>
    <TextField label="Name" placeholder="Jane Doe" fullWidth />
  </PageContainer>
);

export default InputPage;
