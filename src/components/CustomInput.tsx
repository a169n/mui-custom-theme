import { forwardRef, useMemo, type ReactNode } from 'react';
import {
  Box,
  Divider,
  FormControl,
  InputAdornment,
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
    ref,
  ) => {
    const theme = useTheme();
    const { error, disabled, id, ...inputProps } = rest;

    const labelId = useMemo(() => (id ? `${id}-label` : undefined), [id]);

    const renderCurrencyAddon = () => (
      <Box className={`${ADORNMENT_ITEM_CLASS} ${ADORNMENT_CURRENCY_CLASS}`}>
        <IconChevronDown size={16} stroke={1.5} />
        <Stack
          direction="row"
          spacing={1.5}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{
            alignItems: 'center',
            '& .MuiDivider-root': {
              alignSelf: 'stretch',
            },
          }}
        >
          {CURRENCY_OPTIONS.map((option) => (
            <Typography key={option} variant="body2" color={theme.palette.text.primary}>
              {option}
            </Typography>
          ))}
        </Stack>
      </Box>
    );

    const renderAdornment = (
      position: 'start' | 'end',
      icon?: ReactNode,
      includeCurrency?: boolean,
    ) => {
      if (!icon && !includeCurrency) {
        return undefined;
      }

      return (
        <InputAdornment
          position={position}
          sx={{
            m: 0,
            p: 0,
            gap: theme.spacing(0.5),
            height: '100%',
            [`& .${ADORNMENT_ITEM_CLASS}`]: {
              display: 'inline-flex',
              alignItems: 'center',
              gap: theme.spacing(0.5),
              padding: theme.spacing(2.5, 2),
            },
            [`& .${ADORNMENT_ICON_CLASS} svg`]: {
              fontSize: 20,
            },
            [`& .${ADORNMENT_CURRENCY_CLASS}`]: {
              gap: theme.spacing(0.5),
            },
          }}
        >
          {icon ? (
            <Box className={`${ADORNMENT_ITEM_CLASS} ${ADORNMENT_ICON_CLASS}`}>{icon}</Box>
          ) : null}
          {includeCurrency ? renderCurrencyAddon() : null}
        </InputAdornment>
      );
    };

    const startAdornment = renderAdornment('start', startIcon, leadingAddon);
    const endAdornment = renderAdornment('end', endIcon, trailingAddon);

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
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          aria-labelledby={labelId}
          sx={{
            '& .MuiOutlinedInput-input': {
              padding: theme.spacing(2.5, 3),
            },
            '& .MuiInputAdornment-root': {
              margin: 0,
            },
          }}
          {...inputProps}
        />
        {renderCaption(description, theme.palette.text.secondary)}
      </FormControl>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
