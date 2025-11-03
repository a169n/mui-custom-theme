import {
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react';
import {
  ButtonBase,
  Box,
  Divider,
  FormControl,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  type OutlinedInputProps,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconChevronDown } from '@tabler/icons-react';

export interface CustomInputProps
  extends Omit<OutlinedInputProps, 'label' | 'startAdornment' | 'endAdornment'> {
  label: ReactNode;
  actionText?: ReactNode;
  description?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  leadingAddon?: boolean;
  trailingAddon?: boolean;
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

const ADORNMENT_ITEM_CLASS = 'CustomInput-adornmentItem';
const ADORNMENT_ICON_CLASS = 'CustomInput-adornmentIcon';
const ADORNMENT_CURRENCY_CLASS = 'CustomInput-currencyAddon';

const CURRENCY_OPTIONS = ['KZT', 'RU', 'USD'];

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      label,
      actionText,
      description,
      startIcon,
      endIcon,
      leadingAddon,
      trailingAddon,
      fullWidth,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const { error, disabled, id, ...inputProps } = rest;

    const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_OPTIONS[0]);
    const [currencyMenuAnchor, setCurrencyMenuAnchor] = useState<HTMLElement | null>(null);

    const generatedId = useId();
    const labelId = useMemo(() => (id ? `${id}-label` : `${generatedId}-label`), [generatedId, id]);
    const currencyMenuId = useMemo(
      () => (id ? `${id}-currency-menu` : `${generatedId}-currency-menu`),
      [generatedId, id]
    );

    const handleOpenCurrencyMenu = (event: MouseEvent<HTMLElement>) => {
      setCurrencyMenuAnchor(event.currentTarget);
    };

    const handleCloseCurrencyMenu = () => {
      setCurrencyMenuAnchor(null);
    };

    const handleSelectCurrency = (currency: string) => {
      setSelectedCurrency(currency);
      handleCloseCurrencyMenu();
    };

    useEffect(() => {
      if (disabled && currencyMenuAnchor) {
        handleCloseCurrencyMenu();
      }
    }, [currencyMenuAnchor, disabled]);

    const renderCurrencyAddon = () => (
      <ButtonBase
        className={`${ADORNMENT_ITEM_CLASS} ${ADORNMENT_CURRENCY_CLASS}`}
        onClick={handleOpenCurrencyMenu}
        disableRipple
        sx={{
          borderRadius: theme.shape.borderRadius,
          textAlign: 'left',
          color: theme.palette.text.primary,
          '&.Mui-disabled': {
            color: theme.palette.text.disabled,
          },
        }}
        aria-haspopup="listbox"
        aria-expanded={currencyMenuAnchor ? 'true' : undefined}
        aria-controls={currencyMenuAnchor ? currencyMenuId : undefined}
        disabled={disabled}
      >
        <IconChevronDown size={16} stroke={1.5} />
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2" color="inherit">
          {selectedCurrency}
        </Typography>
      </ButtonBase>
    );

    const hasStartContent = Boolean(startIcon);
    const hasEndContent = Boolean(endIcon);

    return (
      <FormControl
        variant="outlined"
        fullWidth={fullWidth}
        error={error}
        disabled={disabled}
        sx={{
          display: 'flex',
          gap: theme.spacing(2),
          width: fullWidth ? '100%' : undefined,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={theme.spacing(2)}
          id={labelId}
        >
          {renderCaption(label, theme.palette.text.primary)}
          {renderCaption(actionText, theme.palette.text.secondary)}
        </Box>
        <OutlinedInput
          fullWidth={fullWidth}
          inputRef={ref}
          error={error}
          disabled={disabled}
          startAdornment={startIcon}
          endAdornment={endIcon}
          aria-labelledby={labelId}
          sx={{
            gap: theme.spacing(2),
            '& .MuiOutlinedInput-input': {
              paddingY: theme.spacing(2.5),
              paddingLeft: hasStartContent ? 0 : theme.spacing(3),
              paddingRight: hasEndContent ? 0 : theme.spacing(3),
            },
            '&.MuiInputBase-adornedStart': { cursor: 'pointer', pl: theme.spacing(3) },
            '&.MuiInputBase-adornedEnd': { pr: theme.spacing(3) },
            '& .MuiDivider-root': {
              borderColor: theme.palette.divider,
            },
          }}
          {...inputProps}
        />
        {leadingAddon || trailingAddon ? (
          <Menu
            id={currencyMenuId}
            anchorEl={currencyMenuAnchor}
            open={Boolean(currencyMenuAnchor)}
            onClose={handleCloseCurrencyMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            MenuListProps={{ role: 'listbox' }}
          >
            {CURRENCY_OPTIONS.map((option) => (
              <MenuItem
                key={option}
                selected={option === selectedCurrency}
                onClick={() => handleSelectCurrency(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        ) : null}
        {renderCaption(description, theme.palette.text.secondary)}
      </FormControl>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
