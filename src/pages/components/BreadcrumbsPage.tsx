import { Breadcrumbs, Link } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const breadcrumbsUsage = createUsageSnippet([
  'return (',
  '  <Breadcrumbs',
  '    sx={{',
  "      '& a': { color: theme.palette.text.secondary },",
  "      '& .MuiTypography-root': { color: theme.palette.text.primary },",
  '    }}',
  '  >',
  '    {/* items */}',
  '  </Breadcrumbs>',
  ');',
]);

export const BreadcrumbsPage = () => (
  <PageContainer
    title="Breadcrumbs"
    description="Breadcrumbs show the hierarchy of the current page."
    usage={breadcrumbsUsage}
  >
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="#">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Library
      </Link>
      <Link underline="hover" color="text.primary" href="#">
        Data
      </Link>
    </Breadcrumbs>
  </PageContainer>
);

export default BreadcrumbsPage;
