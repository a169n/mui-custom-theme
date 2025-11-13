import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
  type DialogProps,
} from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button } from '../../components/Button';
import { DialogTitle } from '../../components/DialogTitle';

const dialogUsage = createUsageSnippet([
  'const [open, setOpen] = useState(false);',
  '',
  'return (',
  '  <>',
  '    <Button variant="primary" onClick={() => setOpen(true)}>',
  '      Open dialog',
  '    </Button>',
  '    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>',
  '      <DialogTitle onClose={() => setOpen(false)}>Dialog title</DialogTitle>',
  '      <DialogContent>',
  '        <Typography variant="textM">',
  '          Dialog content text goes here.',
  '        </Typography>',
  '      </DialogContent>',
  '      <DialogActions>',
  '        <Button variant="ghost" onClick={() => setOpen(false)}>',
  '          Cancel',
  '        </Button>',
  '        <Button variant="primary">Confirm</Button>',
  '      </DialogActions>',
  '    </Dialog>',
  '  </>',
  ');',
]);

const dialogProps: Partial<DialogProps> = {
  maxWidth: 'sm',
  fullWidth: true,
};

export const DialogPage = () => {
  const [withActionsOpen, setWithActionsOpen] = useState(false);
  const [basicOpen, setBasicOpen] = useState(false);

  return (
    <PageContainer
      title="Dialog"
      description="Use dialogs to capture focused decisions while keeping the user in context."
      usage={dialogUsage}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button variant="primary" onClick={() => setWithActionsOpen(true)}>
          Dialog with actions
        </Button>
        <Button variant="outline" onClick={() => setBasicOpen(true)}>
          Dialog without actions
        </Button>
      </Stack>

      <Dialog open={withActionsOpen} onClose={() => setWithActionsOpen(false)} {...dialogProps}>
        <DialogTitle onClose={() => setWithActionsOpen(false)}>Invite teammate</DialogTitle>
        <DialogContent>
          <Stack spacing={1.5}>
            <Typography variant="textM">
              Use dialogs for short forms or confirmations without leaving the current page.
            </Typography>
            <Typography variant="textM">
              Keep copy concise and focus on the primary action.
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="outline" onClick={() => setWithActionsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary">Send Invite</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={basicOpen} onClose={() => setBasicOpen(false)} {...dialogProps}>
        <DialogTitle onClose={() => setBasicOpen(false)}>Dialog without actions</DialogTitle>
        <DialogContent>
          <Typography variant="textM">
            When no actions are required, the default close icon lets the user dismiss the dialog.
          </Typography>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default DialogPage;
