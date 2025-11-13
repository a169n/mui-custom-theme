import React from 'react';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import clsx from 'clsx';
import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

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
  sx?: SxProps<Theme>;
}

export type ButtonProps = ButtonBaseProps &
  Omit<MUIButtonProps, 'color' | 'size' | 'variant' | 'startIcon' | 'endIcon' | 'sx'>;

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
    sx,
    ...rest
  } = props;

  const muiColor = toneToColor(tone);
  const inactive = disabled || loading;
  const sxArray = Array.isArray(sx) ? sx : sx ? [sx] : [];
  const wrapIcon = (icon?: React.ReactNode) =>
    icon ? (
      <Box
        component="span"
        sx={{
          display: 'inherit',
          visibility: loading ? 'hidden' : 'visible',
        }}
      >
        {icon}
      </Box>
    ) : undefined;
  const startIconNode = wrapIcon(startIcon);
  const endIconNode = wrapIcon(endIcon);

  return (
    <MUIButton
      ref={ref}
      variant={variant}
      color={muiColor}
      size={size}
      disabled={inactive}
      startIcon={startIconNode}
      endIcon={endIconNode}
      className={clsx(className, `Button--${variant}`, `Button--${size}`)}
      sx={[{ position: 'relative' }, ...sxArray]}
      {...rest}
    >
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          visibility: loading ? 'hidden' : 'visible',
        }}
      >
        <Typography component="span" variant="caption" fontWeight="regular">
          {children}
        </Typography>
      </Box>
      {loading ? (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <CircularProgress size={20} color="inherit" />
        </Box>
      ) : null}
    </MUIButton>
  );
});

Button.displayName = 'Button';

export default Button;
