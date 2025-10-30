import { Box, Stack, Typography, useTheme } from '@mui/material';
import type { TypographyProps } from '@mui/material/Typography';
import SectionCard from './SectionCard';

const typographyVariants: Array<TypographyProps['variant']> = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'title',
  'subtitle',
  'text2xl',
  'textXl',
  'textL',
  'textM',
  'textS',
  'textXs',
  'caption',
  'button',
  'overline',
];

const TypographySection = () => {
  const theme = useTheme();

  return (
    <SectionCard
      title="Typography"
      description="Preview each theme variant and inspect size, weight, and line-height values."
    >
      <Stack spacing={2}>
        {typographyVariants.map((variant) => {
          const variantStyle = theme.typography[variant];
          const fontSize =
            typeof variantStyle === 'object' && 'fontSize' in variantStyle
              ? variantStyle.fontSize
              : 'inherit';
          const fontWeight =
            typeof variantStyle === 'object' && 'fontWeight' in variantStyle
              ? variantStyle.fontWeight
              : 'inherit';
          const lineHeight =
            typeof variantStyle === 'object' && 'lineHeight' in variantStyle
              ? variantStyle.lineHeight
              : 'inherit';

          const toPx = (val: unknown): number | null => {
            if (typeof val === 'number') return val;
            if (typeof val !== 'string') return null;
            const trimmed = val.trim();
            if (trimmed.endsWith('px')) return parseFloat(trimmed);
            if (trimmed.endsWith('rem')) return Math.round(parseFloat(trimmed) * 16);
            const n = Number(trimmed);
            return Number.isNaN(n) ? null : n;
          };

          const fontSizePx = toPx(fontSize);
          let lineHeightPx: number | null = null;
          if (typeof lineHeight === 'number') {
            lineHeightPx = fontSizePx != null ? Math.round(lineHeight * fontSizePx) : null;
          } else {
            lineHeightPx = toPx(lineHeight);
          }

          return (
            <Box key={variant}>
              <Stack direction="row" spacing={2} alignItems="baseline" flexWrap="wrap">
                <Typography
                  variant="overline"
                  color="text.secondary"
                  sx={{ minWidth: 120, fontFamily: 'monospace' }}
                >
                  {variant}
                </Typography>
                <Typography variant={variant} sx={{ flex: 1 }}>
                  The quick brown fox jumps over the lazy dog
                </Typography>
              </Stack>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontFamily: 'monospace', ml: 2 }}
              >
                {fontSizePx != null ? `${fontSizePx}px` : String(fontSize)} / {fontWeight} /{' '}
                {lineHeightPx != null ? `${lineHeightPx}px` : String(lineHeight)}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </SectionCard>
  );
};

export default TypographySection;
