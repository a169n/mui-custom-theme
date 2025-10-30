import { Step, StepLabel, Stepper } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const stepperUsage = createUsageSnippet([
  'return (',
  '  <Stepper',
  '    sx={{',
  "      '& .MuiStepIcon-root.Mui-active': { color: theme.palette.primary.main },",
  '    }}',
  '  >',
  '    {/* steps */}',
  '  </Stepper>',
  ');',
]);

export const StepperPage = () => (
  <PageContainer
    title="Stepper"
    description="Guide users through multi-step flows."
    usage={stepperUsage}
  >
    <Stepper activeStep={1} alternativeLabel>
      {['Select plan', 'Billing details', 'Review'].map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </PageContainer>
);

export default StepperPage;
