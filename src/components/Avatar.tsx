import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import { useModeTokens } from '../theme/useModeTokens';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  className?: string;
  sx?: SxProps<Theme>;
}

const getSize = (theme: Theme) => {
  const widthTokens = theme.tokens?.primitives?.width;
  const fallback = typeof theme.spacing === 'function' ? parseInt(theme.spacing(10), 10) : 40;
  const tokenValue = widthTokens?.['w-10'];

  return tokenValue ?? fallback;
};

const getRadius = (theme: Theme) => {
  const radiusTokens = theme.tokens?.primitives?.borderRadius;
  return radiusTokens?.['rounded-full'] ?? radiusTokens?.full ?? 9999;
};

const getInitial = (name?: string) => {
  if (!name) {
    return '?';
  }

  return name.trim().charAt(0).toUpperCase();
};

const renderFallback = (
  theme: Theme,
  modeTokens?: Theme['tokens']['modes'][Theme['palette']['mode']],
  name?: string
) => (
  <Typography
    variant="textM"
    component="span"
    sx={{
      color: modeTokens?.text?.brand ?? theme.palette.primary.main,
      fontWeight: 400,
      fontSize: theme.typography.textM?.fontSize ?? theme.typography.textM.fontSize,
      lineHeight: 1,
    }}
  >
    {getInitial(name)}
  </Typography>
);

const renderImage = (src: string, alt?: string) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
);

export const Avatar = forwardRef(function Avatar(
  { src, alt, name, className, sx }: AvatarProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const theme = useTheme();
  const modeTokens = useModeTokens();
  const size = getSize(theme);
  const radius = getRadius(theme);
  const background = modeTokens?.bg?.brand.muted ?? theme.palette.primary[50];

  const sxArray = Array.isArray(sx) ? sx : sx ? [sx] : [];

  return (
    <Box
      ref={ref}
      className={clsx('CustomAvatar', className)}
      role="img"
      aria-label={alt ?? name ?? 'User avatar'}
      sx={[
        {
          width: size,
          height: size,
          borderRadius: radius,
          backgroundColor: background,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        },
        ...sxArray,
      ]}
    >
      {src ? renderImage(src, alt ?? name) : renderFallback(theme, modeTokens, name)}
    </Box>
  );
});

export default Avatar;
