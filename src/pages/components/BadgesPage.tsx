import { Avatar, Badge, Box, Stack } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const badgesUsage = createUsageSnippet([
  'return (',
  '  <Badge',
  '    color="secondary"',
  '    sx={{',
  "      '& .MuiBadge-badge': { backgroundColor: theme.palette.secondary.main },",
  '    }}',
  '  >',
  '    <Avatar />',
  '  </Badge>',
  ');',
]);

export const BadgesPage = () => (
  <PageContainer
    title="Badges"
    description="Badges highlight additional counts and statuses."
    usage={badgesUsage}
  >
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

export default BadgesPage;
