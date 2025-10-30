import { Button } from '../../components/Button';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const fileInputUsage = createUsageSnippet([
  'return (',
  '  <Button variant="primary" sx={{ bgcolor: theme.palette.secondary.main }}>',
  '    Upload',
  '  </Button>',
  ');',
]);

export const FileInputPage = () => (
  <PageContainer
    title="File Input"
    description="Allow users to upload files."
    usage={fileInputUsage}
  >
    <Button variant="primary" component="label">
      Upload file
      <input hidden type="file" />
    </Button>
  </PageContainer>
);

export default FileInputPage;
