import { Divider, Stack, Typography } from '@mui/material';
import type { ComponentProps } from 'react';
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

const TypographyPage = () => (
  <PageContainer
    title="Typography"
    description="Examples of the typography scale provided by the theme."
  >
    <Stack spacing={3}>
      {typographyVariants.map((variant) => (
        <Stack key={variant} spacing={1}>
          <Typography variant="button" color="text.secondary" textTransform="uppercase">
            {variant}
          </Typography>
          <Typography variant={variant as any}>
            The quick brown fox jumps over the lazy dog.
          </Typography>
          <Divider />
        </Stack>
      ))}
    </Stack>
  </PageContainer>
);

export default TypographyPage;
