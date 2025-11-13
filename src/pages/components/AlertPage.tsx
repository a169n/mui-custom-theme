import { Box, Slide, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button } from '../../components/Button';
import { Alert as CustomAlert, AlertVariant } from '../../components/Alert';
import { TransitionGroup } from 'react-transition-group';

const alertUsage = createUsageSnippet([
  'return (',
  '  <Alert',
  '    variant="success"',
  '    title="Payment received"',
  '    description="Funds should appear in your account shortly."',
  '    showActions',
  '    onClose={() => console.log("dismissed")}',
  '  />',
  ');',
]);

const variants: AlertVariant[] = ['success', 'info', 'warning', 'error'];

const variantCopy: Record<
  AlertVariant,
  { title: string; description: string; showActions?: boolean }
> = {
  success: {
    title: 'All done!',
    description: 'Your request completed without any issues.',
  },
  info: {
    title: 'Heads up',
    description: 'System maintenance is scheduled for this weekend.',
    showActions: true,
  },
  warning: {
    title: 'Check settings',
    description: 'Your workspace is nearing the usage quota.',
    showActions: true,
  },
  error: {
    title: 'Something went wrong',
    description: 'We could not finish the last operation. Try again in a moment.',
  },
};

type ActiveAlert = {
  id: number;
  variant: AlertVariant;
  title: string;
  description: string;
  showActions?: boolean;
};

export const AlertPage = () => {
  const [alerts, setAlerts] = useState<ActiveAlert[]>([]);
  const counterRef = useRef(0);

  const triggerAlert = (variant: AlertVariant) => {
    counterRef.current += 1;
    const copy = variantCopy[variant];
    const nextAlert: ActiveAlert = {
      id: counterRef.current,
      variant,
      title: copy.title,
      description: copy.description,
      showActions: copy.showActions,
    };

    setAlerts((prev) => {
      const next = [...prev, nextAlert];
      return next.slice(-3);
    });
  };

  const dismissAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <PageContainer
      title="Alert"
      description="Use alerts to communicate contextual feedback."
      usage={alertUsage}
    >
      <Stack spacing={4}>
        <Stack spacing={1.5}>
          <Typography variant="subtitle1">Interactive demo</Typography>
          <Typography variant="textM" color="text.secondary">
            Fire any variant and the alert will pin itself to the top-right corner of the viewport.
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap" useFlexGap>
          {variants.map((variant) => (
            <Button
              key={variant}
              variant="secondary"
              tone="default"
              onClick={() => triggerAlert(variant)}
              disableRipple
            >
              {`Show ${variant} alert`}
            </Button>
          ))}
        </Stack>

        <Box
          sx={{
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 2,
            p: 3,
          }}
        >
          <Typography variant="textM" color="text.secondary">
            Alerts render outside of the flow so page layouts remain unaffected. Use the buttons
            above to queue up to three notifications.
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={(theme) => ({
          position: 'fixed',
          top: theme.spacing(14),
          right: theme.spacing(4),
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(2),
          zIndex: theme.zIndex.modal + 2,
          pointerEvents: 'none',
        })}
      >
        <TransitionGroup component={null}>
          {alerts.map((alert) => (
            <Slide key={alert.id} direction="left" mountOnEnter unmountOnExit timeout={250}>
              <Box sx={{ pointerEvents: 'auto' }}>
                <CustomAlert
                  variant={alert.variant}
                  title={alert.title}
                  description={alert.description}
                  showActions={alert.showActions}
                  onClose={() => dismissAlert(alert.id)}
                />
              </Box>
            </Slide>
          ))}
        </TransitionGroup>
      </Box>
    </PageContainer>
  );
};

export default AlertPage;
