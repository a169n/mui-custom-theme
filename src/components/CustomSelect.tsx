import {
  forwardRef,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  Box,
  ButtonBase,
  Divider,
  FormControl,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useControlled } from '@mui/material/utils';
import {
  IconChevronDown,
  IconSearch,
  IconSquareRounded,
  IconSquareRoundedCheckFilled,
} from '@tabler/icons-react';

export interface CustomSelectOption {
  label: string;
  value: string;
}

export interface CustomSelectProps {
  label: ReactNode;
  actionText?: ReactNode;
  description?: ReactNode;
  placeholder?: ReactNode;
  options: CustomSelectOption[];
  multiple?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  fullWidth?: boolean;
  showAllSelected?: boolean;
  forceFocus?: boolean;
}

const renderCaption = (value: ReactNode, color: string) => {
  if (!value) {
    return null;
  }

  if (typeof value === 'string') {
    return (
      <Typography variant="caption" color={color} component="span">
        {value}
      </Typography>
    );
  }

  return value;
};

const getDefaultValue = (multiple?: boolean) => {
  if (multiple) {
    return [] as string[];
  }

  return '';
};

const formatMultipleValue = (values: CustomSelectOption[]) => {
  if (values.length === 0) {
    return '';
  }

  if (values.length <= 2) {
    return values.map((option) => option.label).join(', ');
  }

  const visible = values.slice(0, 2).map((option) => option.label);
  const remainingCount = values.length - 2;

  return `${visible.join(', ')}, … +${remainingCount}`;
};

