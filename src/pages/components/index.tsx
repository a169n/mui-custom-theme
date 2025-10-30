import { useMemo, useState } from 'react';
import {
  Alert,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Checkbox,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  InputLabel,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import PageContainer from '../PageContainer';

export const AvatarPage = () => (
  <PageContainer title="Avatar" description="Default avatar variations.">
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
      <Avatar>AB</Avatar>
      <Avatar src="https://i.pravatar.cc/150?img=32" alt="Avatar" />
      <Avatar sx={{ bgcolor: 'primary.main' }}>CD</Avatar>
    </Stack>
  </PageContainer>
);

export const AlertPage = () => (
  <PageContainer title="Alert" description="Use alerts to communicate contextual feedback.">
    <Stack spacing={2}>
      <Alert severity="success">Success state</Alert>
      <Alert severity="info">Informational state</Alert>
      <Alert severity="warning">Warning state</Alert>
      <Alert severity="error">Error state</Alert>
    </Stack>
  </PageContainer>
);

export const BadgesPage = () => (
  <PageContainer title="Badges" description="Badges highlight additional counts and statuses.">
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
      <Badge color="primary" badgeContent={4}>
        <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'action.hover' }} />
      </Badge>
      <Badge color="secondary" variant="dot">
        <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'action.hover' }} />
      </Badge>
    </Stack>
  </PageContainer>
);

export const BreadcrumbsPage = () => (
  <PageContainer
    title="Breadcrumbs"
    description="Breadcrumbs show the hierarchy of the current page."
  >
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="#">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Library
      </Link>
      <Typography color="text.primary">Data</Typography>
    </Breadcrumbs>
  </PageContainer>
);

export const ButtonsPage = () => (
  <PageContainer title="Buttons" description="Button variants convey priority.">
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Stack>
  </PageContainer>
);

export const CheckboxesPage = () => (
  <PageContainer title="Checkboxes" description="Binary options allow multiple selections.">
    <FormGroup row>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Option A" />
      <FormControlLabel control={<Checkbox />} label="Option B" />
      <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
    </FormGroup>
  </PageContainer>
);

export const ChipsPage = () => (
  <PageContainer title="Chips" description="Chips represent compact elements.">
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Chip label="Default" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Clickable" onClick={() => undefined} />
    </Stack>
  </PageContainer>
);

const buildCalendar = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const weeks: number[][] = [];
  let currentWeek: number[] = new Array(firstDay.getDay()).fill(0);

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length) {
    weeks.push([...currentWeek, ...new Array(7 - currentWeek.length).fill(0)]);
  }

  return weeks;
};

