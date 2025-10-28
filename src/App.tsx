import { Box, Stack, Typography } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        px: 2,
      }}
    >
      <Stack spacing={2} textAlign="center">
        <Typography variant="h3" component="h1">
          MUI Custom Theme
        </Typography>
        <Typography variant="body1">
          Start building your design system with Material UI.
        </Typography>
      </Stack>
    </Box>
  );
}

export default App;
