import { Pagination, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const paginationUsage = createUsageSnippet([
  'const [page, setPage] = useState(3);',
  '',
  'return (',
  '  <Pagination',
  '    count={10}',
  '    page={page}',
  '    onChange={(_, value) => setPage(value)}',
  '    showFirstButton',
  '    showLastButton',
  '  />',
  ');',
]);

export const PaginationPage = () => {
  const [page, setPage] = useState(3);

  return (
    <PageContainer
      title="Pagination"
      description="Pagination splits long datasets into pages."
      usage={paginationUsage}
    >
      <Stack spacing={3} alignItems="flex-start">
        <Pagination count={10} page={page} onChange={(_, value) => setPage(value)} />
      </Stack>
    </PageContainer>
  );
};

export default PaginationPage;
