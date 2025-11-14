import { useEffect, useMemo, useState } from 'react';
import { Box, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import {
  StepDefinition,
  StepStatus,
  Stepper,
  StepperAlignment,
  StepperVariant,
} from '../../components/Stepper';
import { Button } from '../../components/Button';
import CustomSelect from '../../components/CustomSelect';

const stepperUsage = createUsageSnippet([
  'const steps = [',
  "  { title: 'Step 1', status: 'done' },",
  "  { title: 'Step 2', status: 'active' },",
  "  { title: 'Step 3', status: 'default', optionalText: 'Optional' },",
  '];',
  '',
  'return (',
  '  <Stepper',
  '    steps={steps}',
  '    variant="line"',
  '    alignment="horizontal"',
  '    amount={steps.length}',
  '  />',
  ');',
]);

const statusNames: StepStatus[] = ['default', 'active', 'done', 'warning', 'fail'];
const variantOptions: StepperVariant[] = ['line', 'bullets', 'numbers'];
const alignmentOptions: StepperAlignment[] = ['horizontal', 'vertical'];
const stepOptions = [2, 3, 4, 5, 6];
const defaultStepCount = 4;

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const variantSelectOptions = variantOptions.map((value) => ({
  label: capitalize(value),
  value,
}));

const alignmentSelectOptions = alignmentOptions.map((value) => ({
  label: capitalize(value),
  value,
}));

const amountSelectOptions = stepOptions.map((count) => ({
  label: `${count} steps`,
  value: String(count),
}));

const statusSelectOptions = statusNames.map((value) => ({
  label: capitalize(value),
  value,
}));

export const StepperPage = () => {
  const [variant, setVariant] = useState<StepperVariant>('numbers');
  const [alignment, setAlignment] = useState<StepperAlignment>('vertical');
  const [amount, setAmount] = useState(defaultStepCount);
  const [activeStep, setActiveStep] = useState(0);
  const [showOptional, setShowOptional] = useState(true);
  const [statusPicker, setStatusPicker] = useState<StepStatus>('default');
  const [stepStatuses, setStepStatuses] = useState<StepStatus[]>(() =>
    Array.from({ length: defaultStepCount }, (_, index) => (index === 0 ? 'active' : 'default'))
  );

  useEffect(() => {
    setStepStatuses((prev) => {
      if (amount > prev.length) {
        return [
          ...prev,
          ...Array.from({ length: amount - prev.length }, () => 'default' as StepStatus),
        ];
      }
      return prev.slice(0, amount);
    });
  }, [amount]);

  useEffect(() => {
    if (activeStep > amount - 1) {
      setActiveStep(Math.max(amount - 1, 0));
    }
  }, [activeStep, amount]);

  useEffect(() => {
    setStatusPicker(stepStatuses[activeStep] ?? 'default');
  }, [activeStep, stepStatuses]);

  const steps = useMemo<StepDefinition[]>(
    () =>
      Array.from({ length: amount }, (_, index) => ({
        title: `Step ${index + 1}`,
        optionalText: showOptional && index % 2 === 1 ? 'Optional' : undefined,
        status: stepStatuses[index] ?? 'default',
      })),
    [amount, showOptional, stepStatuses]
  );

  const goToStep = (nextIndex: number) => {
    setActiveStep(nextIndex);
    setStepStatuses((prev) => {
      const next = [...prev];
      for (let i = 0; i < amount; i += 1) {
        if (i < nextIndex) {
          next[i] = 'done';
        } else if (i === nextIndex) {
          next[i] = 'active';
        } else {
          next[i] = 'default';
        }
      }
      return next;
    });
  };

  const handleVariantChange = (value: string | string[]) => {
    if (Array.isArray(value)) return;
    setVariant(value as StepperVariant);
  };

  const handleAmountChange = (value: string | string[]) => {
    if (Array.isArray(value)) return;
    const nextAmount = Number(value);
    if (Number.isNaN(nextAmount)) return;
    setAmount(nextAmount);
    if (nextAmount - 1 < activeStep) {
      setActiveStep(nextAmount - 1);
    }
  };

  const handleStatusChange = (value: string | string[]) => {
    if (Array.isArray(value)) return;
    const newStatus = value as StepStatus;
    setStatusPicker(newStatus);
    setStepStatuses((prev) =>
      prev.map((status, index) => (index === activeStep ? newStatus : status))
    );
  };

  const handleAlignmentChange = (value: string | string[]) => {
    if (Array.isArray(value)) return;
    setAlignment(value as StepperAlignment);
  };

  const handleNext = () => {
    if (activeStep >= amount - 1) return;
    goToStep(activeStep + 1);
  };

  const handlePrevious = () => {
    if (activeStep <= 0) return;
    goToStep(activeStep - 1);
  };

  return (
    <PageContainer
      title="Stepper"
      description="Custom multi-type stepper with horizontal & vertical layouts, optional labels, and all state icons."
      usage={stepperUsage}
    >
      <Stack spacing={6}>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ borderBottom: '2px solid', borderColor: 'divider', pb: 1, mb: 3 }}
          >
            Stepper constructor
          </Typography>

          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} flexWrap="wrap" useFlexGap>
              <CustomSelect
                label="Type"
                options={variantSelectOptions}
                value={variant}
                onChange={handleVariantChange}
                search={false}
              />
              <CustomSelect
                label="Steps"
                options={amountSelectOptions}
                value={String(amount)}
                onChange={handleAmountChange}
                search={false}
              />
              <CustomSelect
                label="Alignment"
                options={alignmentSelectOptions}
                value={alignment}
                onChange={handleAlignmentChange}
                search={false}
              />
              <CustomSelect
                label="Set current step status"
                options={statusSelectOptions}
                value={statusPicker}
                onChange={handleStatusChange}
                search={false}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showOptional}
                    onChange={(event) => setShowOptional(event.target.checked)}
                  />
                }
                label="Show optional text"
              />
            </Stack>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              justifyContent="space-between"
              flexWrap="wrap"
              useFlexGap
            >
              <Stack direction="row" spacing={2}>
                <Button
                  variant="secondary"
                  tone="default"
                  onClick={handlePrevious}
                  disabled={activeStep === 0}
                >
                  Previous
                </Button>
                <Button
                  variant="primary"
                  tone="default"
                  onClick={handleNext}
                  disabled={activeStep >= amount - 1}
                >
                  Next
                </Button>
              </Stack>
            </Stack>

            <Box
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                p: 3,
                bgcolor: 'background.paper',
              }}
            >
              <Stepper
                steps={steps}
                variant={variant}
                alignment={alignment}
                amount={amount}
                onStepClick={goToStep}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </PageContainer>
  );
};

export default StepperPage;
