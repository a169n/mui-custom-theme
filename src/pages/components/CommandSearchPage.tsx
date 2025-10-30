import {
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
} from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const commandSearchUsage = createUsageSnippet([
  'return (',
  '  <Paper sx={{ borderRadius: 3, boxShadow: theme.shadows[4] }}>',
  '    {/* command list */}',
  '  </Paper>',
  ');',
]);

export const CommandSearchPage = () => (
  <PageContainer
    title="Command & Search"
    description="Provide quick access to actions with a command palette."
    usage={commandSearchUsage}
  >
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 3,
        maxWidth: 480,
        mx: 'auto',
      }}
    >
      <TextField
        fullWidth
        placeholder="Search or type a command"
        InputProps={{
          startAdornment: <InputAdornment position="start">⌘</InputAdornment>,
          endAdornment: <InputAdornment position="end">K</InputAdornment>,
        }}
      />
      <Divider sx={{ my: 2 }} />
      <List dense disablePadding>
        {['Create new project', 'Invite teammates', 'Open settings'].map((action) => (
          <ListItem key={action} disablePadding>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemText primary={action} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  </PageContainer>
);

export default CommandSearchPage;
