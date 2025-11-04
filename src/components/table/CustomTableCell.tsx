import { Box, TableCell, Typography } from '@mui/material';
import type { TableCellProps } from '@mui/material';
import { forwardRef, useCallback, useRef } from 'react';
import type { FocusEvent, MouseEvent, ReactNode } from 'react';

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
  ({ children, description, tone = 'default', editable = false, align, onMouseDown, ...rest }, ref) => {
    const editableContentRef = useRef<HTMLDivElement | null>(null);

    const selectEditableContent = useCallback(() => {
      if (!editable) {
        return;
      }

      const element = editableContentRef.current;

      if (!element || typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }

      const selection = window.getSelection?.();

      if (!selection) {
        return;
      }

      const range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    }, [editable]);

    const handleEditableFocus = useCallback(
      (event: FocusEvent<HTMLDivElement>) => {
        if (!editable) {
          return;
        }

        // Ensure the current event target receives focus before selection.
        const target = event.currentTarget;

        if (typeof window === 'undefined') {
          selectEditableContent();
          return;
        }

        window.requestAnimationFrame(() => {
          if (editableContentRef.current === target) {
            selectEditableContent();
          }
        });
      },
      [editable, selectEditableContent],
    );

    const handleCellMouseDown = useCallback(
      (event: MouseEvent<HTMLTableCellElement>) => {
        if (editable && editableContentRef.current) {
          const targetNode = event.target as Node;

          if (!editableContentRef.current.contains(targetNode)) {
            event.preventDefault();
            editableContentRef.current.focus();

            if (typeof window === 'undefined') {
              selectEditableContent();
            } else {
              window.requestAnimationFrame(() => {
                selectEditableContent();
              });
            }
          }
        }

        if (onMouseDown) {
          onMouseDown(event);
        }
      },
      [editable, onMouseDown, selectEditableContent],
    );

    return (
      <TableCell
        {...rest}
        ref={ref}
        align={align}
        data-editable={editable ? 'true' : undefined}
        data-tone={tone}
        onMouseDown={handleCellMouseDown}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: description ? theme.spacing(0.5) : 0,
            alignItems: getAlignment(align),
            textAlign: !align || align === 'inherit' ? 'left' : align,
            width: '100%',
            outline: 'none',
          })}
          ref={editableContentRef}
          contentEditable={editable}
          suppressContentEditableWarning={editable}
          tabIndex={editable ? 0 : undefined}
          onFocus={handleEditableFocus}
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
    );
  },
);

CustomTableCell.displayName = 'CustomTableCell';

export default CustomTableCell;
