import type { Components, Theme } from '@mui/material/styles';
import type { ButtonPropsVariantOverrides } from '@mui/material/Button';

const resolveModeTokens = (theme: Theme) => {
  const mode = theme.palette.mode ?? 'light';
  return theme.tokens?.modes?.[mode] ?? theme.tokens?.modes?.light;
};

type ToneKey = 'brand' | 'positive' | 'negative';

type ToneColors = {
  solidBg: string;
  solidText: string;
  subtleBg: string;
  subtleText: string;
  border: string;
  plainText: string;
  linkText: string;
};

const getToneKey = (color: string | undefined): ToneKey => {
  if (color === 'success') {
    return 'positive';
  }
  if (color === 'error') {
    return 'negative';
  }
  return 'brand';
};

const getToneColors = (theme: Theme, color: string | undefined): ToneColors => {
  const tokens = resolveModeTokens(theme);
  const palette = theme.palette;

  const base: Record<ToneKey, ToneColors> = {
    brand: {
      solidBg: tokens?.bg?.brand ?? palette.primary.main,
      solidText: tokens?.text?.light ?? palette.common.white,
      subtleBg: tokens?.bg?.['brand-muted'] ?? palette.primary.light,
      subtleText: tokens?.text?.brand ?? palette.primary.dark,
      border: tokens?.border?.brand ?? palette.primary.main,
      plainText: tokens?.text?.brand ?? palette.primary.main,
      linkText: tokens?.text?.link ?? palette.primary.main,
    },
    positive: {
      solidBg: tokens?.bg?.positive ?? palette.success.main,
      solidText: tokens?.text?.light ?? palette.common.white,
      subtleBg: tokens?.bg?.['positive-muted'] ?? palette.success.light,
      subtleText: tokens?.text?.positive ?? palette.success.dark,
      border: tokens?.border?.positive ?? palette.success.main,
      plainText: tokens?.text?.positive ?? palette.success.main,
      linkText: tokens?.text?.positive ?? palette.success.main,
    },
    negative: {
      solidBg: tokens?.bg?.negative ?? palette.error.main,
      solidText: tokens?.text?.light ?? palette.common.white,
      subtleBg: tokens?.bg?.['negative-muted'] ?? palette.error.light,
      subtleText: tokens?.text?.negative ?? palette.error.dark,
      border: tokens?.border?.negative ?? palette.error.main,
      plainText: tokens?.text?.negative ?? palette.error.main,
      linkText: tokens?.text?.negative ?? palette.error.main,
    },
  };

  return base[getToneKey(color)];
};

const buildPrimaryStyles = (theme: Theme, color: string | undefined) => {
  const colors = getToneColors(theme, color);

  return {
    backgroundColor: colors.solidBg,
    color: colors.solidText,
    border: 'none',
    '&:hover': {
      backgroundColor: colors.solidBg,
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      backgroundColor: colors.solidBg,
      color: colors.solidText,
      border: 'none',
    },
  };
};

const buildSecondaryStyles = (theme: Theme) => {
  const tokens = resolveModeTokens(theme);
  const background = tokens?.bg?.muted ?? theme.palette.grey[200];
  const text = tokens?.text?.default ?? theme.palette.text.primary;
  const hoverBackground =
    tokens?.['alpha-black']?.[100] ?? 'rgba(10, 10, 10, 0.05)';

  return {
    backgroundColor: background,
    color: text,
    border: 'none',
    '&:hover': {
      backgroundColor: hoverBackground,
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      backgroundColor: background,
      color: text,
      border: 'none',
    },
  };
};

const buildOutlineStyles = (theme: Theme, color: string | undefined) => {
  const colors = getToneColors(theme, color);
  const tokens = resolveModeTokens(theme);
  const isDefaultTone = getToneKey(color) === 'brand';
  const defaultHoverBackground =
    tokens?.['alpha-black']?.[100] ?? 'rgba(10, 10, 10, 0.05)';

  return {
    backgroundColor: 'transparent',
    color: colors.plainText,
    border: `1.5px solid ${colors.border}`,
    '&:hover': {
      backgroundColor: isDefaultTone ? defaultHoverBackground : 'transparent',
      border: `1.5px solid ${colors.border}`,
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
      color: colors.plainText,
      border: `1.5px solid ${colors.border}`,
    },
  };
};

const buildGhostStyles = (theme: Theme, color: string | undefined) => {
  const colors = getToneColors(theme, color);
  const tokens = resolveModeTokens(theme);
  const hoverBackground =
    tokens?.['alpha-black']?.[100] ?? 'rgba(10, 10, 10, 0.05)';

  return {
    backgroundColor: 'transparent',
    color: colors.plainText,
    border: '0 !important',
    '&:hover': {
      backgroundColor: hoverBackground,
      border: '0 !important',
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
      color: colors.plainText,
      border: '0 !important',
    },
  };
};

const buildLinkStyles = (theme: Theme, color: string | undefined) => {
  const tokens = resolveModeTokens(theme);
  const colors = getToneColors(theme, color);

  return {
    backgroundColor: 'transparent',
    color: colors.linkText ?? tokens?.text?.link ?? theme.palette.primary.main,
    border: 'none',
    padding: '0 !important',
    minWidth: 'auto',
    textDecoration: 'none',
    '&.MuiButton-sizeSmall, &.MuiButton-sizeMedium, &.MuiButton-sizeLarge': {
      padding: '0 !important',
      minHeight: 'auto',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      color: colors.linkText ?? tokens?.text?.link ?? theme.palette.primary.main,
      textDecoration: 'none',
      backgroundColor: 'transparent',
      border: 'none',
    },
  };
};

const buildVariantStyles = (theme: Theme, ownerState: any) => {
  const variant = ownerState.variant as keyof ButtonPropsVariantOverrides | undefined;

  switch (variant) {
    case 'primary':
      return buildPrimaryStyles(theme, ownerState.color);
    case 'secondary':
      return buildSecondaryStyles(theme);
    case 'outline':
      return buildOutlineStyles(theme, ownerState.color);
    case 'ghost':
      return buildGhostStyles(theme, ownerState.color);
    case 'link':
      return buildLinkStyles(theme, ownerState.color);
    default:
      return {};
  }
};

export const buttons: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        textTransform: 'none',
        fontWeight: 500,
        minWidth: 'auto',
        width: 'fit-content',
        transition: 'opacity 0.3s ease',
        boxShadow: 'none',
        borderRadius: `${theme.tokens?.theme?.radius?.md ?? 8}px`,
        '&:hover': {
          boxShadow: 'none',
        },
        '&.Mui-disabled': {
          opacity: 0.5,
        },
        ...buildVariantStyles(theme, ownerState),
      }),
      sizeSmall: ({ theme }) => ({
        padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
        minHeight: 32,
      }),
      sizeMedium: ({ theme }) => ({
        padding: `${theme.spacing(2.5)} ${theme.spacing(3)}`,
        minHeight: 36,
      }),
      sizeLarge: ({ theme }) => ({
        padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
        minHeight: 40,
      }),
    },
  },
};

export default buttons;
