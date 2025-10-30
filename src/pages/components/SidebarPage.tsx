import { List, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const sidebarUsage = createUsageSnippet([
  'return (',
  '  <Paper',
  '    sx={{',
  '      borderColor: theme.palette.divider,',
  '      bgcolor: theme.palette.background.paper,',
  '    }}',
  '  />',
  ');',
]);

export const SidebarPage = () => (
  <PageContainer
    title="Sidebar"
    description="A persistent menu anchored to the side."
    usage={sidebarUsage}
  >
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Paper
        variant="outlined"
        sx={{
          width: { xs: '100%', md: 280 },
          borderRadius: 3,
        }}
      >
        <List>
          {['Dashboard', 'Projects', 'Teams', 'Settings'].map((item) => (
            <ListItemButton key={item} selected={item === 'Dashboard'}>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Paper>
      <Paper variant="outlined" sx={{ flexGrow: 1, borderRadius: 3, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Content area
        </Typography>
        <Typography color="text.secondary">
          Sidebars help organize high level navigation items while keeping content visible.
        </Typography>
      </Paper>
    </Stack>
  </PageContainer>
);

export default SidebarPage;
