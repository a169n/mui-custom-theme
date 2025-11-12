import { Box, Stack, Tooltip } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button } from '../../components/Button';

const tooltipUsage = createUsageSnippet([
  'return (',
  '  <Tooltip title="Tooltip message" placement="top">',
  '    <Button variant="outline">Hover me</Button>',
  '  </Tooltip>',
  ');',
]);

const tooltipVariants = [
  { label: 'TopCenter', placement: 'top' as const },
  { label: 'BottomCenter', placement: 'bottom' as const },
  { label: 'BottomLeft', placement: 'bottom-start' as const },
  { label: 'BottomRight', placement: 'bottom-end' as const },
  { label: 'Left', placement: 'left' as const },
  { label: 'Right', placement: 'right' as const },
  { label: 'TopLeft', placement: 'top-start' as const },
  { label: 'TopRight', placement: 'top-end' as const },
];

export const TooltipPage = () => (
  <PageContainer
    title="Tooltip"
    description="Tooltips provide contextual hints on hover."
    usage={tooltipUsage}
  >
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
        gap: 2,
      }}
    >
      {tooltipVariants.map((variant) => (
        <Tooltip
          key={variant.label}
          title={`${variant.label} tooltip`}
          placement={variant.placement}
        >
          <Button variant="outline" fullWidth>
            {variant.label}
          </Button>
        </Tooltip>
      ))}
    </Box>
  </PageContainer>
);

export default TooltipPage;
