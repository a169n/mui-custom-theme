import { Pagination } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const paginationUsage = createUsageSnippet([
  'return (',
  '  <Pagination',
  '    count={5}',
  '    sx={{',
  "      '& .MuiPaginationItem-root.Mui-selected': {",
  '        bgcolor: theme.palette.primary.main,',
  '        color: theme.palette.primary.contrastText,',
  '      },',
  '    }}',
  '  />',
  ');',
]);

export const PaginationPage = () => (
  <PageContainer
    title="Pagination"
    description="Pagination splits long datasets into pages."
    usage={paginationUsage}
  >
    <Pagination count={10} color="primary" />
  </PageContainer>
);

export default PaginationPage;
