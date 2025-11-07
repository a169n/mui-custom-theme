import React from 'react';
import MUIIconButton, { IconButtonProps as MUIIconButtonProps } from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { ButtonSize, ButtonTone, ButtonVariant } from './Button';
import { CustomButtonVariant, getButtonVariantStyles } from '../theme/components/actions/buttons';

export type IconButtonVariant = Exclude<ButtonVariant, 'link'>;
export type IconButtonTone = ButtonTone;
export type IconButtonSize = ButtonSize;

export interface IconButtonProps
  extends Omit<MUIIconButtonProps, 'color' | 'size' | 'children' | 'sx'> {
  variant?: IconButtonVariant;
  tone?: IconButtonTone;
  size?: IconButtonSize;
  loading?: boolean;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  className?: string;
}

const ICON_SIZE = 20;

const toneToColor = (tone: IconButtonTone): MUIIconButtonProps['color'] => {
  switch (tone) {
    case 'positive':
      return 'success';
    case 'negative':
      return 'error';
    default:
      return 'primary';
  }
};

const getSizeStyles = (theme: Theme, size: IconButtonSize) => {
  const radiusMd = theme.tokens?.theme?.radius?.md ?? 8;
  const radiusLg = theme.tokens?.theme?.radius?.lg ?? 10;

  switch (size) {
    case 'small':
      return {
        padding: theme.spacing(1.5),
        borderRadius: `${radiusMd}px`,
      };
    case 'large':
      return {
        padding: theme.spacing(2.5),
        borderRadius: `${radiusLg}px`,
      };
    default:
      return {
        padding: theme.spacing(2),
        borderRadius: `${radiusMd}px`,
      };
  }
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    tone = 'default',
    size = 'medium',
    disabled = false,
    loading = false,
    className,
    children,
    sx,
    ...rest
  } = props;
  const theme = useTheme();
  const muiColor = toneToColor(tone);
  const inactive = disabled || loading;
  const variantStyles = getButtonVariantStyles(theme, variant as CustomButtonVariant, muiColor);
  const sizeStyles = getSizeStyles(theme, size);
  const baseStyles = {
    ...variantStyles,
    ...sizeStyles,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 0,
    minHeight: 0,
    transition: 'opacity 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    '& svg': {
      width: ICON_SIZE,
      height: ICON_SIZE,
      color: 'inherit',
      fill: 'currentColor',
      stroke: 'currentColor',
    },
    '& > *:nth-of-type(1)': {
      width: ICON_SIZE,
      height: ICON_SIZE,
      fontSize: ICON_SIZE,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const sxArray = Array.isArray(sx) ? sx : sx ? [sx] : [];

  return (
    <MUIIconButton
      ref={ref}
      color={muiColor}
      size={size}
      disabled={inactive}
      className={clsx(
        className,
        'IconButton',
        `IconButton--${variant}`,
        `IconButton--${size}`,
        `IconButton--${tone}`
      )}
      sx={[baseStyles, ...sxArray]}
      {...rest}
    >
      <Box
        component="span"
        sx={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {loading ? (
          <CircularProgress size={ICON_SIZE} color="inherit" />
        ) : (
          <Box
            component="span"
            sx={{
              visibility: loading ? 'hidden' : 'visible',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {children}
          </Box>
        )}
      </Box>
    </MUIIconButton>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
