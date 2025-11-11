import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
  IconX,
} from '@tabler/icons-react';
import { Button } from './Button';
import { IconButton } from './IconButton';

export type AlertVariant = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  title: string;
  description?: ReactNode;
  variant?: AlertVariant;
  showActions?: boolean;
  closeButton?: boolean;
  onClose?: () => void;
  primaryActionLabel?: ReactNode;
  secondaryActionLabel?: ReactNode;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  sx?: SxProps<Theme>;
  className?: string;
}

const renderVariantIcon = (variant: AlertVariant, color: string) => {
  const iconProps = { size: 20, stroke: 1.5, color } as const;

  switch (variant) {
    case 'success':
      return <IconCircleCheck {...iconProps} />;
    case 'error':
      return <IconExclamationCircle {...iconProps} />;
    case 'warning':
      return <IconAlertTriangle {...iconProps} />;
    default:
      return <IconInfoCircle {...iconProps} />;
  }
};

const getVariantIconColor = (
  variant: AlertVariant,
  theme: Theme,
  modeTokens?: Theme['tokens']['modes'][Theme['palette']['mode']]
) => {
  const paletteIcon = theme.palette.icon;
  const tokenIcon = modeTokens?.icon;

  const resolve = (key: keyof typeof paletteIcon) => paletteIcon?.[key] ?? tokenIcon?.[key];

  switch (variant) {
    case 'success':
      return resolve('positive') ?? theme.palette.success.main;
    case 'error':
      return resolve('negative') ?? theme.palette.error.main;
    case 'warning':
      return resolve('warning') ?? theme.palette.warning.main;
    default:
      return resolve('brand') ?? theme.palette.info.main;
  }
};

export const Alert = ({
  title,
  description,
  variant = 'info',
  showActions = false,
  closeButton = true,
  onClose,
  primaryActionLabel = 'Primary action',
  secondaryActionLabel = 'Secondary action',
  onPrimaryAction,
  onSecondaryAction,
  sx,
  className,
}: AlertProps) => {
  const theme = useTheme();
  const modeTokens = theme.tokens?.modes?.[theme.palette.mode];
  const iconColor = getVariantIconColor(variant, theme, modeTokens);

  const baseRadius =
    modeTokens?.radius?.xl ?? theme.tokens?.primitives?.borderRadius?.['rounded-xl'];
  const sxArray = Array.isArray(sx) ? sx : sx ? [sx] : [];

  return (
    <Box
      role="alert"
      className={clsx('CustomAlert', `CustomAlert--${variant}`, className)}
      sx={[
        {
          width: 400,
          maxWidth: '100%',
          height: 'fit-content',
          display: 'flex',
          alignItems: 'flex-start',
          gap: theme.spacing(2),
          padding: theme.spacing(3),
          backgroundColor: modeTokens?.bg?.default ?? theme.palette.background.default,
          borderRadius: baseRadius ? `${baseRadius}px` : theme.shape.borderRadius,
          boxShadow: theme.shadows[6],
        },
        ...sxArray,
      ]}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 20,
          width: 20,
          flexShrink: 0,
        }}
      >
        {renderVariantIcon(variant, iconColor)}
      </Box>

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: theme.spacing(1),
            marginBottom: description ? theme.spacing(1) : 0,
          }}
        >
          <Typography
            variant="subtitle"
            component="h6"
            sx={{
              flexGrow: 1,
              color: modeTokens?.text?.default ?? theme.palette.text.primary,
            }}
          >
            {title}
          </Typography>

          {closeButton ? (
            <IconButton
              aria-label="Close alert"
              variant="ghost"
              tone="default"
              size="small"
              onClick={onClose}
              sx={{
                color: modeTokens?.icon?.muted ?? theme.palette.text.secondary,
                padding: 0,
                minWidth: 0,
                minHeight: 0,
              }}
            >
              <IconX size={20} stroke={1.5} />
            </IconButton>
          ) : null}
        </Box>

        {description ? (
          <Typography variant="textM" color={modeTokens?.text?.muted ?? 'text.secondary'}>
            {description}
          </Typography>
        ) : null}

        {showActions ? (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: theme.spacing(2),
              marginTop: description ? theme.spacing(2) : 0,
            }}
          >
            <Button
              variant="outline"
              tone="default"
              size="small"
              disableRipple
              onClick={onPrimaryAction}
            >
              {primaryActionLabel}
            </Button>
            <Button
              variant="ghost"
              tone="default"
              size="small"
              disableRipple
              onClick={onSecondaryAction}
            >
              {secondaryActionLabel}
            </Button>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Alert;
