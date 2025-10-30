import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const selectUsage = createUsageSnippet([
  'return (',
  '  <Select',
  '    defaultValue="option"',
  '    sx={{',
  "      '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },",
  '    }}',
  '  />',
  ');',
]);

export const SelectPage = () => (
  <PageContainer
    title="Select"
    description="Select inputs present a list of predefined options."
    usage={selectUsage}
  >
    <FormControl fullWidth>
      <InputLabel id="select-demo-label">Age</InputLabel>
      <Select labelId="select-demo-label" label="Age" defaultValue={30}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </PageContainer>
);

export default SelectPage;
