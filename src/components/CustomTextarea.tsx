import { forwardRef } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import type { CustomInputProps } from './CustomInput';
import { CustomInput } from './CustomInput';

type BaseTextareaProps = Omit<CustomInputProps, 'multiline' | 'type' | 'inputComponent'>;

export interface CustomTextareaProps extends BaseTextareaProps {
  minRows?: number;
  maxRows?: number;
}

export const CustomTextarea = forwardRef<HTMLInputElement, CustomTextareaProps>(
  ({ minRows = 4, maxRows, sx, ...rest }, ref) => {
    const baseStyles: SxProps<Theme> = {
      '&': {
        padding: (theme) => theme.spacing(2.5, 3),
      },
    };

    const sxArray = Array.isArray(sx) ? sx : sx ? [sx] : [];

    return (
      <CustomInput
        {...rest}
        ref={ref}
        multiline
        minRows={minRows}
        maxRows={maxRows}
        sx={[baseStyles, ...sxArray]}
      />
    );
  }
);

CustomTextarea.displayName = 'CustomTextarea';

export default CustomTextarea;