export const CustomSelect = forwardRef<HTMLButtonElement, CustomSelectProps>(
  (
    {
      label,
      actionText,
      description,
      placeholder = 'Select an option',
      options,
      multiple = false,
      value: valueProp,
      defaultValue,
      onChange,
      disabled,
      error,
      id,
      fullWidth,
      showAllSelected = false,
      forceFocus = false,
    },
    ref
  ) => {
    const theme = useTheme();
    const modeTokens = theme.tokens.modes[theme.palette.mode];

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useImperativeHandle(ref, () => buttonRef.current);

    const [value, setValue] = useControlled<string | string[]>({
      controlled: valueProp,
      default: defaultValue ?? getDefaultValue(multiple),
      name: 'CustomSelect',
      state: 'value',
    });

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [focused, setFocused] = useState(false);

    const generatedId = useId();
    const labelId = useMemo(() => (id ? `${id}-label` : `${generatedId}-label`), [generatedId, id]);

    const descriptionId = useMemo(
      () => (id ? `${id}-description` : `${generatedId}-description`),
      [generatedId, id]
    );

    const listboxId = useMemo(
      () => (id ? `${id}-listbox` : `${generatedId}-listbox`),
      [generatedId, id]
    );

    const open = Boolean(anchorEl);

    const selectedOptions = useMemo(() => {
      if (multiple) {
        const selectedValues = Array.isArray(value)
          ? value
          : typeof value === 'string' && value
            ? [value]
            : [];

        return options.filter((option) => selectedValues.includes(option.value));
      }

      const selectedValue = typeof value === 'string' ? value : '';
      const selectedOption = options.find((option) => option.value === selectedValue);

      return selectedOption ? [selectedOption] : [];
    }, [multiple, options, value]);

    const displayValue = useMemo(() => {
      if (multiple) {
        if (showAllSelected) {
          return selectedOptions.map((option) => option.label).join(', ');
        }

        return formatMultipleValue(selectedOptions);
      }

      return selectedOptions[0]?.label ?? '';
    }, [multiple, selectedOptions, showAllSelected]);

    const openMenu = (element: HTMLElement) => {
      if (disabled) {
        return;
      }

      setAnchorEl(element);
      setFocused(true);
    };

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
      openMenu(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
      setFocused(false);
      setSearchTerm('');
    };

    const handleSelect = (option: CustomSelectOption) => {
      if (multiple) {
        const selectedValues = Array.isArray(value) ? [...value] : [];
        const index = selectedValues.indexOf(option.value);

        if (index === -1) {
          selectedValues.push(option.value);
        } else {
          selectedValues.splice(index, 1);
        }

        setValue(selectedValues);
        onChange?.(selectedValues);
      } else {
        setValue(option.value);
        onChange?.(option.value);
        handleClose();
      }
    };

    const handleButtonBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
      if (
        anchorEl &&
        event.relatedTarget instanceof Node &&
        anchorEl.contains(event.relatedTarget)
      ) {
        setFocused(false);
        return;
      }

      if (!open) {
        setFocused(false);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) {
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (buttonRef.current) {
          openMenu(buttonRef.current);
        }
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (buttonRef.current) {
          openMenu(buttonRef.current);
        }
      }
    };

    const filteredOptions = useMemo(() => {
      if (!searchTerm) {
        return options;
      }

      const lowerSearch = searchTerm.toLowerCase();

      return options.filter((option) => option.label.toLowerCase().includes(lowerSearch));
    }, [options, searchTerm]);

    const isFilled = multiple ? selectedOptions.length > 0 : Boolean(selectedOptions[0]?.value);

    const renderBaseContent = () => {
      if (!displayValue) {
        if (typeof placeholder === 'string') {
          return (
            <Typography
              variant="caption"
              color={modeTokens.text.muted}
              sx={{ whiteSpace: showAllSelected ? 'normal' : 'nowrap' }}
            >
              {placeholder}
            </Typography>
          );
        }

        return placeholder;
      }

      return (
        <Typography
          variant="caption"
          color={disabled ? modeTokens.text.muted : modeTokens.text.default}
          sx={{
            overflow: 'hidden',
            textOverflow: showAllSelected ? 'clip' : 'ellipsis',
            whiteSpace: showAllSelected ? 'normal' : 'nowrap',
          }}
        >
          {displayValue}
        </Typography>
      );
    };

    const isFocused = focused || forceFocus;

    const buttonBorderColor = () => {
      if (error) {
        return modeTokens.border.negative;
      }

      if (isFocused) {
        return modeTokens.border.brand;
      }

      if (!isFilled) {
        return modeTokens.border.default;
      }

      return modeTokens.border.default;
    };

    const focusShadow = error ? modeTokens.custom.destructive : modeTokens.custom.focused;
    const defaultSelectMinWidth = 200;
    const defaultSelectMaxWidth = 320;

    return (
      <FormControl
        fullWidth={fullWidth}
        error={error}
        disabled={disabled}
        sx={{
          width: fullWidth ? '100%' : 'fit-content',
          minWidth: fullWidth ? '100%' : defaultSelectMinWidth,
          maxWidth: fullWidth ? '100%' : defaultSelectMaxWidth,
          display: 'flex',
          gap: theme.spacing(2),
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={theme.spacing(2)}
          id={labelId}
        >
          {renderCaption(label, modeTokens.text.default)}
          {renderCaption(actionText, modeTokens.text.muted)}
        </Box>

        <ButtonBase
          ref={buttonRef}
          id={id}
          type="button"
          onClick={handleOpen}
          onFocus={() => setFocused(true)}
          onBlur={handleButtonBlur}
          role="combobox"
          aria-expanded={open ? 'true' : 'false'}
          aria-haspopup="listbox"
          aria-labelledby={labelId}
          aria-describedby={description ? descriptionId : undefined}
          aria-controls={open ? listboxId : undefined}
          disabled={disabled}
          disableRipple
          onKeyDown={handleKeyDown}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(2),
            px: theme.spacing(2),
            py: 0,
            height: 36,
            maxHeight: 36,
            minHeight: 36,
            borderRadius: `${theme.tokens.theme.radius.lg}px`,
            border: `1px solid ${buttonBorderColor()}`,
            backgroundColor: modeTokens.bg.default,
            width: fullWidth ? '100%' : 'fit-content',
            minWidth: fullWidth ? '100%' : defaultSelectMinWidth,
            maxWidth: fullWidth ? '100%' : defaultSelectMaxWidth,
            textAlign: 'left',
            position: 'relative',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            cursor: disabled ? 'not-allowed' : 'pointer',
            boxShadow: isFocused ? `0 0 0 4px ${focusShadow}` : 'none',
            '&:hover': {
              borderColor: error ? modeTokens.border.negative : modeTokens.border.brand,
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              overflow: 'hidden',
              color: disabled ? modeTokens.text.muted : modeTokens.text.default,
              gap: showAllSelected ? theme.spacing(1) : 0,
            }}
          >
            {renderBaseContent()}
          </Box>
          <IconChevronDown size={20} color={modeTokens.icon.muted} />
        </ButtonBase>

        {description ? (
          <Typography id={descriptionId} variant="caption" color={modeTokens.icon.muted}>
            {description}
          </Typography>
        ) : null}

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          slotProps={{
            paper: {
              sx: {
                mt: 1,
                width: anchorEl?.clientWidth,
                borderRadius: `${theme.tokens.theme.radius.xl}px`,
                p: theme.spacing(2),
                boxShadow: theme.tokens.theme.shadow.black[2],
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              },
            },
          }}
        >
          <TextField
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size={16} color={modeTokens.icon.muted} />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            sx={{
              '& .MuiInputBase-root': {
                padding: 0,
                alignItems: 'center',
                height: 36,
                minHeight: 36,
              },
              '& .MuiInputBase-input': {
                padding: theme.spacing(0, 2),
                height: 36,
                lineHeight: '36px',
              },
            }}
          />

          <Divider
            sx={{
              width: `calc(100% + ${theme.spacing(4)})`,
              height: '1px',
              backgroundColor: theme.palette.divider,
              mx: -2,
              my: 0,
            }}
          />

          <Box
            id={listboxId}
            role="listbox"
            aria-multiselectable={multiple ? 'true' : undefined}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(1),
              maxHeight: 220,
              overflowY: 'auto',
            }}
          >
            {filteredOptions.length === 0 ? (
              <Typography
                variant="body2"
                color={modeTokens.text.muted}
                sx={{ px: theme.spacing(1) }}
              >
                No options found
              </Typography>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = selectedOptions.some(
                  (selectedOption) => selectedOption.value === option.value
                );

                return (
                  <MenuItem
                    key={option.value}
                    selected={isSelected}
                    onClick={() => handleSelect(option)}
                    disableRipple
                    sx={{
                      borderRadius: `${theme.tokens.theme.radius.xl}px`,
                      px: theme.spacing(2),
                      py: theme.spacing(1.5),
                      display: 'flex',
                      gap: multiple ? theme.spacing(2) : 0,
                      alignItems: 'center',
                      transition: 'background-color 0.2s ease',
                      '&:hover': {
                        backgroundColor: modeTokens.bg.muted,
                      },
                      '&.Mui-selected': {
                        backgroundColor: modeTokens.bg.muted,
                      },
                      '&.Mui-selected:hover': {
                        backgroundColor: modeTokens.bg.muted,
                      },
                    }}
                  >
                    {multiple ? (
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          color: isSelected ? modeTokens.icon.brand : modeTokens.icon.muted,
                        }}
                      >
                        {isSelected ? (
                          <IconSquareRoundedCheckFilled
                            size={16}
                            fill={modeTokens.icon.brand}
                            color={modeTokens.icon.brand}
                          />
                        ) : (
                          <IconSquareRounded size={16} color={modeTokens.icon.muted} />
                        )}
                      </ListItemIcon>
                    ) : null}
                    <ListItemText
                      primary={option.label}
                      sx={{ my: 0 }}
                      primaryTypographyProps={{
                        variant: 'caption',
                        color: isSelected ? modeTokens.text.brand : modeTokens.text.default,
                      }}
                    />
                  </MenuItem>
                );
              })
            )}
          </Box>
        </Popover>
      </FormControl>
    );
  }
);

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
