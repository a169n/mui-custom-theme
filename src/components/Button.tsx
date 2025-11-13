import React from 'react';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import clsx from 'clsx';
import { Box, Typography } from '@mui/material';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { CustomButtonVariant, getButtonVariantStyles } from '../theme/components/actions/buttons';

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
  forceHoverState?: boolean;
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
    forceHoverState = false,
    ...rest
  } = props;

  const theme = useTheme();
  const muiColor = toneToColor(tone);
  const inactive = disabled || loading;
  const sxArray = Array.isArray(sx) ? sx : sx ? [sx] : [];
  const variantStylesObject = (
    getButtonVariantStyles(theme, variant as CustomButtonVariant, muiColor) ?? {}
  ) as Record<string, unknown>;
  const hoverStyles = variantStylesObject['&:hover'] as Record<string, unknown> | undefined;
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

  if (forceHoverState && hoverStyles) {
    sxArray.unshift({
      pointerEvents: 'none',
      ...hoverStyles,
    });
  }

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
