import type { KeyboardEvent } from 'react';
import { Box, Step, StepLabel, Stepper as MuiStepper, Typography } from '@mui/material';
import type { StepIconProps } from '@mui/material/StepIcon';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import { IconCheck, IconCircleFilled, IconExclamationMark, IconX } from '@tabler/icons-react';
import { useModeTokens } from '../theme/useModeTokens';

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
  default: null,
  active: null,
  done: IconCheck,
  warning: IconExclamationMark,
  fail: IconX,
};
const INDICATOR_SIZE = 24;
const HORIZONTAL_STEP_GAP = 60;
const VERTICAL_STEP_GAP = 30;

export const Stepper = ({
  steps,
  variant = 'numbers',
  alignment = 'horizontal',
  amount,
  onStepClick,
  className,
  sx,
}: StepperProps) => {
  const theme = useTheme();
  const modeTokens = useModeTokens();
  const isHorizontal = alignment === 'horizontal';
  const verticalLineColor = modeTokens?.border?.default ?? theme.palette.divider;
  const iconRadius = INDICATOR_SIZE / 2;

  // For vertical orientation we fall back from "line" to "bullets"
  const visualVariant: StepperVariant =
    alignment === 'vertical' && variant === 'line' ? 'bullets' : variant;

  const totalSteps = amount ?? steps.length;
  const indicatorSize = INDICATOR_SIZE;
  const connectorElement = isHorizontal ? undefined : null;

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

  const verticalWrapperSx = !isHorizontal
    ? {
        position: 'relative',
        display: 'block',
        '&::before': {
          content: normalizedSteps.length > 1 ? '""' : 'none',
          position: 'absolute',
          top: `${iconRadius}px`,
          left: iconRadius,
          width: '1px',
          backgroundColor: verticalLineColor,
          zIndex: 0,
          // Calculate height based on steps and gaps
          height: `calc(100% - ${INDICATOR_SIZE + VERTICAL_STEP_GAP}px)`,
        },
      }
    : undefined;

  const getStatusTokens = (status: StepStatus) => {
    const base = {
      accent: modeTokens?.border?.default,
      fill: modeTokens?.bg?.default,
      icon: modeTokens?.text?.default,
      label: modeTokens?.text?.default,
      numberBg: modeTokens?.bg?.default,
      numberText: modeTokens?.text?.default,
      dotBorder: modeTokens?.border?.default,
      dotFill: modeTokens?.bg?.default,
    };

    switch (status) {
      case 'active':
        return {
          ...base,
          accent: modeTokens?.border?.brand,
          fill: modeTokens?.bg?.brand?.muted,
          icon: modeTokens?.border?.brand,
          numberBg: modeTokens?.bg?.brand?.default,
          numberText: modeTokens?.text?.light,
        };
      case 'done':
        return {
          ...base,
          accent: modeTokens?.bg?.positive?.default,
          fill: modeTokens?.bg?.positive?.default,
          icon: modeTokens?.text?.light,
          numberBg: modeTokens?.bg?.positive?.default,
          numberText: modeTokens?.text?.light,
          dotFill: modeTokens?.bg?.positive?.default,
        };
      case 'warning':
        return {
          ...base,
          accent: modeTokens?.bg?.warning?.default,
          fill: modeTokens?.bg?.warning?.default,
          icon: modeTokens?.text?.dark,
          numberBg: modeTokens?.bg?.warning?.default,
          numberText: modeTokens?.text?.dark,
          dotFill: modeTokens?.bg?.warning?.default,
        };
      case 'fail':
        return {
          ...base,
          accent: modeTokens?.bg?.negative?.default,
          fill: modeTokens?.bg?.negative?.default,
          icon: modeTokens?.text?.light,
          numberBg: modeTokens?.bg?.negative?.default,
          numberText: modeTokens?.text?.light,
          dotFill: modeTokens?.bg?.negative?.default,
        };
      default:
        return base;
    }
  };

  const sxArray = Array.isArray(sx) ? sx : sx ? [sx] : [];
  const spacingStyles = isHorizontal
    ? {
        '& .MuiStepConnector-root': {
          flex: `0 0 ${HORIZONTAL_STEP_GAP}px`,
        },
      }
    : {
        '& .MuiStep-root:not(:last-of-type)': {
          marginBottom: `${VERTICAL_STEP_GAP}px`,
        },
      };
  const baseStepperSx = [spacingStyles, ...sxArray];
  const stepperSx = !isHorizontal
    ? [{ position: 'relative', zIndex: 1 }, ...baseStepperSx]
    : baseStepperSx;

  const handleKeyDown = (index: number) => (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onStepClick) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onStepClick(index);
    }
  };

  const createStepIconComponent = (status: StepStatus) => {
    const StepIconComponent = ({ icon, className }: StepIconProps) => {
      const statusTokens = getStatusTokens(status);
      const IconComponent = statusIcons[status];

      if (visualVariant === 'line') {
        // Only used for horizontal
        return <Box className={className} aria-hidden />;
      }

      // numbers and bullets
      const showIcon = status === 'done' || status === 'warning' || status === 'fail';
      return (
        <Box
          className={className}
          sx={{
            width: indicatorSize,
            height: indicatorSize,
            borderRadius: '50%',
            border: `1px solid ${statusTokens.accent}`,
            backgroundColor: visualVariant == 'bullets' ? modeTokens.bg.default : statusTokens.numberBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {showIcon ? (
            <IconComponent size={16} stroke={1.5} color={modeTokens.icon.light} />
          ) : (
            <Typography
              variant="subtitle2"
              component="span"
              sx={{
                color: statusTokens.numberText,
                fontWeight: status === 'active' ? theme.typography.fontWeightMedium : undefined,
              }}
            >
              {visualVariant !== 'bullets' && icon}
            </Typography>
          )}
        </Box>
      );
    };

    StepIconComponent.displayName = 'CustomStepIcon';
    return StepIconComponent;
  };

  // Active step derivation
  const activeIndex = normalizedSteps.findIndex((step) => step.status === 'active');
  const fallbackActiveIndex = normalizedSteps.findIndex((step) => step.status !== 'done');
  const activeStep =
    activeIndex !== -1
      ? activeIndex
      : fallbackActiveIndex !== -1
        ? fallbackActiveIndex
        : Math.max(normalizedSteps.length - 1, 0);

  const stepperContent = (
    <MuiStepper
      className={clsx(
        'CustomStepper',
        `CustomStepper--${variant}`,
        `CustomStepper--${alignment}`,
        className
      )}
      alternativeLabel={alignment === 'horizontal'}
      orientation={alignment}
      activeStep={activeStep}
      connector={connectorElement}
      nonLinear={Boolean(onStepClick)}
      sx={stepperSx}
    >
      {normalizedSteps.map((step, index) => {
        const status = step.status ?? 'default';
        const statusTokens = getStatusTokens(status);
        const key = step.id ?? `${step.title}-${index}`;
        const StepIconComponent = createStepIconComponent(status);
        const isClickable = Boolean(onStepClick);

        return (
          <Step key={key} completed={status === 'done'}>
            <StepLabel
              StepIconComponent={StepIconComponent}
              error={status === 'fail'}
              optional={
                step.optionalText ? (
                  <Typography variant="caption" color={modeTokens?.text?.muted}>
                    {step.optionalText}
                  </Typography>
                ) : undefined
              }
              onClick={isClickable ? () => onStepClick?.(index) : undefined}
              onKeyDown={isClickable ? handleKeyDown(index) : undefined}
              tabIndex={isClickable ? 0 : undefined}
              sx={{
                cursor: isClickable ? 'pointer' : 'default',
                '& .MuiStepLabel-label': {
                  color: statusTokens.label,
                  textAlign: isHorizontal ? 'center' : 'left',
                  fontWeight:
                    status === 'active'
                      ? theme.typography.fontWeightMedium
                      : theme.typography.fontWeightRegular,
                },
              }}
            >
              {step.title}
            </StepLabel>
          </Step>
        );
      })}
    </MuiStepper>
  );

  if (isHorizontal) {
    return stepperContent;
  }

  return <Box sx={verticalWrapperSx}>{stepperContent}</Box>;
};

export default Stepper;
