import { Avatar, Stack } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const avatarUsage = createUsageSnippet([
  'return (',
  '  <Avatar sx={{ bgcolor: theme.palette.primary[100], color: theme.palette.primary.dark }}>',
  '    AB',
  '  </Avatar>',
  ');',
]);

export const AvatarPage = () => (
  <PageContainer title="Avatar" description="Default avatar variations." usage={avatarUsage}>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
      <Avatar>AB</Avatar>
      <Avatar src="https://i.pravatar.cc/150?img=32" alt="Avatar" />
      <Avatar sx={{ bgcolor: 'primary.main' }}>CD</Avatar>
    </Stack>
  </PageContainer>
);

export default AvatarPage;
