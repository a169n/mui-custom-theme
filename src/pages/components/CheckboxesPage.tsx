import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const checkboxesUsage = createUsageSnippet([
  'return (',
  '  <Checkbox',
  '    defaultChecked',
  "    sx={{ color: theme.palette.primary.main, '&.Mui-checked': { color: theme.palette.primary.main } }}",
  '  />',
  ');',
]);

export const CheckboxesPage = () => (
  <PageContainer title="Checkbox" description="Select multiple options." usage={checkboxesUsage}>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Option one" />
      <FormControlLabel control={<Checkbox />} label="Option two" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
    </FormGroup>
  </PageContainer>
);

export default CheckboxesPage;
