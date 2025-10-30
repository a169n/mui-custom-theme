import { FormControlLabel, Switch } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const switchUsage = createUsageSnippet([
  'return (',
  '  <Switch',
  "    sx={{ '& .MuiSwitch-switchBase.Mui-checked': { color: theme.palette.success.main } }}",
  '  />',
  ');',
]);

export const SwitchPage = () => (
  <PageContainer
    title="Switch"
    description="Switches toggle between two states."
    usage={switchUsage}
  >
    <FormControlLabel control={<Switch defaultChecked />} label="Enable notifications" />
  </PageContainer>
);

export default SwitchPage;
