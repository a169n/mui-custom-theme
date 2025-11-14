import React from 'react';
import MUIIconButton, { IconButtonProps as MUIIconButtonProps } from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { ButtonSize, ButtonTone, ButtonVariant } from './Button';
import { CustomButtonVariant, getButtonVariantStyles } from '../theme/components/actions/buttons';
import { useModeTokens } from '../theme/useModeTokens';

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
  forceHoverState?: boolean;
}

const getIconSize = (size: IconButtonSize) => (size === 'large' ? 24 : 20);

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

const getSizeStyles = (
  theme: Theme,
  size: IconButtonSize,
  radiusScale?: { md?: number; lg?: number }
) => {
  const radiusMd = radiusScale?.md ?? 8;
  const radiusLg = radiusScale?.lg ?? 10;

  switch (size) {
    case 'small':
      return {
        padding: theme.spacing(1.5),
        borderRadius: `${radiusMd}px`,
      };
    case 'large':
      return {
        padding: theme.spacing(2),
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
    forceHoverState = false,
    ...rest
  } = props;
  const theme = useTheme();
  const modeTokens = useModeTokens();
  const muiColor = toneToColor(tone);
  const inactive = disabled || loading;
  const iconSize = getIconSize(size);
  const variantStylesRaw = getButtonVariantStyles(theme, variant as CustomButtonVariant, muiColor);
  const variantStylesObject = (variantStylesRaw ?? {}) as Record<string, unknown>;
  const outlineBorderWidth = '1px';
  const outlineStyles =
    variant === 'outline'
      ? {
          borderWidth: outlineBorderWidth,
          ...(variantStylesObject['&:hover']
            ? {
                '&:hover': {
                  ...(variantStylesObject['&:hover'] as Record<string, unknown>),
                  borderWidth: outlineBorderWidth,
                },
              }
            : {}),
          ...(variantStylesObject['&.Mui-disabled']
            ? {
                '&.Mui-disabled': {
                  ...(variantStylesObject['&.Mui-disabled'] as Record<string, unknown>),
                  borderWidth: outlineBorderWidth,
                },
              }
            : {}),
        }
      : {};
  const variantStyles = {
    ...variantStylesObject,
    ...outlineStyles,
  } as SxProps<Theme>;
  const variantStylesRecord = variantStyles as Record<string, unknown>;
  const sizeStyles = getSizeStyles(theme, size, modeTokens?.radius);
  const baseStyles = {
    ...variantStyles,
    ...sizeStyles,
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 0,
    minHeight: 0,
    transition: 'opacity 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    '& svg': {
      width: iconSize,
      height: iconSize,
      color: 'inherit',
      fill: 'currentColor',
      stroke: 'currentColor',
    },
  };

  const sxArray = Array.isArray(sx) ? sx : sx ? [sx] : [];
  if (forceHoverState && variantStylesRecord['&:hover']) {
    sxArray.unshift({
      pointerEvents: 'none',
      ...(variantStylesRecord['&:hover'] as object),
    });
  }

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
      {loading ? (
        <CircularProgress size={iconSize} color="inherit" />
      ) : (
        <Box
          component="span"
          sx={{
            visibility: loading ? 'hidden' : 'visible',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: iconSize,
            height: iconSize,
          }}
        >
          {children}
        </Box>
      )}
    </MUIIconButton>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
