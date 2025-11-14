import type { KeyboardEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { alpha, SxProps, Theme, useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import {
  IconAlertTriangleFilled,
  IconCircleCheckFilled,
  IconCircleFilled,
  IconCircleXFilled,
} from '@tabler/icons-react';

export type StepperVariant = 'line' | 'bullets' | 'numbers';
export type StepperAlignment = 'horizontal' | 'vertical';
export type StepStatus = 'default' | 'active' | 'done' | 'warning' | 'fail';

export interface StepDefinition {
  id?: string | number;
  title: string;
  optionalText?: string;
  status?: StepStatus;
}

export interface StepperProps {
  steps: StepDefinition[];
  variant?: StepperVariant;
  alignment?: StepperAlignment;
  amount?: number;
  onStepClick?: (index: number) => void;
  sx?: SxProps<Theme>;
  className?: string;
}

const statusIcons: Record<StepStatus, typeof IconCircleFilled> = {
  default: IconCircleFilled,
  active: IconCircleFilled,
  done: IconCircleCheckFilled,
  warning: IconAlertTriangleFilled,
  fail: IconCircleXFilled,
};

export const Stepper = ({
  steps,
  variant = 'line',
  alignment = 'horizontal',
  amount,
  onStepClick,
  className,
  sx,
}: StepperProps) => {
  const theme = useTheme();
  const modeTokens = theme.tokens?.modes?.[theme.palette.mode];
  const textDefault = modeTokens?.text?.default ?? theme.palette.text.primary;
  const textMuted = modeTokens?.text?.muted ?? theme.palette.text.secondary;
  const textLight = modeTokens?.text?.light ?? theme.palette.common.white;
  const surface = modeTokens?.bg?.default ?? theme.palette.background.paper;
  const mutedBackground = modeTokens?.bg?.muted ?? theme.palette.action.hover;
  const borderDefault = modeTokens?.border?.default ?? theme.palette.divider;
  const borderBrand = modeTokens?.border?.brand ?? theme.palette.primary.main;
  const brandBg = modeTokens?.bg?.brand?.default ?? theme.palette.primary.main;
  const brandMuted = modeTokens?.bg?.brand?.muted ?? alpha(brandBg, 0.15);
  const positiveBg = modeTokens?.bg?.positive?.default ?? theme.palette.success.main;
  const warningBg = modeTokens?.bg?.warning?.default ?? theme.palette.warning.main;
  const negativeBg = modeTokens?.bg?.negative?.default ?? theme.palette.error.main;

  const totalSteps = amount ?? steps.length;

  const normalizedSteps: (StepDefinition & { status: StepStatus })[] = Array.from(
    { length: totalSteps },
    (_, index) => {
      const current = steps[index];
      if (current) {
        return {
          ...current,
          status: current.status ?? 'default',
        };
      }

      return {
        title: `Step ${index + 1}`,
        status: 'default' as StepStatus,
      };
    }
  );

  const getStatusTokens = (status: StepStatus) => {
    const base = {
      accent: borderDefault,
      fill: surface,
      icon: textDefault,
      label: textDefault,
      connectorOpacity: 0.5,
      dotBorder: borderDefault,
      dotFill: surface,
      numberBg: mutedBackground,
      numberText: textDefault,
    };

    switch (status) {
      case 'active':
        return {
          ...base,
          accent: borderBrand,
          fill: brandMuted,
          icon: borderBrand,
          connectorOpacity: 1,
          dotBorder: borderBrand,
          numberBg: brandBg,
          numberText: textLight,
        };
      case 'done':
        return {
          ...base,
          accent: positiveBg,
          fill: positiveBg,
          icon: textLight,
          connectorOpacity: 1,
          dotBorder: positiveBg,
          dotFill: positiveBg,
          numberBg: positiveBg,
          numberText: textLight,
        };
      case 'warning':
        return {
          ...base,
          accent: warningBg,
          fill: warningBg,
          icon: modeTokens?.text?.dark ?? theme.palette.common.black,
          connectorOpacity: 1,
          dotBorder: warningBg,
          dotFill: warningBg,
          numberBg: warningBg,
          numberText: modeTokens?.text?.dark ?? theme.palette.common.black,
        };
      case 'fail':
        return {
          ...base,
          accent: negativeBg,
          fill: negativeBg,
          icon: textLight,
          connectorOpacity: 1,
          dotBorder: negativeBg,
          dotFill: negativeBg,
          numberBg: negativeBg,
          numberText: textLight,
        };
      default:
        return {
          ...base,
          dotBorder: borderDefault,
          dotFill: surface,
          numberBg: mutedBackground,
          numberText: textDefault,
        };
    }
  };

  const isHorizontal = alignment === 'horizontal';
  const isLineVariant = variant === 'line';
  const indicatorSize = 24;

  const sxArray = Array.isArray(sx) ? sx : sx ? [sx] : [];

  const containerStyles = {
    display: 'flex',
    flexDirection: isHorizontal ? 'row' : 'column',
    alignItems: isHorizontal ? 'stretch' : 'flex-start',
    gap: isLineVariant ? 0 : theme.spacing(isHorizontal ? 3 : 3),
    width: '100%',
    flexWrap: !isLineVariant && isHorizontal ? 'wrap' : 'nowrap',
  } as const;

  const handleKeyDown = (index: number) => (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onStepClick) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onStepClick(index);
    }
  };

  const renderBadgeContent = (
    status: StepStatus,
    index: number,
    statusTokens: ReturnType<typeof getStatusTokens>
  ) => {
    if (variant === 'bullets') {
      return null;
    }

    if (variant === 'numbers') {
      if (status === 'done' || status === 'warning' || status === 'fail') {
        const IconComponent = statusIcons[status];
        return (
          <IconComponent
            size={indicatorSize - 4}
            stroke={0}
            color={statusTokens.numberText}
          />
        );
      }

      return (
        <Typography
          variant="subtitle"
          component="span"
          sx={{
            color: statusTokens.numberText,
            fontWeight:
              status === 'active'
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
          }}
        >
          {index + 1}
        </Typography>
      );
    }

    const IconComponent = statusIcons[status];
    return <IconComponent size={indicatorSize - 4} stroke={0} color={statusTokens.icon} />;
  };

  const renderLineBadge = (status: StepStatus, index: number, lastIndex: number) => {
    const statusTokens = getStatusTokens(status);
    const connectorColor = statusTokens.accent;
    const connectorOpacity = statusTokens.connectorOpacity;

    const connectorBase = {
      content: '""',
      position: 'absolute',
      backgroundColor: connectorColor,
      opacity: connectorOpacity,
      zIndex: 0,
    } as const;

    const beforeStyles = isHorizontal
      ? {
          ...connectorBase,
          left: 0,
          right: '50%',
          height: 2,
          top: '50%',
          transform: 'translateY(-50%)',
        }
      : {
          ...connectorBase,
          top: 0,
          bottom: '50%',
          width: 2,
          left: '50%',
          transform: 'translateX(-50%)',
        };

    const afterStyles = isHorizontal
      ? {
          ...connectorBase,
          left: '50%',
          right: 0,
          height: 2,
          top: '50%',
          transform: 'translateY(-50%)',
        }
      : {
          ...connectorBase,
          top: '50%',
          bottom: 0,
          width: 2,
          left: '50%',
          transform: 'translateX(-50%)',
        };

    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isHorizontal ? '100%' : indicatorSize,
          height: indicatorSize,
          minHeight: indicatorSize,
          flexShrink: 0,
          alignSelf: isHorizontal ? 'stretch' : 'flex-start',
          '&::before': index !== 0 ? beforeStyles : undefined,
          '&::after': index !== lastIndex ? afterStyles : undefined,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: indicatorSize,
            height: indicatorSize,
            borderRadius: '50%',
            border: `2px solid ${statusTokens.accent}`,
            backgroundColor: statusTokens.fill,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderBadgeContent(status, index, statusTokens)}
        </Box>
      </Box>
    );
  };

  const renderCompactBadge = (status: StepStatus, index: number) => {
    const statusTokens = getStatusTokens(status);

    if (variant === 'bullets') {
      return (
        <Box
          sx={{
            width: indicatorSize,
            height: indicatorSize,
            borderRadius: '50%',
            border: `2px solid ${statusTokens.dotBorder}`,
            backgroundColor: statusTokens.dotFill,
          }}
        />
      );
    }

    return (
      <Box
        sx={{
          width: indicatorSize,
          height: indicatorSize,
          borderRadius: '50%',
          border: `2px solid ${statusTokens.accent}`,
          backgroundColor: statusTokens.numberBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {renderBadgeContent(status, index, statusTokens)}
      </Box>
    );
  };

  return (
    <Box
      className={clsx(
        'CustomStepper',
        `CustomStepper--${variant}`,
        `CustomStepper--${alignment}`,
        className
      )}
      sx={[containerStyles, ...sxArray]}
    >
      {normalizedSteps.map((step, index) => {
        const status = step.status ?? 'default';
        const statusTokens = getStatusTokens(status);
        const key = step.id ?? `${step.title}-${index}`;
        const lastIndex = normalizedSteps.length - 1;
        const isClickable = Boolean(onStepClick);

        return (
          <Box
            key={key}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onClick={isClickable ? () => onStepClick?.(index) : undefined}
            onKeyDown={handleKeyDown(index)}
            sx={{
              flex: isHorizontal ? '1 1 0' : 'initial',
              minWidth: isHorizontal && !isLineVariant ? 160 : 'auto',
              display: 'flex',
              flexDirection: isHorizontal ? 'column' : 'row',
              alignItems: isHorizontal ? 'stretch' : 'flex-start',
              gap: theme.spacing(isHorizontal ? 1.5 : 2),
              cursor: isClickable ? 'pointer' : 'default',
            }}
          >
            {isLineVariant
              ? renderLineBadge(status, index, lastIndex)
              : renderCompactBadge(status, index)}

            <Box
              sx={{
                textAlign: isHorizontal ? 'center' : 'left',
                marginTop: isHorizontal ? theme.spacing(1) : 0,
                paddingX: isLineVariant && isHorizontal ? theme.spacing(1) : 0,
              }}
            >
              <Typography
                variant="subtitle"
                component="span"
                sx={{
                  display: 'block',
                  color: statusTokens.label,
                  fontWeight: theme.typography.fontWeightRegular,
                }}
              >
                {step.title}
              </Typography>
              {step.optionalText ? (
                <Typography variant="textS" color={textMuted} component="span">
                  {step.optionalText}
                </Typography>
              ) : null}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Stepper;
