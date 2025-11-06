import { Menu, MenuItem, Typography } from '@mui/material';

export interface CustomInputCurrencyMenuProps {
  menuId: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
  placement: 'leading' | 'trailing';
}

export const CustomInputCurrencyMenu = ({
  menuId,
  anchorEl,
  open,
  onClose,
  options,
  selectedOption,
  onSelectOption,
  placement,
}: CustomInputCurrencyMenuProps) => {
  return (
    <Menu
      id={menuId}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom', // Position menu below the anchor
        horizontal: placement === 'trailing' ? 'right' : 'left', // Align with left or right based on placement
      }}
      transformOrigin={{
        vertical: 'top', // Menu will "grow" from the top
        horizontal: placement === 'trailing' ? 'right' : 'left', // Align the menu's transform origin
      }}
      MenuListProps={{ role: 'listbox' }}
    >
      {options.map((option) => (
        <MenuItem
          key={option}
          selected={option === selectedOption}
          onClick={() => onSelectOption(option)}
        >
          <Typography variant="caption">{option}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomInputCurrencyMenu;
