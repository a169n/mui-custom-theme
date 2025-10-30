import { useState } from 'react';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';
import { Button } from '../../components/Button';

const modalsUsage = createUsageSnippet([
  'return (',
  '  <Box',
  '    sx={{',
  '      bgcolor: theme.palette.background.paper,',
  '      boxShadow: theme.shadows[6],',
  '      borderRadius: theme.shape.borderRadius * 2,',
  '    }}',
  '  />',
  ');',
]);

export const ModalsDialogsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <PageContainer
      title="Modal & Dialog"
      description="Overlay components for confirming actions."
      usage={modalsUsage}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open modal
        </Button>
        <Button variant="outline" onClick={() => setDialogOpen(true)}>
          Open dialog
        </Button>
      </Stack>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            width: 320,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Use modals to focus attention on a single task.
          </Typography>
          <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 3 }}>
            <Button onClick={() => setModalOpen(false)}>Close</Button>
          </Stack>
        </Box>
      </Modal>
      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary">
            Dialogs are ideal for confirming actions with supporting text.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setDialogOpen(false)}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default ModalsDialogsPage;
