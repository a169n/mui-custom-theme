import { Stack } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { CustomTextarea } from '../../components/CustomTextarea';

const textareaUsage = createUsageSnippet([
  'return (',
  '  <CustomTextarea',
  '    label="Label"',
  '    placeholder="Type a message"',
  '    description="Provide extra context."',
  '  />',
  ');',
]);

export const TextareaPage = () => (
  <PageContainer
    title="Textarea"
    description="Multiline text fields capture longer responses."
    usage={textareaUsage}
  >
    <Stack spacing={4}>
      <CustomTextarea label="Label" placeholder="Type a message" fullWidth />
      <CustomTextarea
        label="Label"
        placeholder="Type a message"
        actionText="Optional"
        description="Supporting description text."
        fullWidth
      />
      <CustomTextarea
        label="Label"
        placeholder="Type a message"
        description="Helper message"
        minRows={6}
        fullWidth
      />
      <CustomTextarea
        label="Label"
        placeholder="Type a message"
        description="Error or helper message text."
        error
        fullWidth
      />
      <CustomTextarea label="Label" placeholder="Type a message" disabled fullWidth />
    </Stack>
  </PageContainer>
);

export default TextareaPage;
