import { Box, Container, Typography } from '@mui/material';
import ThemeShowcase from './components/ThemeShowcase';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom>
          MUI Custom Theme
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Use the showcase below to verify design tokens mapped into the palette and typography system.
        </Typography>
        <ThemeShowcase />
      </Container>
    </Box>
  );
}

export default App;
