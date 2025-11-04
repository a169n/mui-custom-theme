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
  '          <TableCell>Description</TableCell>', // New column for description
  '          <TableCell align="center">Editable</TableCell>', // New column for editable
  '        </TableRow>',
  '      </TableHead>',
  '      <TableBody>',
  '        {rows.map((row) => (',
  '          <TableRow key={row.dessert.name}>',
  '            <CustomTableCell description={row.dessert.description} editable>',
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
  '            <CustomTableCell description={row.dessert.description}>', // Description cell
  '              {row.dessert.description}',
  '            </CustomTableCell>',
  '            <CustomTableCell align="center" editable={row.editable}>', // Editable cell
  '              {row.editable ? "Editable" : "Read-Only"}',
  '            </CustomTableCell>',
  '          </TableRow>',
  '        ))}',
  '      </TableBody>',
  '    </Table>',
  '  </TableContainer>',
  ');',
]);

// Updated rows with more complex data and edge cases
const rows = [
  {
    dessert: { name: 'Frozen yoghurt', description: 'SKU: FY-001' },
    calories: 159,
    protein: 6,
    status: {
      label: 'In stock',
      tone: 'positive' as const,
    },
    editable: true,
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
    editable: false,
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
    editable: true,
  },
  {
    dessert: { name: 'Cupcake', description: 'SKU: CU-101' },
    calories: 305,
    protein: 4,
    status: {
      label: 'Available',
      tone: 'default' as const,
    },
    editable: true,
  },
  // Additional rows for more cases
  {
    dessert: { name: 'Cheesecake', description: 'SKU: CS-205' },
    calories: 350,
    protein: 8,
    status: {
      label: 'In stock',
      tone: 'positive' as const,
    },
    editable: true,
  },
  {
    dessert: { name: 'Brownie', description: 'SKU: BR-406' },
    calories: 200,
    protein: 3,
    status: {
      label: 'Out of stock',
      tone: 'negative' as const,
      description: 'No stock available',
    },
    editable: false,
  },
  {
    dessert: { name: 'Muffin', description: 'SKU: MU-507' },
    calories: 280,
    protein: 5,
    status: {
      label: 'Low inventory',
      tone: 'warning' as const,
      description: 'Restock in 1 day',
    },
    editable: true,
  },
  {
    dessert: { name: 'Pie', description: 'SKU: PI-603' },
    calories: 420,
    protein: 10,
    status: {
      label: 'Available',
      tone: 'default' as const,
    },
    editable: false,
  },
  {
    dessert: { name: 'Donut', description: 'SKU: DN-804' },
    calories: 250,
    protein: 5,
    status: {
      label: 'In stock',
      tone: 'positive' as const,
    },
    editable: true,
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
          <TableCell>Description</TableCell> {/* New column for description */}
          <TableCell align="center">Editable</TableCell> {/* New column for editable */}
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.dessert.name}>
              <CustomTableCell description={row.dessert.description} editable={row.editable}>
                {row.dessert.name}
              </CustomTableCell>
              <CustomTableCell align="right" editable={row.editable}>
                {row.calories}
              </CustomTableCell>
              <CustomTableCell align="right" editable={row.editable}>
                {row.protein}
              </CustomTableCell>
              <CustomTableCell tone={row.status.tone} description={row.status.description}>
                {row.status.label}
              </CustomTableCell>
              <CustomTableCell description={row.dessert.description}>
                {row.dessert.description}
              </CustomTableCell>
              <CustomTableCell align="center" editable={row.editable}>
                {row.editable ? 'Editable' : 'Read-Only'}
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </PageContainer>
);

export default TablePage;
