import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const tableUsage = createUsageSnippet([
  'return (',
  '  <TableHead',
  '    sx={{',
  '      bgcolor: theme.palette.gray[50],',
  "      '& .MuiTableCell-root': { color: theme.palette.text.secondary },",
  '    }}',
  '  />',
  ');',
]);

export const TablePage = () => (
  <PageContainer
    title="Table"
    description="Tables organize data in rows and columns."
    usage={tableUsage}
  >
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

export default TablePage;
