import { Box, TableCell, Typography } from '@mui/material';
import type { TableCellProps } from '@mui/material';
import { forwardRef } from 'react';
import type { ReactNode } from 'react';

export type TableCellTone = 'default' | 'warning' | 'positive' | 'negative';

export interface CustomTableCellProps extends TableCellProps {
  tone?: TableCellTone;
  description?: ReactNode;
  editable?: boolean;
}

const getAlignment = (align: TableCellProps['align']) => {
  switch (align) {
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'justify':
      return 'stretch';
    default:
      return 'flex-start';
  }
};

export const CustomTableCell = forwardRef<HTMLTableCellElement, CustomTableCellProps>(
  ({ children, description, tone = 'default', editable = false, align, ...rest }, ref) => (
    <TableCell
      {...rest}
      ref={ref}
      align={align}
      data-editable={editable ? 'true' : undefined}
      data-tone={tone}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: description ? theme.spacing(0.5) : 0,
          alignItems: getAlignment(align),
          textAlign: !align || align === 'inherit' ? 'left' : align,
          width: '100%',
        })}
        contentEditable={editable}
        suppressContentEditableWarning={editable}
      >
        <Box component="span" sx={{ width: '100%' }}>
          {children}
        </Box>
        {description ? (
          <Typography
            variant="textM"
            color="text.secondary"
            component="span"
            contentEditable={false}
            sx={{ width: '100%' }}
          >
            {description}
          </Typography>
        ) : null}
      </Box>
    </TableCell>
  )
);

CustomTableCell.displayName = 'CustomTableCell';

export default CustomTableCell;
