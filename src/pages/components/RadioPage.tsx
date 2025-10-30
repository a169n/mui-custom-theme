import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const radioUsage = createUsageSnippet([
  'return (',
  '  <Radio',
  "    sx={{ color: theme.palette.secondary.main, '&.Mui-checked': { color: theme.palette.secondary.main } }}",
  '  />',
  ');',
]);

export const RadioPage = () => (
  <PageContainer
    title="Radio"
    description="Radio buttons allow users to select one option."
    usage={radioUsage}
  >
    <FormControl>
      <FormLabel id="radio-demo-label">Notifications</FormLabel>
      <RadioGroup aria-labelledby="radio-demo-label" defaultValue="daily">
        <FormControlLabel value="daily" control={<Radio />} label="Daily" />
        <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
        <FormControlLabel value="off" control={<Radio />} label="Off" />
      </RadioGroup>
    </FormControl>
  </PageContainer>
);

export default RadioPage;
