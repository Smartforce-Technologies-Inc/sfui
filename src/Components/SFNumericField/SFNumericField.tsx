import * as React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { SFTextField, SFTextFieldProps } from '../SFTextField/SFTextField';

interface NumberFormatCustomProps extends NumberFormatProps {
  allowDecimals: boolean;
  inputRef: (instance: NumberFormat | null) => void;
  name: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
}

function NumberFormatCustom({
  allowDecimals,
  onChange,
  inputRef,
  ...props
}: NumberFormatCustomProps): JSX.Element {
  return (
    <NumberFormat
      {...props}
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
  allowDecimals?: boolean;
  allowNegative?: boolean;
  numberFormatProps?: NumberFormatProps;
}

export const SFNumericField = ({
  allowDecimals = true,
  allowNegative = false,
  numberFormatProps,
  ...props
}: SFNumericFieldProps): React.ReactElement<SFNumericFieldProps> => {
  return (
    <SFTextField
      {...props}
      inputProps={{ ...numberFormatProps, allowDecimals, allowNegative }}
      InputProps={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: NumberFormatCustom as any
      }}
    />
  );
};
