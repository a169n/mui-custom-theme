import {
  Box,
  Button,
  Chip,
  Divider,
  FormControlLabel,
  FormControl,
  Grid,
  MenuItem,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  Select,
  InputLabel,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import SectionCard from './SectionCard';

const ComponentsSection = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [status, setStatus] = useState('pending');
  const [plan, setPlan] = useState('starter');

  const handleTabChange = (_event: SyntheticEvent, value: number) => {
    setTabValue(value);
  };

  const handleStatusChange = (_event: SelectChangeEvent<string>) => {
    setStatus(_event.target.value);
  };

  const handlePlanChange = (_event: ChangeEvent<HTMLInputElement>, value: string) => {
    setPlan(value);
  };

  return (
    <SectionCard
      title="Component overrides"
      description="Interactive controls demonstrating the theme-specific component customizations."
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Buttons
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
          </Stack>
        </Box>

        <Divider />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Inputs</Typography>
              <TextField fullWidth label="Email" placeholder="bruce@wayneenterprises.com" />
              <FormControl fullWidth>
                <InputLabel id="status-select-label">Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  value={status}
                  label="Status"
                  onChange={handleStatusChange}
                >
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="approved">Approved</MenuItem>
                  <MenuItem value="rejected">Rejected</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Selection controls</Typography>
              <Tabs value={tabValue} onChange={handleTabChange} aria-label="plan tabs">
                <Tab label="Overview" />
                <Tab label="Billing" />
                <Tab label="Usage" />
              </Tabs>
              <RadioGroup row value={plan} onChange={handlePlanChange}>
                <FormControlLabel
                  value="starter"
                  control={<Radio color="success" />}
                  label="Starter"
                />
                <FormControlLabel
                  value="growth"
                  control={<Radio color="success" />}
                  label="Growth"
                />
                <FormControlLabel
                  value="enterprise"
                  control={<Radio color="success" />}
                  label="Enterprise"
                />
              </RadioGroup>
            </Stack>
          </Grid>
        </Grid>

        <Divider />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Chips
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Info" color="info" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>
              Pagination
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                borderColor: theme.palette.gray[200],
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Pagination count={5} color="primary" />
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </SectionCard>
  );
};

export default ComponentsSection;
