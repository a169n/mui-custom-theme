import { Card, CardContent, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface SectionCardProps {
  readonly title: string;
  readonly description?: string;
  readonly children: ReactNode;
}

const SectionCard = ({ title, description, children }: SectionCardProps) => (
  <Card variant="outlined">
    <CardContent>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h5">{title}</Typography>
          {description ? (
            <Typography variant="textM" color="text.secondary">
              {description}
            </Typography>
          ) : null}
        </Stack>
        {children}
      </Stack>
    </CardContent>
  </Card>
);

export default SectionCard;
