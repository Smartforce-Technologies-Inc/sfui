import * as React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { SFTextField, SFTextFieldProps } from '../SFTextField/SFTextField';

function getNumberFormat(
  allowDecimals: boolean,
  numberProps?: NumberFormatProps
) {
  return function (inputProps: any): JSX.Element {
    const { inputRef, onChange, ...other } = inputProps;
    const pattern = '[0-9]*';

    return (
      <NumberFormat
        {...numberProps}
        {...other}
        decimalScale={!allowDecimals ? 0 : undefined}
        pattern={allowDecimals ? undefined : pattern}
        getInputRef={inputRef}
        onValueChange={(values): void => {
          onChange({
            target: {
              name: inputProps.name,
              value: values.value
            }
          });
        }}
      />
    );
  };
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
  const NumberFormatCustom = getNumberFormat(allowDecimals, numberFormatProps);

  return (
    <SFTextField
      {...props}
      InputProps={{
        inputComponent: NumberFormatCustom
      }}
    />
  );
};
