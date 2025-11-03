import { Stack } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { CustomInput } from '../../components/CustomInput';
import { IconAt, IconEye, IconMail, IconSearch } from '@tabler/icons-react';

const inputUsage = createUsageSnippet([
  'return (',
  '  <CustomInput',
  '    label="Email"',
  '    placeholder="jane.doe@email.com"',
  '    actionText="Optional"',
  '    description="We will only use this to contact you."',
  '  />',
  ');',
]);

export const InputPage = () => (
  <PageContainer title="Input" description="Text fields accept short form text." usage={inputUsage}>
    <Stack spacing={4}>
      <CustomInput label="Name" placeholder="Jane Doe" fullWidth />
      <CustomInput
        label="Email"
        placeholder="jane.doe@email.com"
        actionText="Optional"
        description="We will only use this to contact you."
        type="email"
        startIcon={<IconMail size={20} />}
        fullWidth
      />
      <CustomInput
        label="Search"
        placeholder="Search"
        startIcon={<IconSearch size={20} />}
        endIcon={<IconEye size={20} />}
        fullWidth
      />
      <CustomInput label="Amount" placeholder="0" trailingAddon fullWidth />
      <CustomInput
        label="Transfer"
        placeholder="0"
        leadingAddon
        trailingAddon
        endIcon={<IconEye size={20} />}
        fullWidth
      />
      <CustomInput
        label="Username"
        placeholder="username"
        startIcon={<IconAt size={20} />}
        error
        description="This username is already taken."
        fullWidth
      />
      <CustomInput label="Disabled" placeholder="Jane Doe" disabled fullWidth />
    </Stack>
  </PageContainer>
);

export default InputPage;
