import { Tooltip } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button } from '../../components/Button';

const tooltipUsage = createUsageSnippet([
  'return (',
  '  <Tooltip',
  '    title="Info"',
  '    componentsProps={{',
  '      tooltip: { sx: { bgcolor: theme.palette.grey[900], color: theme.palette.common.white } },',
  '    }}',
  '  >',
  '    <Button>Hover</Button>',
  '  </Tooltip>',
  ');',
]);

export const TooltipPage = () => (
  <PageContainer
    title="Tooltip"
    description="Tooltips provide contextual hints on hover."
    usage={tooltipUsage}
  >
    <Tooltip title="Tooltip message">
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  </PageContainer>
);

export default TooltipPage;
