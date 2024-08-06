import * as React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { SFTextField, SFTextFieldProps } from '../SFTextField/SFTextField';

interface NumberFormatCustomProps extends NumberFormatProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  allowDecimals: boolean;
}

function NumberFormatCustom(props: NumberFormatCustomProps): JSX.Element {
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
              name: props.name || '',
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
  allowNegative?: boolean;
}

export const SFNumericField = ({
  numberFormatProps,
  allowDecimals = true,
  allowNegative = false,
  inputProps,
  ...props
}: SFNumericFieldProps): React.ReactElement<SFNumericFieldProps> => {
  return (
    <SFTextField
      {...props}
      InputProps={{
        inputComponent: NumberFormatCustom as any,
        inputProps: {
          ...numberFormatProps,
          'aria-label': inputProps?.['aria-label'] || props.label,
          allowDecimals,
          allowNegative
        }
      }}
    />
  );
};
