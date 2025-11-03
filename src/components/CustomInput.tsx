import {
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react';
import {
  Box,
  ButtonBase,
  FormControl,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  type OutlinedInputProps,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconSelector } from '@tabler/icons-react';

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
    const [addonSide, setAddonSide] = useState<'start' | 'end' | null>(null);
    const startAddonRef = useRef<HTMLDivElement | null>(null);
    const endAddonRef = useRef<HTMLDivElement | null>(null);
    const inputContainerRef = useRef<HTMLDivElement | null>(null);

    const generatedId = useId();
    const labelId = useMemo(() => (id ? `${id}-label` : `${generatedId}-label`), [generatedId, id]);
    const currencyMenuId = useMemo(
      () => (id ? `${id}-currency-menu` : `${generatedId}-currency-menu`),
      [generatedId, id]
    );

    const handleOpenCurrencyMenu = (_event: MouseEvent<HTMLElement>, side: 'start' | 'end') => {
      setAddonSide(side);
      setCurrencyMenuAnchor(inputContainerRef.current);
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

    const CurrencyAddon = ({ side }: { side: 'start' | 'end' }) => (
      <ButtonBase
        className={`${ADORNMENT_ITEM_CLASS} ${ADORNMENT_CURRENCY_CLASS}`}
        onClick={(e) => handleOpenCurrencyMenu(e, side)}
        disableRipple
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 0,
          color: theme.palette.text.primary,
          borderRightColor: theme.palette.divider,
          height: '100%',
          '&.Mui-disabled': {
            color: theme.palette.text.disabled,
          },
        }}
        aria-haspopup="listbox"
        aria-expanded={currencyMenuAnchor ? 'true' : undefined}
        aria-controls={currencyMenuAnchor ? currencyMenuId : undefined}
        disabled={disabled}
      >
        <IconSelector size={16} />
        <Typography variant="caption">{selectedCurrency}</Typography>
      </ButtonBase>
    );

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
        {/* Build adornments so addon and icons can co-exist */}
        {(() => {
          // start adornment element
          const startAdornmentEl =
            leadingAddon || startIcon ? (
              <InputAdornment position="start" sx={{ mr: 0 }} ref={startAddonRef}>
                {leadingAddon ? <CurrencyAddon side="start" /> : null}
                {startIcon}
              </InputAdornment>
            ) : undefined;

          // end adornment element
          const endAdornmentEl =
            trailingAddon || endIcon ? (
              <InputAdornment position="end" sx={{ ml: 0 }} ref={endAddonRef}>
                {endIcon}
                {trailingAddon ? <CurrencyAddon side="end" /> : null}
              </InputAdornment>
            ) : undefined;

          return (
            <Box ref={inputContainerRef}>
              <OutlinedInput
                fullWidth={fullWidth}
                inputRef={ref}
                error={error}
                disabled={disabled}
                startAdornment={startAdornmentEl}
                endAdornment={endAdornmentEl}
                aria-labelledby={labelId}
                {...inputProps}
              />
            </Box>
          );
        })()}
        {leadingAddon || trailingAddon ? (
          <Menu
            id={currencyMenuId}
            anchorEl={currencyMenuAnchor}
            open={Boolean(currencyMenuAnchor)}
            onClose={handleCloseCurrencyMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            slotProps={{
              paper: {
                sx: (theme) => ({
                  mt: 1,
                  p: 1,
                  borderRadius: `${theme.tokens.theme.radius.md}px`,
                }),
              },
            }}
            MenuListProps={{ role: 'listbox', sx: { p: 1 } }}
          >
            {CURRENCY_OPTIONS.map((option) => (
              <MenuItem
                key={option}
                selected={option === selectedCurrency}
                onClick={() => handleSelectCurrency(option)}
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
                    // optional: caption default
                    '& .MuiTypography-root': { ...theme.typography.caption },
                  };
                }}
              >
                <Typography variant="caption">{option}</Typography>
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
