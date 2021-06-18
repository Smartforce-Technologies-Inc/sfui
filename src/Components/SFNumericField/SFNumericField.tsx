import * as React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { SFTextField, SFTextFieldProps } from '../SFTextField/SFTextField';

function NumberFormatCustom(props: any): JSX.Element {
  const { inputRef, onChange, allowDecimals, ...other } = props;

  return (
    <NumberFormat
      {...other}
      inputMode={allowDecimals ? 'decimal' : 'numeric'}
      decimalScale={!allowDecimals ? 0 : props.decimalScale}
      pattern={allowDecimals ? undefined : '[0-9]*'}
      getInputRef={inputRef}
      onValueChange={(values): void => {
        onChange &&
          onChange({
            target: {
              name: props.name,
              value: values.value
            }
          });
      }}
    />
  );
}

export interface SFNumericFieldProps extends SFTextFieldProps {
  numberFormatProps?: NumberFormatProps;
  allowDecimals?: boolean;
}

export const SFNumericField = ({
  numberFormatProps,
  allowDecimals = true,
  ...props
}: SFNumericFieldProps): React.ReactElement<SFNumericFieldProps> => {
  return (
    <SFTextField
      {...props}
      inputProps={{ ...numberFormatProps, allowDecimals }}
      InputProps={{
        inputComponent: NumberFormatCustom
      }}
    />
  );
};
