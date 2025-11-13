import type { Components, Theme } from '@mui/material/styles';
import type { ButtonPropsVariantOverrides } from '@mui/material/Button';

const resolveModeTokens = (theme: Theme) => {
  const mode = theme.palette.mode ?? 'light';
  return theme.tokens?.modes?.[mode] ?? theme.tokens?.modes?.light;
};

type ToneKey = 'brand' | 'positive' | 'negative';

export type CustomButtonVariant = keyof ButtonPropsVariantOverrides;

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
      solidBg: tokens?.bg?.brand?.default ?? palette.primary.main,
      solidText: tokens?.text?.light ?? palette.common.white,
      subtleBg: tokens?.bg?.brand?.muted ?? palette.primary.light,
      subtleText: tokens?.text?.brand ?? palette.primary.dark,
      border: tokens?.border?.brand ?? palette.primary.main,
      plainText: tokens?.text?.brand ?? palette.primary.main,
      linkText: tokens?.text?.link ?? palette.primary.main,
    },
    positive: {
      solidBg: tokens?.bg?.positive?.default ?? palette.success.main,
      solidText: tokens?.text?.light ?? palette.common.white,
      subtleBg: tokens?.bg?.positive?.muted ?? palette.success.light,
      subtleText: tokens?.text?.positive ?? palette.success.dark,
      border: tokens?.border?.positive ?? palette.success.main,
      plainText: tokens?.text?.positive ?? palette.success.main,
      linkText: tokens?.text?.positive ?? palette.success.main,
    },
    negative: {
      solidBg: tokens?.bg?.negative?.default ?? palette.error.main,
      solidText: tokens?.text?.light ?? palette.common.white,
      subtleBg: tokens?.bg?.negative?.muted ?? palette.error.light,
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
      opacity: 0.5,
      border: 'none',
    },
  };
};

const buildSecondaryStyles = (theme: Theme) => {
  const tokens = resolveModeTokens(theme);
  const backgroundColor = tokens?.bg?.muted;
  const text = tokens?.text?.default ?? theme.palette.text.primary;
  const hoverBackgroundColor = theme.palette.mode === 'dark' ? '#313131' : '#E9E9E9';

  return {
    backgroundColor,
    color: text,
    border: 'none',
    '&:hover': {
      backgroundColor: hoverBackgroundColor,
    },
    '&.Mui-disabled': {
      backgroundColor,
      color: text,
      border: 'none',
      opacity: 0.5,
    },
  };
};

const buildOutlineStyles = (theme: Theme, color: string | undefined) => {
  const colors = getToneColors(theme, color);
  const tokens = resolveModeTokens(theme);
  const isDefaultTone = getToneKey(color) === 'brand';

  if (isDefaultTone) {
    const background = tokens?.bg?.default ?? theme.palette.background.paper;
    const text = tokens?.text?.default ?? theme.palette.text.primary;
    const border = tokens?.border?.default ?? theme.palette.divider;
    const hoverBackground = theme.palette.mode === 'dark' ? '#232323' : '#F3F3F3';

    return {
      backgroundColor: background,
      color: text,
      border: `1.5px solid ${border}`,
      '&:hover': {
        backgroundColor: hoverBackground,
        border: `1.5px solid ${border}`,
      },
      '&.Mui-disabled': {
        backgroundColor: background,
        color: text,
        border: `1.5px solid ${border}`,
        opacity: 0.5,
      },
    };
  }

  return {
    backgroundColor: 'transparent',
    color: colors.plainText,
    border: `1.5px solid ${colors.border}`,
    '&:hover': {
      backgroundColor: 'transparent',
      border: `1.5px solid ${colors.border}`,
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
      color: colors.plainText,
      border: `1.5px solid ${colors.border}`,
      opacity: 0.5,
    },
  };
};

const buildGhostStyles = (theme: Theme, color: string | undefined) => {
  const colors = getToneColors(theme, color);
  const tokens = resolveModeTokens(theme);
  const hoverBackground = theme.palette.alpha.black[100];
  const isDefaultTone = getToneKey(color) === 'brand';
  const textColor = isDefaultTone
    ? (tokens?.text?.default ?? theme.palette.text.primary)
    : colors.plainText;

  return {
    backgroundColor: 'transparent',
    color: textColor,
    border: '0 !important',
    '&:hover': {
      backgroundColor: hoverBackground,
      border: '0 !important',
      opacity: 0.8,
    },
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
      color: textColor,
      border: '0 !important',
      opacity: 0.5,
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
    textDecoration: 'none',
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
      opacity: 0.5,
    },
  };
};

export const getButtonVariantStyles = (
  theme: Theme,
  variant: CustomButtonVariant | undefined,
  color: string | undefined
) => {
  switch (variant) {
    case 'primary':
      return buildPrimaryStyles(theme, color);
    case 'secondary':
      return buildSecondaryStyles(theme);
    case 'outline':
      return buildOutlineStyles(theme, color);
    case 'ghost':
      return buildGhostStyles(theme, color);
    case 'link':
      return buildLinkStyles(theme, color);
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
      root: ({ theme, ownerState }) => {
        const radiusScale = theme.tokens?.modes?.[theme.palette.mode]?.radius;
        const mdRadius = radiusScale?.md;

        return {
          ...theme.typography.caption,
          textTransform: 'none',
          minWidth: 'auto',
          width: 'fit-content',
          transition: 'opacity 0.3s ease',
          boxShadow: 'none',
          borderRadius: `${mdRadius}px`,
          borderWidth: '1px',
          gap: theme.spacing(1),
          '&:hover': {
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
          ...getButtonVariantStyles(
            theme,
            (ownerState.variant as CustomButtonVariant | undefined) ?? undefined,
            ownerState.color
          ),
        };
      },
      startIcon: () => ({
        color: 'inherit',
        marginLeft: 0,
        marginRight: 0,
        width: 16,
        height: 16,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *:nth-of-type(1)': {
          fontSize: 16,
          width: 16,
          height: 16,
        },
        '& svg': {
          color: 'inherit',
          fill: 'currentColor',
          stroke: 'currentColor',
          width: 16,
          height: 16,
        },
      }),
      endIcon: () => ({
        color: 'inherit',
        marginLeft: 0,
        marginRight: 0,
        width: 16,
        height: 16,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *:nth-of-type(1)': {
          fontSize: 16,
          width: 16,
          height: 16,
        },
        '& svg': {
          color: 'inherit',
          fill: 'currentColor',
          stroke: 'currentColor',
          width: 16,
          height: 16,
        },
      }),
      sizeSmall: ({ theme }) => {
        const radiusScale = theme.tokens?.modes?.[theme.palette.mode]?.radius;
        const mdRadius = radiusScale?.md ?? 8;

        return {
          padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
          height: 32,
          minHeight: 32,
          borderRadius: `${mdRadius}px`,
        };
      },
      sizeMedium: ({ theme }) => {
        const radiusScale = theme.tokens?.modes?.[theme.palette.mode]?.radius;
        const mdRadius = radiusScale?.md ?? 8;

        return {
          padding: `${theme.spacing(2.5)} ${theme.spacing(3)}`,
          height: 36,
          minHeight: 36,
          borderRadius: `${mdRadius}px`,
        };
      },
      sizeLarge: ({ theme }) => {
        const radiusScale = theme.tokens?.modes?.[theme.palette.mode]?.radius;
        const lgRadius = radiusScale?.lg ?? 10;

        return {
          padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
          height: 40,
          minHeight: 40,
          borderRadius: `${lgRadius}px`,
        };
      },
    },
  },
};

export default buttons;