export const CalendarPage = () => {
  const today = useMemo(() => new Date(), []);
  const weeks = useMemo(() => buildCalendar(today), [today]);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <PageContainer
      title="Calendar"
      description="Calendar views typically rely on MUI X. This mockup approximates the layout."
    >
      <Table size="small" sx={{ maxWidth: 420 }}>
        <TableHead>
          <TableRow>
            {weekDays.map((day) => (
              <TableCell key={day} align="center">
                <Typography variant="subtitle2" color="text.secondary">
                  {day}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {weeks.map((week, index) => (
            <TableRow key={index}>
              {week.map((value, dayIndex) => (
                <TableCell key={`${index}-${dayIndex}`} align="center" sx={{ py: 1.5 }}>
                  {value ? (
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: value === today.getDate() ? 'primary.main' : 'transparent',
                        color: value === today.getDate() ? 'primary.contrastText' : 'inherit',
                      }}
                    >
                      {value}
                    </Box>
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageContainer>
  );
};

export const ModalsDialogsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <PageContainer title="Modal & Dialog" description="Overlay components for confirming actions.">
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button variant="contained" onClick={() => setModalOpen(true)}>
          Open modal
        </Button>
        <Button variant="outlined" onClick={() => setDialogOpen(true)}>
          Open dialog
        </Button>
      </Stack>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            width: 320,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Use modals to focus attention on a single task.
          </Typography>
          <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 3 }}>
            <Button onClick={() => setModalOpen(false)}>Close</Button>
          </Stack>
        </Box>
      </Modal>
      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary">
            Dialogs are ideal for confirming actions with supporting text.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setDialogOpen(false)}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export const DividerPage = () => (
  <PageContainer title="Divider" description="Dividers separate content into sections.">
    <Stack spacing={2}>
      <Typography variant="body1">Section one</Typography>
      <Divider />
      <Typography variant="body1">Section two</Typography>
    </Stack>
  </PageContainer>
);

export const DropdownPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <PageContainer title="Dropdown" description="Menus display a list of actions.">
      <Button variant="contained" onClick={(event) => setAnchorEl(event.currentTarget)}>
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

export const EmptyStatesPage = () => (
  <PageContainer title="Empty States" description="Communicate next steps when content is missing.">
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        borderRadius: 3,
        textAlign: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Nothing here yet
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Get started by creating your first item.
      </Typography>
      <Button variant="contained">Create item</Button>
    </Paper>
  </PageContainer>
);

export const ErrorPages = () => (
  <PageContainer title="404 & 500" description="Template layouts for error states.">
    <Stack spacing={3}>
      <Paper variant="outlined" sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          404
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          The page you were looking for could not be found.
        </Typography>
        <Button variant="contained">Go home</Button>
      </Paper>
      <Paper variant="outlined" sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          500
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Something went wrong on our end. Please try again later.
        </Typography>
        <Button variant="outlined">Retry</Button>
      </Paper>
    </Stack>
  </PageContainer>
);

export const BannerPage = () => (
  <PageContainer title="Banner" description="Banners draw attention to high-level updates.">
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'info.light',
        color: 'info.contrastText',
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        We have updated our privacy policy
      </Typography>
      <Typography variant="body2">
        Review the changes to stay informed about how we handle your data.
      </Typography>
    </Paper>
  </PageContainer>
);

export const FilterPage = () => (
  <PageContainer title="Filter" description="Filter controls help narrow down long lists.">
    <Stack spacing={3}>
      <TextField label="Search" placeholder="Search items" fullWidth />
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <FormControl fullWidth>
          <InputLabel id="filter-status-label">Status</InputLabel>
          <Select labelId="filter-status-label" label="Status" defaultValue="all">
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="archived">Archived</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="filter-sort-label">Sort by</InputLabel>
          <Select labelId="filter-sort-label" label="Sort by" defaultValue="recent">
            <MenuItem value="recent">Most recent</MenuItem>
            <MenuItem value="popular">Most popular</MenuItem>
            <MenuItem value="alphabetical">Alphabetical</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  </PageContainer>
);

export const NavigationMenuPage = () => (
  <PageContainer title="Navigation Menu" description="A simple menu for section navigation.">
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

export const CommandSearchPage = () => (
  <PageContainer
    title="Command & Search"
    description="Provide quick access to actions with a command palette."
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

export const SkeletonPage = () => (
  <PageContainer
    title="Skeleton"
    description="Skeletons provide a placeholder while content loads."
  >
    <Stack spacing={2}>
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="rectangular" height={120} />
      <Stack direction="row" spacing={2}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width="40%" />
      </Stack>
    </Stack>
  </PageContainer>
);

export const PaginationPage = () => (
  <PageContainer title="Pagination" description="Pagination splits long datasets into pages.">
    <Pagination count={10} color="primary" />
  </PageContainer>
);

export const ProgressPage = () => (
  <PageContainer title="Progress" description="Progress indicators show loading states.">
    <Stack spacing={2} alignItems="flex-start">
      <LinearProgress sx={{ width: '100%', maxWidth: 320 }} />
      <CircularProgress color="primary" />
    </Stack>
  </PageContainer>
);

export const RadioPage = () => (
  <PageContainer title="Radio" description="Radio buttons allow users to select one option.">
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

export const FormPage = () => (
  <PageContainer title="Form" description="Combine inputs to capture information.">
    <Stack spacing={2} maxWidth={480}>
      <TextField label="Full name" fullWidth />
      <TextField label="Email" type="email" fullWidth />
      <FormControlLabel control={<Checkbox />} label="Subscribe to updates" />
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <Button>Cancel</Button>
        <Button variant="contained">Submit</Button>
      </Stack>
    </Stack>
  </PageContainer>
);

export const SidebarPage = () => (
  <PageContainer title="Sidebar" description="A persistent menu anchored to the side.">
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

export const ScrollPage = () => (
  <PageContainer title="Scroll" description="Scrollable containers manage overflowed content.">
    <Box
      sx={{
        maxHeight: 200,
        overflowY: 'auto',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        p: 2,
      }}
    >
      <Stack spacing={1}>
        {Array.from({ length: 20 }, (_, index) => (
          <Typography key={index} variant="body2">
            Item {index + 1}
          </Typography>
        ))}
      </Stack>
    </Box>
  </PageContainer>
);

export const StepperPage = () => (
  <PageContainer title="Stepper" description="Guide users through multi-step flows.">
    <Stepper activeStep={1} alternativeLabel>
      {['Select plan', 'Billing details', 'Review'].map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </PageContainer>
);

export const SwitchPage = () => (
  <PageContainer title="Switch" description="Switches toggle between two states.">
    <FormControlLabel control={<Switch defaultChecked />} label="Enable notifications" />
  </PageContainer>
);

export const TabsPage = () => {
  const [value, setValue] = useState(0);

  return (
    <PageContainer title="Tabs" description="Tabs switch between related views.">
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab label="Overview" />
        <Tab label="Activity" />
        <Tab label="Settings" />
      </Tabs>
      <Typography sx={{ mt: 2 }}>Current tab: {value + 1}</Typography>
    </PageContainer>
  );
};

export const TablePage = () => (
  <PageContainer title="Table" description="Tables organize data in rows and columns.">
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Protein (g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {[
          ['Frozen yoghurt', 159, 6],
          ['Ice cream sandwich', 237, 9],
        ].map(([name, calories, protein]) => (
          <TableRow key={name}>
            <TableCell component="th" scope="row">
              {name}
            </TableCell>
            <TableCell align="right">{calories}</TableCell>
            <TableCell align="right">{protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </PageContainer>
);

export const InputPage = () => (
  <PageContainer title="Input" description="Text fields accept short form text.">
    <TextField label="Name" placeholder="Jane Doe" fullWidth />
  </PageContainer>
);

export const SelectPage = () => (
  <PageContainer title="Select" description="Select inputs present a list of predefined options.">
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

export const TextareaPage = () => (
  <PageContainer title="Textarea" description="Multiline text fields capture longer responses.">
    <TextField label="Message" placeholder="Write a message" fullWidth multiline minRows={4} />
  </PageContainer>
);

export const TooltipPage = () => (
  <PageContainer title="Tooltip" description="Tooltips provide contextual hints on hover.">
    <Tooltip title="Tooltip message">
      <Button variant="outlined">Hover me</Button>
    </Tooltip>
  </PageContainer>
);

export const FileInputPage = () => (
  <PageContainer title="File Input" description="Allow users to upload files.">
    <Button variant="contained" component="label">
      Upload file
      <input hidden type="file" />
    </Button>
  </PageContainer>
);
