import { forwardRef } from 'react';
import MUIDialogTitle, { DialogTitleProps as MUIDialogTitleProps } from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { IconArrowLeft, IconX } from '@tabler/icons-react';
import { IconButton } from './IconButton';

export interface DialogTitleProps extends MUIDialogTitleProps {
  onClose?: () => void;
  hideCloseButton?: boolean;
  closeButtonAriaLabel?: string;
  onBack?: () => void;
  backButtonAriaLabel?: string;
}

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  (
    {
      children,
      onClose,
      hideCloseButton = false,
      closeButtonAriaLabel = 'Close dialog',
      onBack,
      backButtonAriaLabel = 'Go back',
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const paddingStyles = onBack
      ? {
          p: theme.spacing(2),
        }
      : { pt: theme.spacing(2), pr: theme.spacing(2), pb: theme.spacing(2), pl: theme.spacing(4) };

    return (
      <MUIDialogTitle
        ref={ref}
        {...rest}
        sx={{
          ...paddingStyles,
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(1),
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(1), minWidth: 0 }}>
          {onBack ? (
            <IconButton
              variant="ghost"
              tone="default"
              size="small"
              aria-label={backButtonAriaLabel}
              onClick={onBack}
              sx={{ p: theme.spacing(1.5) }}
            >
              <IconArrowLeft size={20} stroke={1.5} />
            </IconButton>
          ) : null}
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', minWidth: 0 }}>
            {children}
          </Box>
        </Box>
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
    );
  }
);

DialogTitle.displayName = 'DialogTitle';

export default DialogTitle;
