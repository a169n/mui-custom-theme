import { Stack } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { CustomInput } from '../../components/CustomInput';
import { IconAt, IconEye, IconMail, IconSearch } from '@tabler/icons-react';

const inputUsage = createUsageSnippet([
  'return (',
  '  <CustomInput',
  '    label="Label"',
  '    placeholder="Placeholder"',
  '    actionText="Action text"',
  '    description="Supporting description text."',
  '  />',
  ');',
]);

export const InputPage = () => (
  <PageContainer title="Input" description="Text fields accept short form text." usage={inputUsage}>
    <Stack spacing={4}>
      <CustomInput label="Label" placeholder="Placeholder" fullWidth />
      <CustomInput label="Label" placeholder="Placeholder" actionText="Action text" fullWidth />
      <CustomInput
        label="Label"
        placeholder="Placeholder"
        actionText="Action text"
        description="Supporting description text."
        startIcon={<IconMail size={20} />}
        fullWidth
      />
      <CustomInput
        label="Label"
        placeholder="Placeholder"
        endIcon={<IconAt size={20} />}
        fullWidth
      />
      <CustomInput
        label="Label"
        placeholder="Placeholder"
        startIcon={<IconSearch size={20} />}
        endIcon={<IconEye size={20} />}
        fullWidth
      />
      <CustomInput label="Label" placeholder="Placeholder" trailingAddon fullWidth />
      <CustomInput
        label="Label"
        placeholder="Placeholder"
        leadingAddon
        endIcon={<IconEye size={20} />}
        fullWidth
      />
      <CustomInput
        label="Label"
        placeholder="Placeholder"
        leadingAddon
        startIcon={<IconSearch size={20} />}
        fullWidth
      />
      <CustomInput
        label="Label"
        placeholder="Placeholder"
        trailingAddon
        endIcon={<IconEye size={20} />}
        fullWidth
      />
      <CustomInput
        label="Label"
        placeholder="Placeholder"
        trailingAddon
        startIcon={<IconSearch size={20} />}
        endIcon={<IconEye size={20} />}
        fullWidth
      />
      <CustomInput
        label="Label"
        placeholder="Placeholder"
        startIcon={<IconAt size={20} />}
        error
        description="Error or helper message text."
        fullWidth
      />
      <CustomInput label="Label" placeholder="Placeholder" disabled fullWidth />
      <CustomInput label="Label" placeholder="Placeholder" leadingAddon disabled fullWidth />
    </Stack>
  </PageContainer>
);

export default InputPage;
