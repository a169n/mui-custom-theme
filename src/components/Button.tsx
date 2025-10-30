import React from 'react';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';

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

const sizePadding = (theme: any, size: ButtonSize) => {
  switch (size) {
    case 'small':
      return {
        padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
        minHeight: 32,
      };
    case 'medium':
      return {
        padding: `${theme.spacing(2.5)} ${theme.spacing(3)}`,
        minHeight: 36,
      };
    case 'large':
      return {
        padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
        minHeight: 40,
      };
    default:
      return {
        padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
        minHeight: 32,
      };
  }
};

type ToneColorSet = {
  solidBg: string;
  solidText: string;
  subtleBg: string;
  subtleText: string;
  border: string;
  plainText: string;
};

const buildToneColors = (
  overrides: Partial<ToneColorSet>,
  fallback: ToneColorSet
): ToneColorSet => ({
  solidBg: overrides.solidBg ?? fallback.solidBg,
  solidText: overrides.solidText ?? fallback.solidText,
  subtleBg: overrides.subtleBg ?? fallback.subtleBg,
  subtleText: overrides.subtleText ?? fallback.subtleText,
  border: overrides.border ?? fallback.border,
  plainText: overrides.plainText ?? fallback.plainText,
});

const getToneColors = (theme: any, tone: ButtonTone): ToneColorSet => {
  const paletteMode = theme?.palette?.mode ?? 'light';
  const tokens = theme?.tokens?.modes?.[paletteMode];

  const primaryPalette = theme?.palette?.primary ?? {};
  const successPalette = theme?.palette?.success ?? {};
  const errorPalette = theme?.palette?.error ?? {};

  const lightText = tokens?.text?.light ?? theme?.palette?.common?.white ?? '#ffffff';

  const defaultFallback: ToneColorSet = {
    solidBg: primaryPalette.main ?? '#1976d2',
    solidText: primaryPalette.contrastText ?? lightText,
    subtleBg: primaryPalette.light ?? primaryPalette.main ?? '#1976d2',
    subtleText: primaryPalette.dark ?? primaryPalette.main ?? '#1976d2',
    border: primaryPalette.main ?? '#1976d2',
    plainText: primaryPalette.main ?? '#1976d2',
  };

  const positiveFallback: ToneColorSet = {
    solidBg: successPalette.main ?? '#2e7d32',
    solidText: successPalette.contrastText ?? lightText,
    subtleBg: successPalette.light ?? successPalette.main ?? '#2e7d32',
    subtleText: successPalette.dark ?? successPalette.main ?? '#2e7d32',
    border: successPalette.main ?? '#2e7d32',
    plainText: successPalette.main ?? '#2e7d32',
  };

  const negativeFallback: ToneColorSet = {
    solidBg: errorPalette.main ?? '#d32f2f',
    solidText: errorPalette.contrastText ?? lightText,
    subtleBg: errorPalette.light ?? errorPalette.main ?? '#d32f2f',
    subtleText: errorPalette.dark ?? errorPalette.main ?? '#d32f2f',
    border: errorPalette.main ?? '#d32f2f',
    plainText: errorPalette.main ?? '#d32f2f',
  };

  if (!tokens) {
    switch (tone) {
      case 'positive':
        return positiveFallback;
      case 'negative':
        return negativeFallback;
      default:
        return defaultFallback;
    }
  }

  const { bg, text, border } = tokens;

  const toneMap: Record<ButtonTone, ToneColorSet> = {
    default: buildToneColors(
      {
        solidBg: bg?.brand,
        solidText: text?.light,
        subtleBg: bg?.['brand-muted'],
        subtleText: text?.brand ?? text?.default,
        border: border?.brand,
        plainText: text?.brand ?? text?.default,
      },
      defaultFallback
    ),
    positive: buildToneColors(
      {
        solidBg: bg?.positive,
        solidText: text?.light,
        subtleBg: bg?.['positive-muted'],
        subtleText: text?.positive ?? text?.default,
        border: border?.positive,
        plainText: text?.positive ?? text?.default,
      },
      positiveFallback
    ),
    negative: buildToneColors(
      {
        solidBg: bg?.negative,
        solidText: text?.light,
        subtleBg: bg?.['negative-muted'],
        subtleText: text?.negative ?? text?.default,
        border: border?.negative,
        plainText: text?.negative ?? text?.default,
      },
      negativeFallback
    ),
  };

  return toneMap[tone];
};

