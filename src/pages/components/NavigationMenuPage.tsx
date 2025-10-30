import { List, ListItemButton, ListItemText, Paper } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const navigationMenuUsage = createUsageSnippet([
  'return (',
  '  <ListItemButton',
  '    sx={{',
  '      borderRadius: theme.shape.borderRadius,',
  "      '&.Mui-selected': { bgcolor: theme.palette.action.selected },",
  '    }}',
  '  >',
  '    Overview',
  '  </ListItemButton>',
  ');',
]);

export const NavigationMenuPage = () => (
  <PageContainer
    title="Navigation Menu"
    description="A simple menu for section navigation."
    usage={navigationMenuUsage}
  >
    <Paper variant="outlined" sx={{ maxWidth: 320 }}>
      <List>
        {['Overview', 'Analytics', 'Settings'].map((item) => (
          <ListItemButton key={item} selected={item === 'Overview'}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  </PageContainer>
);

export default NavigationMenuPage;
