import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconMoon, IconSun } from '@tabler/icons-react';
import type { MouseEvent } from 'react';
import { useThemeMode } from '../theme/ThemeModeProvider';

const ModeToggle = () => {
  const { mode, setMode } = useThemeMode();
  const theme = useTheme();

  const handleChange = (_event: MouseEvent<HTMLElement>, value: 'light' | 'dark' | null) => {
    if (value) {
      setMode(value);
    }
  };

  const tokens = theme.tokens?.modes?.[mode];
  const borderColor = tokens?.border?.muted ?? theme.palette.divider;
  const selectedBg = tokens?.bg?.brand ?? theme.palette.primary.main;
  const selectedColor = tokens?.text?.light ?? theme.palette.common.white;
  const unselectedColor = tokens?.text?.muted ?? theme.palette.text.secondary;
  const hoverBg = theme.palette.alpha.black[90];

  return (
    <ToggleButtonGroup
      exclusive
      color="standard"
      size="small"
      value={mode}
      onChange={handleChange}
      sx={{
        borderRadius: 999,
        backgroundColor: tokens?.bg?.muted ?? theme.palette.background.paper,
        border: '1px solid',
        borderColor,
        p: 0.5,
        '& .MuiToggleButton-root': {
          border: 'none',
          borderRadius: 999,
          px: 1.5,
          color: unselectedColor,
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: 0.75,
          '&:hover': {
            backgroundColor: hoverBg,
          },
          '&.Mui-selected': {
            backgroundColor: selectedBg,
            color: selectedColor,
            '&:hover': {
              backgroundColor: selectedBg,
            },
          },
        },
      }}
    >
      <ToggleButton value="light" aria-label="Switch to light mode" disableRipple>
        <IconSun size={16} />
        Light
      </ToggleButton>
      <ToggleButton value="dark" aria-label="Switch to dark mode" disableRipple>
        <IconMoon size={16} />
        Dark
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ModeToggle;
