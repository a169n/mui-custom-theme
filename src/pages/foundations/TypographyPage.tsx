import { Divider, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { ComponentProps } from 'react';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import PageContainer from '../PageContainer';

type TypographyVariant = NonNullable<ComponentProps<typeof Typography>['variant']>;

const typographyVariants: TypographyVariant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'overline',
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

const TypographyPage = () => {
  const theme = useTheme();
  const monospaceFont =
    theme.tokens?.theme.font['font-mono'] ??
    "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";

  return (
    <PageContainer
      title="Typography"
      description="Examples of the typography scale provided by the theme."
      usage={typographyUsage}
    >
      <Stack spacing={3}>
        {typographyVariants.map((variant, index) => {
          const variantStyles = theme.typography[variant];
          const detailItems = [
            { label: 'Font size', value: variantStyles?.fontSize },
            { label: 'Font weight', value: variantStyles?.fontWeight },
            { label: 'Line height', value: variantStyles?.lineHeight },
            { label: 'Letter spacing', value: variantStyles?.letterSpacing },
          ];

          return (
            <Stack key={variant} spacing={1.5}>
              <Typography variant="button" color="text.secondary" textTransform="uppercase">
                {variant}
              </Typography>
              <Typography variant={variant as any}>
                The quick brown fox jumps over the lazy dog.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                {detailItems.map(({ label, value }) => (
                  <Stack key={label} spacing={0.5}>
                    <Typography variant="caption" color="text.secondary" textTransform="uppercase">
                      {label}
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: monospaceFont }}>
                      {formatTypographyValue(value)}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              {index < typographyVariants.length - 1 ? <Divider /> : null}
            </Stack>
          );
        })}
      </Stack>
    </PageContainer>
  );
};

export default TypographyPage;
