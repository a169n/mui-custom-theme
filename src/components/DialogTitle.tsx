import { forwardRef } from 'react';
import MUIDialogTitle, { DialogTitleProps as MUIDialogTitleProps } from '@mui/material/DialogTitle';
import { IconX } from '@tabler/icons-react';
import { IconButton } from './IconButton';

export interface DialogTitleProps extends MUIDialogTitleProps {
  onClose?: () => void;
  hideCloseButton?: boolean;
  closeButtonAriaLabel?: string;
}

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  (
    { children, onClose, hideCloseButton = false, closeButtonAriaLabel = 'Close dialog', ...rest },
    ref
  ) => (
    <MUIDialogTitle ref={ref} {...rest}>
      {children}
      {!hideCloseButton && onClose ? (
        <IconButton
          variant="ghost"
          tone="default"
          size="small"
          aria-label={closeButtonAriaLabel}
          onClick={onClose}
        >
          <IconX size={20} stroke={1.5} />
        </IconButton>
      ) : null}
    </MUIDialogTitle>
  )
);

DialogTitle.displayName = 'DialogTitle';

export default DialogTitle;
