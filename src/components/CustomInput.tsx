import { forwardRef, useMemo, type ReactNode } from 'react';
import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  type OutlinedInputProps,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export interface CustomInputProps
  extends Omit<OutlinedInputProps, 'label' | 'startAdornment' | 'endAdornment'> {
  label: ReactNode;
  actionText?: ReactNode;
  description?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
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

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    { label, actionText, description, startIcon, endIcon, fullWidth, ...rest },
    ref,
  ) => {
    const theme = useTheme();
    const { error, disabled, id, ...inputProps } = rest;

    const labelId = useMemo(() => (id ? `${id}-label` : undefined), [id]);

    const startAdornment = startIcon ? (
      <InputAdornment
        position="start"
        sx={{
          gap: theme.spacing(2),
          mr: theme.spacing(2),
          alignItems: 'center',
          '& svg': { fontSize: 20 },
        }}
      >
        {startIcon}
      </InputAdornment>
    ) : undefined;

    const endAdornment = endIcon ? (
      <InputAdornment
        position="end"
        sx={{
          gap: theme.spacing(2),
          ml: theme.spacing(2),
          alignItems: 'center',
          '& svg': { fontSize: 20 },
        }}
      >
        {endIcon}
      </InputAdornment>
    ) : undefined;

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
          {...inputProps}
        />
        {renderCaption(description, theme.palette.text.secondary)}
      </FormControl>
    );
  },
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
