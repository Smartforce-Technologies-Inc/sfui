import React from 'react';
import {
  LocalizationProvider,
  TimePicker,
  TimePickerProps
} from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { SFTextField, SFTextFieldProps } from '../SFTextField/SFTextField';

export interface SFTimeFieldProps extends Omit<TimePickerProps, 'renderInput'> {
  placeholder?: string;
  helperText?: string;
  error?: boolean;
}

export const SFTimeField = ({
  placeholder = '08:00',
  error = false,
  helperText = '',
  ...props
}: SFTimeFieldProps): React.ReactElement<SFTimeFieldProps> => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <TimePicker
        {...props}
        disableOpenPicker
        showToolbar={false}
        disableMaskedInput={false}
        mask='__:__ _M'
        inputFormat='HH:MM A'
        renderInput={(props): React.ReactElement<SFTextFieldProps> => (
          <SFTextField
            {...props}
            fullWidth
            variant='outlined'
            helperText={helperText}
            error={error}
            inputProps={{ ...props.inputProps, placeholder }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
