import { Menu, MenuItem, Typography } from '@mui/material';

export interface CustomInputCurrencyMenuProps {
  menuId: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

export const CustomInputCurrencyMenu = ({
  menuId,
  anchorEl,
  open,
  onClose,
  options,
  selectedOption,
  onSelectOption,
}: CustomInputCurrencyMenuProps) => (
  <Menu
    id={menuId}
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    slotProps={{
      paper: {
        sx: (theme) => ({
          mt: 1,
          p: theme.spacing(1),
          borderRadius: `${theme.tokens.theme.radius.md}px`,
        }),
      },
    }}
    MenuListProps={{ role: 'listbox', sx: { p: 1 } }}
  >
    {options.map((option) => (
      <MenuItem
        key={option}
        selected={option === selectedOption}
        onClick={() => onSelectOption(option)}
        sx={(theme) => {
          const highlightColor = theme.palette.alpha.black[100];

          return {
            p: theme.spacing(2),
            borderRadius: `${theme.tokens.theme.radius.md}px`,
            '&:hover': {
              backgroundColor: highlightColor,
            },
            '&.Mui-selected': {
              backgroundColor: highlightColor,
            },
            '&.Mui-selected:hover': {
              backgroundColor: highlightColor,
            },
            '& .MuiTypography-root': { ...theme.typography.caption },
          };
        }}
      >
        <Typography variant="caption">{option}</Typography>
      </MenuItem>
    ))}
  </Menu>
);

export default CustomInputCurrencyMenu;
