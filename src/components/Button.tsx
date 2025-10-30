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

// No background, border, or boxShadow changes on hover; only opacity
const getVariantSx = (
  theme: any,
  variant: ButtonVariant,
  color: ButtonColor,
  disabled?: boolean,
  loading?: boolean
) => {
  const borderRadius = `${theme.tokens?.radius?.md || 8}px`;
  const colors = getColorSet(theme, color);
  const isInactive = disabled || loading;

  switch (variant) {
    case 'primary': {
      const bg = colors.bg;
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: bg,
        color: colors.text,
        border: 'none',
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: bg,
          opacity: 0.8,
          boxShadow: 'none',
        },
      };
    }
    case 'secondary': {
      const bg = colors.bgLight || colors.bg;
      const colorText = colors.textDark || colors.text;
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: bg,
        color: colorText,
        border: 'none',
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: bg,
          opacity: 0.8,
          boxShadow: 'none',
        },
      };
    }
    case 'outline': {
      const borderColor = colors.border;
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: 'transparent',
        color: colors.bg,
        border: `1.5px solid ${borderColor}`,
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: 'transparent',
          border: `1.5px solid ${borderColor}`,
          opacity: 0.8,
          boxShadow: 'none',
        },
      };
    }
    case 'ghost': {
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: 'transparent',
        color: colors.bg,
        border: 'none',
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: 'transparent',
          opacity: 0.8,
          boxShadow: 'none',
        },
      };
    }
    case 'link': {
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: 'none',
        color: colors.bg,
        border: 'none',
        textDecoration: 'underline',
        padding: 0,
        minWidth: 'auto',
        fontWeight: 500,
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: 'none',
          opacity: 0.8,
          boxShadow: 'none',
        },
      };
    }
    default: {
      const bg = colors.bg;
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: bg,
        color: colors.text,
        border: 'none',
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: bg,
          opacity: 0.8,
          boxShadow: 'none',
        },
      };
    }
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
      color={color}
      size={size}
      disabled={inactive}
      startIcon={startIcon}
      endIcon={endIcon}
      className={clsx(className, `Button--${variant}`, `Button--${size}`)}
      sx={{
        ...sizeStyle,
        ...variantSx,
        width: 'fit-content',
        minWidth: 'fit-content',
        ...(rest as any).sx,
      }}
      {...rest}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </MUIButton>
  );
});

Button.displayName = 'Button';

export default Button;
