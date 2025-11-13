import { Paper, Stack, Typography } from '@mui/material';
import type { PropsWithChildren, ReactNode } from 'react';
import CodeBlock from '../components/CodeBlock';

interface PageContainerProps extends PropsWithChildren {
  title: string;
  description?: ReactNode;
  usage: string;
  usageTitle?: string;
}

const PageContainer = ({
  title,
  description,
  usage,
  usageTitle = 'Usage example',
  children,
}: PageContainerProps) => (
  <Stack spacing={3}>
    <Stack spacing={1}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      {description ? (
        <Typography variant="textL" color="text.secondary">
          {description}
        </Typography>
      ) : null}
    </Stack>
    <Paper elevation={0} variant="outlined" sx={{ p: 4, borderRadius: 3 }}>
      <Stack spacing={4}>
        <CodeBlock code={usage} title={usageTitle} />
        {children}
      </Stack>
    </Paper>
  </Stack>
);

export default PageContainer;
