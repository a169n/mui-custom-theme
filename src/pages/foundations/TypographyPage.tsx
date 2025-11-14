import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { ComponentProps } from 'react';
import type { TypographyScale } from '../../theme/tokens';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import PageContainer from '../PageContainer';
import { useModeTokens } from '../../theme/useModeTokens';

type TypographyVariant = NonNullable<ComponentProps<typeof Typography>['variant']>;

type TypographyTokenKey = keyof TypographyScale;

const typographyVariants: Array<{ tokenKey: TypographyTokenKey; variant: TypographyVariant }> = [
  { tokenKey: 'H1', variant: 'h1' },
  { tokenKey: 'H2', variant: 'h2' },
  { tokenKey: 'H3', variant: 'h3' },
  { tokenKey: 'H4', variant: 'h4' },
  { tokenKey: 'H5', variant: 'h5' },
  { tokenKey: 'H6', variant: 'h6' },
  { tokenKey: 'Title', variant: 'title' },
  { tokenKey: 'Subtitle', variant: 'subtitle' },
  { tokenKey: 'Caption', variant: 'caption' },
  { tokenKey: 'text2xl', variant: 'text2xl' },
  { tokenKey: 'textXl', variant: 'textXl' },
  { tokenKey: 'textL', variant: 'textL' },
  { tokenKey: 'textM', variant: 'textM' },
  { tokenKey: 'textS', variant: 'textS' },
  { tokenKey: 'textXs', variant: 'textXs' },
];

const typographyUsage = createUsageSnippet([
  'const headingStyles = theme.typography.h3;',
  '',
  'return (',
  '  <Typography variant="h3" sx={{ color: theme.palette.text.primary }}>',
  '    {`Heading weight: ${headingStyles.fontWeight}`}',
  '  </Typography>',
  ');',
]);

const formatTypographyValue = (value: string | number | undefined): string => {
  if (value === undefined) {
    return '-';
  }

  if (typeof value === 'number') {
    const fixed = value.toFixed(2);
    return fixed.replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
  }

  return value;
};

const toPx = (value: string | number | undefined): string | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value === 'number') {
    return `${value}px`;
  }

  const trimmed = value.trim();
  if (trimmed.endsWith('px')) {
    return trimmed;
  }

  if (trimmed.endsWith('rem')) {
    const remValue = Number.parseFloat(trimmed.replace('rem', ''));
    if (!Number.isNaN(remValue)) {
      return `${Math.round(remValue * 16)}px`;
    }
  }

  const numericValue = Number(trimmed);
  if (!Number.isNaN(numericValue)) {
    return `${numericValue}px`;
  }

  return trimmed;
};

const formatLineHeight = (
  lineHeight: string | number | undefined,
  fallbackFontSizePx: string | undefined
): string | undefined => {
  if (typeof lineHeight === 'number' && fallbackFontSizePx) {
    const fontSizeNumber = Number.parseFloat(fallbackFontSizePx);
    if (!Number.isNaN(fontSizeNumber)) {
      return `${Math.round(lineHeight * fontSizeNumber)}px`;
    }
  }

  return toPx(lineHeight);
};

const TypographyPage = () => {
  const theme = useTheme();
  const modeTokens = useModeTokens();
  const usageFont =
    modeTokens?.font['font-sans'] ?? theme.typography?.fontFamily ?? 'Roboto, sans-serif';
  const typographyTokens = modeTokens?.typography;

  return (
    <PageContainer
      title="Typography"
      description="Examples of the typography scale provided by the theme."
      usage={typographyUsage}
    >
      <Stack spacing={3}>
        {typographyVariants.map(({ tokenKey, variant }, index) => {
          const variantStyles = theme.typography[variant];
          const token = typographyTokens?.[tokenKey];
          const fontSizePx = token
            ? `${token['font-size']}px`
            : toPx(typeof variantStyles === 'object' ? (variantStyles as any).fontSize : undefined);
          const lineHeightPx = token
            ? `${token['line-height']}px`
            : formatLineHeight(
                typeof variantStyles === 'object' ? (variantStyles as any).lineHeight : undefined,
                fontSizePx
              );
          const detailItems = [
            { label: 'Font size', value: fontSizePx },
            { label: 'Font weight', value: variantStyles?.fontWeight },
            { label: 'Line height', value: lineHeightPx },
            { label: 'Letter spacing', value: variantStyles?.letterSpacing },
          ];

          return (
            <Stack key={variant} spacing={1}>
              <Typography variant="textS" color="text.secondary">
                {tokenKey}
              </Typography>
              <Typography variant={variant}>
                The quick brown fox jumps over the lazy dog.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                {detailItems.map(({ label, value }) => (
                  <Stack key={label} spacing={0.5}>
                    <Typography variant="textXs" color="text.secondary">
                      {label}
                    </Typography>
                    <Typography variant="textS" sx={{ fontFamily: usageFont }}>
                      {formatTypographyValue(value)}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              {index < typographyVariants.length - 1 ? (
                <Box sx={{ bgcolor: 'divider', height: '1px', width: '100%' }} />
              ) : null}
            </Stack>
          );
        })}
      </Stack>
    </PageContainer>
  );
};

export default TypographyPage;
