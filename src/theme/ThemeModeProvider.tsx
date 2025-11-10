import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme, { darkTheme } from '.';

type ThemeMode = 'light' | 'dark';

interface ThemeModeContextValue {
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
  readonly toggleMode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

interface ThemeModeProviderProps {
  readonly children: ReactNode;
  readonly defaultMode?: ThemeMode;
}

export const ThemeModeProvider = ({ children, defaultMode = 'light' }: ThemeModeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  const contextValue = useMemo(
    () => ({
      mode,
      setMode,
      toggleMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [mode]
  );

  const currentTheme = useMemo(() => (mode === 'light' ? theme : darkTheme), [mode]);

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            '.tabler-icon': {
              color: theme.tokens.modes[theme.palette.mode].icon.muted,
            },
            'input::-webkit-input-placeholder, textarea::-webkit-input-placeholder, .MuiInputBase-input::-webkit-input-placeholder':
              {
                color: `${
                  theme.tokens.modes[theme.palette.mode]?.text.muted ?? theme.palette.text.secondary
                } !important`,
                opacity: 1,
              },
          })}
        />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};

export default ThemeModeProvider;
