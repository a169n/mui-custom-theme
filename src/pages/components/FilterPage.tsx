import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const filterUsage = createUsageSnippet([
  'return (',
  '  <TextField',
  '    label="Search"',
  '    sx={{',
  "      '& .MuiOutlinedInput-root': { borderRadius: theme.shape.borderRadius * 2 },",
  '    }}',
  '  />',
  ');',
]);

export const FilterPage = () => (
  <PageContainer
    title="Filter"
    description="Filter controls help narrow down long lists."
    usage={filterUsage}
  >
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

export default FilterPage;
