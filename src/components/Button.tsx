import React from 'react';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'inherit';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export type ButtonProps = ButtonBaseProps &
  Omit<MUIButtonProps, 'color' | 'size' | 'variant' | 'startIcon' | 'endIcon'>;

const sizePadding = (theme: any, size: ButtonSize) => {
  switch (size) {
    case 'small':
      return {
        padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
        minHeight: 32,
        fontSize: 12,
      };
    case 'large':
      return {
        padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
        minHeight: 48,
        fontSize: 16,
      };
    case 'medium':
    default:
      return {
        padding: `${theme.spacing(2.5)} ${theme.spacing(3)}`,
        minHeight: 40,
        fontSize: 14,
      };
  }
};

const getColorSet = (theme: any, color: ButtonColor) => {
  const palette = theme?.palette?.[color] || theme.palette.primary;
  return {
    bg: palette.main,
    text: palette.contrastText,
    border: palette.main,
    bgLight: palette.light,
    textDark: palette.dark,
  };
};

// MUI's sx prop supports nested pseudo-selectors
const getVariantSx = (
  theme: any,
  variant: ButtonVariant,
  color: ButtonColor,
  disabled?: boolean,
  loading?: boolean
) => {
  const borderRadius = theme.tokens?.radius?.md || 8;
  const colors = getColorSet(theme, color);
  const isInactive = disabled || loading;
  const hoverOpacity = 0.8;
  const baseOpacity = isInactive ? 0.5 : 1;

  switch (variant) {
    case 'primary':
      return {
        background: colors.bg,
        color: colors.text,
        border: 'none',
        borderRadius,
        opacity: baseOpacity,
        transition: 'opacity 0.2s',
        '&:hover': { opacity: !isInactive ? hoverOpacity : baseOpacity, background: colors.bg },
      };
    case 'secondary':
      return {
        background: colors.bgLight || colors.bg,
        color: colors.textDark || colors.text,
        border: 'none',
        borderRadius,
        opacity: baseOpacity,
        transition: 'opacity 0.2s',
        '&:hover': { opacity: !isInactive ? hoverOpacity : baseOpacity, background: colors.bg },
      };
    case 'outline':
      return {
        background: 'transparent',
        color: colors.bg,
        border: `1.5px solid ${colors.border}`,
        borderRadius,
        opacity: baseOpacity,
        transition: 'opacity 0.2s',
        '&:hover': { opacity: !isInactive ? hoverOpacity : baseOpacity },
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: colors.bg,
        border: 'none',
        borderRadius,
        opacity: baseOpacity,
        transition: 'opacity 0.2s',
        '&:hover': { opacity: !isInactive ? hoverOpacity : baseOpacity },
      };
    case 'link':
      return {
        background: 'none',
        color: colors.bg,
        border: 'none',
        borderRadius,
        textDecoration: 'underline',
        padding: 0,
        minWidth: 'auto',
        fontWeight: 500,
        opacity: baseOpacity,
        transition: 'opacity 0.2s',
        '&:hover': {
          opacity: !isInactive ? hoverOpacity : baseOpacity,
          color: colors.textDark || colors.bg,
        },
      };
    default:
      return {
        background: colors.bg,
        color: colors.text,
        border: 'none',
        borderRadius,
        opacity: baseOpacity,
      };
  }
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    color = 'primary',
    size = 'medium',
    startIcon,
    endIcon,
    disabled = false,
    loading = false,
    children,
    className,
    ...rest
  } = props;
  const theme = useTheme();
  const inactive = disabled || loading;
  const sizeStyle = sizePadding(theme, size);
  const variantSx = getVariantSx(theme, variant, color, disabled, loading);

  // Map to MUI's internal variant for ripple/animation, but not style
  const mapMUIVariant =
    variant === 'outline' || variant === 'ghost'
      ? 'outlined'
      : variant === 'link'
        ? 'text'
        : 'contained';

  return (
    <MUIButton
      ref={ref}
      variant={mapMUIVariant}
      disabled={inactive}
      startIcon={startIcon}
      endIcon={endIcon}
      className={clsx(className, `Button--${variant}`, `Button--${size}`)}
      sx={{ ...sizeStyle, ...variantSx, ...(rest as any).sx }}
      {...rest}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </MUIButton>
  );
});

Button.displayName = 'Button';

export default Button;
