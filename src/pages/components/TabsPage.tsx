import { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const tabsUsage = createUsageSnippet([
  'return (',
  '  <Tabs',
  '    value={0}',
  '    TabIndicatorProps={{',
  '      sx: { backgroundColor: theme.palette.primary.main },',
  '    }}',
  '  >',
  '    {/* tabs */}',
  '  </Tabs>',
  ');',
]);

export const TabsPage = () => {
  const [value, setValue] = useState(0);

  return (
    <PageContainer title="Tabs" description="Tabs switch between related views." usage={tabsUsage}>
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab label="Overview" />
        <Tab label="Activity" />
        <Tab label="Settings" />
      </Tabs>
      <Typography sx={{ mt: 2 }}>Current tab: {value + 1}</Typography>
    </PageContainer>
  );
};

export default TabsPage;
