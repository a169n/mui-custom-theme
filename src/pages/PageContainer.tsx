import { Paper, Stack, Typography } from '@mui/material';
import type { PropsWithChildren, ReactNode } from 'react';

interface PageContainerProps extends PropsWithChildren {
  title: string;
  description?: ReactNode;
}

const PageContainer = ({ title, description, children }: PageContainerProps) => (
  <Stack spacing={3}>
    <Stack spacing={1}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      {description ? (
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      ) : null}
    </Stack>
    <Paper elevation={0} variant="outlined" sx={{ p: 4, borderRadius: 3 }}>
      {children}
    </Paper>
  </Stack>
);

export default PageContainer;
