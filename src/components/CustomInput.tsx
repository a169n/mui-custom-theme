import {
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';
import {
  Box,
  ButtonBase,
  FormControl,
  InputAdornment,
  OutlinedInput,
  type OutlinedInputProps,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconSelector } from '@tabler/icons-react';
import { CustomInputCurrencyMenu } from './CustomInputCurrencyMenu';

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
    const [currencyMenuPlacement, setCurrencyMenuPlacement] = useState<'leading' | 'trailing'>(
      'leading'
    );

    const leadingAddonRef = useRef<HTMLButtonElement | null>(null);
    const trailingAddonRef = useRef<HTMLButtonElement | null>(null);

    const generatedId = useId();
    const labelId = useMemo(() => (id ? `${id}-label` : `${generatedId}-label`), [generatedId, id]);
    const currencyMenuId = useMemo(
      () => (id ? `${id}-currency-menu` : `${generatedId}-currency-menu`),
      [generatedId, id]
    );

    const hasLeadingAddon = Boolean(leadingAddon && !trailingAddon);
    const hasTrailingAddon = Boolean(trailingAddon && !leadingAddon);

    const handleOpenCurrencyMenu = (placement: 'leading' | 'trailing') => () => {
      setCurrencyMenuPlacement(placement);
      const anchor = placement === 'leading' ? leadingAddonRef.current : trailingAddonRef.current;
      setCurrencyMenuAnchor(anchor);
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

    const CurrencyAddon = ({
      placement,
      buttonRef,
    }: {
      placement: 'leading' | 'trailing';
      buttonRef: RefObject<HTMLButtonElement>;
    }) => (
      <ButtonBase
        className={`${ADORNMENT_ITEM_CLASS} ${ADORNMENT_CURRENCY_CLASS}`}
        onClick={handleOpenCurrencyMenu(placement)}
        disableRipple
        ref={buttonRef}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(0.5),
          borderRadius: 0,
          color: theme.palette.text.primary,
          borderRightColor: theme.palette.divider,
          height: '100%',
          minHeight: '36px',
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
            hasLeadingAddon || startIcon ? (
              <InputAdornment
                position="start"
                sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
              >
                {hasLeadingAddon ? (
                  <CurrencyAddon placement="leading" buttonRef={leadingAddonRef} />
                ) : null}
                {hasLeadingAddon ? (
                  <Box
                    sx={{
                      width: '1px',
                      height: '100%',
                      minHeight: '40px',
                      backgroundColor: theme.palette.divider,
                      ml: theme.spacing(2),
                      mr: startIcon && theme.spacing(3),
                    }}
                  />
                ) : null}

                {startIcon}
              </InputAdornment>
            ) : undefined;

          // end adornment element
          const endAdornmentEl =
            hasTrailingAddon || endIcon ? (
              <InputAdornment
                position="end"
                sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
              >
                {endIcon}
                {trailingAddon ? (
                  <Box
                    sx={{
                      width: '1px',
                      height: '100%',
                      minHeight: '40px',
                      backgroundColor: theme.palette.divider,
                      ml: endIcon && theme.spacing(3),
                      mr: theme.spacing(2),
                    }}
                  />
                ) : null}
                {hasTrailingAddon ? (
                  <CurrencyAddon placement="trailing" buttonRef={trailingAddonRef} />
                ) : null}
              </InputAdornment>
            ) : undefined;

          return (
            <Box>
              <OutlinedInput
                size="small"
                fullWidth={fullWidth}
                inputRef={ref}
                error={error}
                disabled={disabled}
                startAdornment={startAdornmentEl}
                endAdornment={endAdornmentEl}
                aria-labelledby={labelId}
                sx={{
                  '&.MuiInputBase-adornedStart': {
                    paddingLeft: hasLeadingAddon ? theme.spacing(2) : theme.spacing(3),
                  },
                  '&.MuiInputBase-adornedEnd': {
                    paddingRight: hasTrailingAddon ? theme.spacing(2) : theme.spacing(3),
                  },
                }}
                {...inputProps}
              />
            </Box>
          );
        })()}
        {hasLeadingAddon || hasTrailingAddon ? (
          <CustomInputCurrencyMenu
            menuId={currencyMenuId}
            anchorEl={currencyMenuAnchor}
            open={Boolean(currencyMenuAnchor)}
            onClose={handleCloseCurrencyMenu}
            options={CURRENCY_OPTIONS}
            selectedOption={selectedCurrency}
            onSelectOption={handleSelectCurrency}
            placement={currencyMenuPlacement}
          />
        ) : null}
        {renderCaption(description, theme.palette.text.secondary)}
      </FormControl>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
