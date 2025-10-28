import type { DesignTokens } from './tokens';

declare module '@mui/material/styles' {
  interface Theme {
    tokens: DesignTokens;
  }

  interface ThemeOptions {
    tokens?: DesignTokens;
  }
}
