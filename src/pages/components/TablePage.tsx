import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { CustomTableCell } from '../../components/table';

const tableUsage = createUsageSnippet([
  'return (',
  '  <TableContainer>',
  '    <Table>',
  '      <TableHead>',
  '        <TableRow>',
  '          <TableCell>Dessert</TableCell>',
  '          <TableCell align="right">Calories</TableCell>',
  '          <TableCell align="right">Protein (g)</TableCell>',
  '          <TableCell>Status</TableCell>',
  '        </TableRow>',
  '      </TableHead>',
  '      <TableBody>',
  '        {rows.map((row) => (',
  '          <TableRow key={row.dessert.name}>',
  '            <CustomTableCell description={row.dessert.description}>',
  '              {row.dessert.name}',
  '            </CustomTableCell>',
  '            <CustomTableCell align="right" editable>',
  '              {row.calories}',
  '            </CustomTableCell>',
  '            <CustomTableCell align="right" editable>',
  '              {row.protein}',
  '            </CustomTableCell>',
  '            <CustomTableCell tone={row.status.tone} description={row.status.description}>',
  '              {row.status.label}',
  '            </CustomTableCell>',
  '          </TableRow>',
  '        ))}',
  '      </TableBody>',
  '    </Table>',
  '  </TableContainer>',
  ');',
]);

const rows = [
  {
    dessert: { name: 'Frozen yoghurt', description: 'SKU: FY-001' },
    calories: 159,
    protein: 6,
    status: {
      label: 'In stock',
      tone: 'positive' as const,
    },
  },
  {
    dessert: { name: 'Ice cream sandwich', description: 'SKU: IC-003' },
    calories: 237,
    protein: 9,
    status: {
      label: 'Low inventory',
      tone: 'warning' as const,
      description: 'Restock in 2 days',
    },
  },
  {
    dessert: { name: 'Eclair', description: 'SKU: EC-014' },
    calories: 262,
    protein: 6,
    status: {
      label: 'Out of stock',
      tone: 'negative' as const,
      description: 'Notify customers',
    },
  },
  {
    dessert: { name: 'Cupcake', description: 'SKU: CP-021' },
    calories: 305,
    protein: 4,
    status: {
      label: 'Available',
      tone: 'default' as const,
      description: 'Seasonal special',
    },
  },
];

export const TablePage = () => (
  <PageContainer
    title="Table"
    description="Tables organize data in rows and columns."
    usage={tableUsage}
  >
    <TableContainer>
      <Table>
        <TableHead>
          <TableCell>Dessert</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Protein (g)</TableCell>
          <TableCell>Status</TableCell>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.dessert.name}>
              <CustomTableCell description={row.dessert.description}>
                {row.dessert.name}
              </CustomTableCell>
              <CustomTableCell align="right" editable>
                {row.calories}
              </CustomTableCell>
              <CustomTableCell align="right" editable>
                {row.protein}
              </CustomTableCell>
              <CustomTableCell tone={row.status.tone} description={row.status.description}>
                {row.status.label}
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </PageContainer>
);

export default TablePage;
