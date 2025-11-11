import { Stack, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Avatar } from '../../components/Avatar';

const avatarUsage = createUsageSnippet([
  'return (',
  '  <Avatar',
  '    name="Maya Patel"',
  '    src="https://i.pravatar.cc/150?img=36"',
  '  />',
  ');',
]);

export const AvatarPage = () => (
  <PageContainer
    title="Avatar"
    description="Square avatars with automatic fallbacks, aligned to the BI tokens."
    usage={avatarUsage}
  >
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography variant="subtitle1">Image</Typography>
        <Avatar
          name="Tom Ford"
          src="https://cdn.tapter.link/user-files/2203/optimized/712418981ac35f7a10bf1e3dbcdc9e16.png"
        />
      </Stack>

      <Stack spacing={1}>
        <Typography variant="subtitle1">Fallback initials</Typography>
        <Stack direction="row" spacing={2}>
          <Avatar name="George" />
          <Avatar name="Гани" />
          <Avatar name="Самат" />
        </Stack>
      </Stack>
    </Stack>
  </PageContainer>
);

export default AvatarPage;
