import { Stack } from '@mui/material';
import { useEffect, useRef } from 'react';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { CustomSelect, type CustomSelectOption } from '../../components/CustomSelect';

const selectOptions: CustomSelectOption[] = [
  { label: 'Option one', value: 'option-1' },
  { label: 'Option two', value: 'option-2' },
  { label: 'Option three', value: 'option-3' },
  { label: 'Option four', value: 'option-4' },
  { label: 'Option five', value: 'option-5' },
  { label: 'Option six', value: 'option-6' },
];

const selectUsage = createUsageSnippet([
  'return (',
  '  <CustomSelect',
  '    label="Label"',
  '    placeholder="Select option"',
  '    options={[',
  "      { label: 'Option one', value: 'option-1' },",
  "      { label: 'Option two', value: 'option-2' },",
  '    ]}',
  '  />',
  ');',
]);

const FocusedSelectDemo = () => {
  const focusedRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    focusedRef.current?.focus();
  }, []);

  return (
    <CustomSelect
      ref={focusedRef}
      label="Focused"
      placeholder="Select option"
      options={selectOptions}
      actionText="Action"
    />
  );
};

export const SelectPage = () => (
  <PageContainer
    title="Select"
    description="Select inputs present a list of predefined options."
    usage={selectUsage}
  >
    <Stack spacing={4}>
      <CustomSelect label="Default" placeholder="Select option" options={selectOptions} />
      <CustomSelect
        label="With action"
        actionText="Action"
        placeholder="Select option"
        options={selectOptions}
      />
      <CustomSelect
        label="With description"
        placeholder="Select option"
        description="Supporting description text."
        options={selectOptions}
      />
      <CustomSelect
        label="Filled"
        placeholder="Select option"
        options={selectOptions}
        defaultValue="option-2"
      />
      <FocusedSelectDemo />
      <CustomSelect
        label="Error"
        placeholder="Select option"
        options={selectOptions}
        error
        description="Error or helper message text."
      />
      <CustomSelect
        label="Error focused"
        placeholder="Select option"
        options={selectOptions}
        error
        forceFocus
        description="Error or helper message text."
      />
      <CustomSelect label="Disabled" placeholder="Select option" options={selectOptions} disabled />
      <CustomSelect
        label="Multiple"
        placeholder="Select option"
        options={selectOptions}
        multiple
        defaultValue={[selectOptions[0].value, selectOptions[1].value, selectOptions[2].value]}
      />
      <CustomSelect
        label="Multiple expanded"
        placeholder="Select option"
        options={selectOptions}
        multiple
        showAllSelected
        defaultValue={selectOptions.map((option) => option.value)}
      />
    </Stack>
  </PageContainer>
);

export default SelectPage;
