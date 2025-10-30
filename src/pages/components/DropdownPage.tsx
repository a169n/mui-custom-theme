import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button } from '../../components/Button';

const dropdownUsage = createUsageSnippet([
  'return (',
  '  <Menu',
  '    open',
  '    PaperProps={{',
  '      sx: { borderRadius: 2, boxShadow: theme.shadows[8] },',
  '    }}',
  '  />',
  ');',
]);

export const DropdownPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <PageContainer
      title="Dropdown"
      description="Menus display a list of actions."
      usage={dropdownUsage}
    >
      <Button variant="primary" onClick={(event) => setAnchorEl(event.currentTarget)}>
        Open menu
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
      </Menu>
    </PageContainer>
  );
};

export default DropdownPage;
