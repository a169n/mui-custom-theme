import React from 'react';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import clsx from 'clsx';
import { Typography } from '@mui/material';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonTone = 'default' | 'positive' | 'negative';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export type ButtonProps = ButtonBaseProps &
  Omit<MUIButtonProps, 'color' | 'size' | 'variant' | 'startIcon' | 'endIcon'>;

const toneToColor = (tone: ButtonTone): MUIButtonProps['color'] => {
  switch (tone) {
    case 'positive':
      return 'success';
    case 'negative':
      return 'error';
    default:
      return 'primary';
  }
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    tone = 'default',
    size = 'medium',
    startIcon,
    endIcon,
    disabled = false,
    loading = false,
    children,
    className,
    ...rest
  } = props;

  const muiColor = toneToColor(tone);
  const inactive = disabled || loading;

  return (
    <MUIButton
      ref={ref}
      variant={variant}
      color={muiColor}
      size={size}
      disabled={inactive}
      startIcon={startIcon}
      endIcon={endIcon}
      className={clsx(className, `Button--${variant}`, `Button--${size}`)}
      {...rest}
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        <Typography variant="caption" fontWeight="regular">
          {children}
        </Typography>
      )}
    </MUIButton>
  );
});

Button.displayName = 'Button';

export default Button;
