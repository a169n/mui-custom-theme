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
    <SectionCard title="Typography" description={`Font Family: ${theme.typography.fontFamily}`}>
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
          const letterSpacing =
            typeof variantStyle === 'object' && 'letterSpacing' in variantStyle
              ? variantStyle.letterSpacing
              : undefined;

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

          let letterSpacingDisplay: string | null = null;
          if (letterSpacing !== undefined) {
            // If it's in px or rem, convert to px
            if (typeof letterSpacing === 'string') {
              if (letterSpacing.endsWith('px')) {
                letterSpacingDisplay = letterSpacing;
              } else if (letterSpacing.endsWith('rem')) {
                letterSpacingDisplay = `${Math.round(parseFloat(letterSpacing) * 16)}px`;
              } else if (/^-?\d*\.?\d+em$/.test(letterSpacing)) {
                // For em values (not converted to px, just show as is)
                letterSpacingDisplay = letterSpacing;
              } else {
                letterSpacingDisplay = letterSpacing;
              }
            } else if (typeof letterSpacing === 'number') {
              letterSpacingDisplay = `${letterSpacing}px`;
            }
          }

          return (
            <Box key={variant}>
              <Stack direction="row" spacing={2} alignItems="baseline" flexWrap="wrap">
                <Typography variant={variant} sx={{ flex: 1 }}>
                  The quick brown fox jumps over the lazy dog
                </Typography>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                {variant} / {fontSizePx != null ? `${fontSizePx}px` : String(fontSize)} /{' '}
                {fontWeight} / {lineHeightPx != null ? `${lineHeightPx}px` : String(lineHeight)}
                {letterSpacingDisplay ? ` / ${letterSpacingDisplay}` : ''}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </SectionCard>
  );
};

export default TypographySection;
