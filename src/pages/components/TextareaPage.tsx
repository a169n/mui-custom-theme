import { TextField } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const textareaUsage = createUsageSnippet([
  'return (',
  '  <TextField',
  '    multiline',
  '    sx={{',
  "      '& textarea': { lineHeight: theme.typography.body1.lineHeight },",
  '    }}',
  '  />',
  ');',
]);

export const TextareaPage = () => (
  <PageContainer
    title="Textarea"
    description="Multiline text fields capture longer responses."
    usage={textareaUsage}
  >
    <TextField label="Message" placeholder="Write a message" fullWidth multiline minRows={4} />
  </PageContainer>
);

export default TextareaPage;