// No background, border, or boxShadow changes on hover; only opacity
const getVariantSx = (
  theme: any,
  variant: ButtonVariant,
  colors: ToneColorSet,
  disabled?: boolean,
  loading?: boolean
) => {
  const borderRadius = `${theme.tokens?.radius?.md || 8}px`;
  const isInactive = disabled || loading;
  const paletteMode = theme?.palette?.mode ?? 'light';
  const modeTokens = theme?.tokens?.modes?.[paletteMode];
  const secondaryBackground = modeTokens?.bg?.muted ?? colors.subtleBg;
  const secondaryText = modeTokens?.text?.default ?? colors.subtleText;
  const linkColor = modeTokens?.text?.link ?? colors.plainText;

  switch (variant) {
    case 'primary': {
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: colors.solidBg,
        color: colors.solidText,
        border: 'none',
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: colors.solidBg,
          opacity: 0.8,
          boxShadow: 'none',
        },
      };
    }
    case 'secondary': {
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: secondaryBackground,
        color: secondaryText,
        border: 'none',
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: secondaryBackground,
          opacity: 0.8,
          boxShadow: 'none',
        },
      };
    }
    case 'outline': {
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: 'transparent',
        color: colors.plainText,
        border: `1.5px solid ${colors.border}`,
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: 'transparent',
          border: `1.5px solid ${colors.border}`,
          opacity: 0.8,
          boxShadow: 'none',
        },
      };
    }
    // inside getVariantSx, replace the 'ghost' case with this:
    // replace the 'ghost' case inside getVariantSx with:
    case 'ghost': {
      return {
        // ensure we beat MUI's .MuiButton-outlined rules
        '&&, &&.MuiButton-outlined, &&.MuiButton-outlined:hover': {
          borderRadius,
          transition: 'opacity 0.3s',
          boxShadow: 'none',
          background: 'transparent',
          color: colors.plainText,
          border: '0 !important',
          borderWidth: '0 !important',
          opacity: isInactive ? 0.5 : 1,
        },
        '&:hover': {
          background: 'transparent',
          opacity: 0.8,
          boxShadow: 'none',
          border: '0 !important',
          borderWidth: '0 !important',
        },
      };
    }

    case 'link': {
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: 'none',
        color: linkColor,
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
      return {
        borderRadius,
        transition: 'opacity 0.3s',
        boxShadow: 'none',
        background: colors.solidBg,
        color: colors.solidText,
        border: 'none',
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          background: colors.solidBg,
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
  const theme = useTheme();
  const inactive = disabled || loading;
  const sizeStyle = sizePadding(theme, size);
  console.log(sizeStyle);
  const normalizedTone: ButtonTone =
    variant === 'secondary' || variant === 'link' ? 'default' : tone;
  const toneColors = getToneColors(theme, normalizedTone);
  const variantSx = getVariantSx(theme, variant, toneColors, disabled, loading);

  const muiColor: MUIButtonProps['color'] =
    normalizedTone === 'positive' ? 'success' : normalizedTone === 'negative' ? 'error' : 'primary';

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
      color={muiColor}
      size={size}
      disabled={inactive}
      startIcon={startIcon}
      endIcon={endIcon}
      className={clsx(className, `Button--${variant}`, `Button--${size}`)}
      sx={{
        ...variantSx,
        ...sizeStyle,
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
