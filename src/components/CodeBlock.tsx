import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CodeBlockProps {
  readonly code: string;
  readonly title?: string;
}

const CodeBlock = ({ code, title = 'Usage example' }: CodeBlockProps) => {
  const theme = useTheme();
  const modeTokens = theme.tokens?.modes?.[theme.palette.mode];
  const usageFont =
    modeTokens?.font['font-sans'] ?? theme.typography?.fontFamily ?? 'Roboto, sans-serif';

  return (
    <Stack spacing={1}>
      {title ? (
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
      ) : null}
      <Box
        component="pre"
        sx={{
          m: 0,
          px: 2,
          py: 1.5,
          borderRadius: 2,
          bgcolor: 'background.default',
          border: '1px solid',
          borderColor: 'divider',
          overflowX: 'auto',
          fontFamily: usageFont,
          fontSize: '0.875rem',
          lineHeight: 1.6,
          color: 'text.primary',
          whiteSpace: 'pre-wrap',
        }}
      >
        {code}
      </Box>
    </Stack>
  );
};

export default CodeBlock;
