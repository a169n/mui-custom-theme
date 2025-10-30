export const createUsageSnippet = (bodyLines: string[]): string =>
  [
    "import { useTheme } from '@mui/material/styles';",
    '',
    'const Example = () => {',
    '  const theme = useTheme();',
    '',
    ...bodyLines.map((line) => (line ? `  ${line}` : '')),
    '};',
  ].join('\n');
