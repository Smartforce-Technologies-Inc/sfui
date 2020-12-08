import * as React from 'react';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { SFFormControlLabel } from '../SFFormControlLabel/SFFormControlLabel';
import { SFRadio } from './SFRadio/SFRadio';

export interface SFRadioOptionsProps {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SFRadioGroupProps extends RadioGroupProps {
  label?: string;
  color?: 'default' | 'primary' | 'secondary' | undefined;
  options: SFRadioOptionsProps[];
  onChange?: (event: object) => void;
}

export const SFRadioGroup = ({
  label,
  options,
  ...props
}: SFRadioGroupProps): React.ReactElement<SFRadioGroupProps> => {
  return (
    <FormControl>
      <label>{label}</label>
      <RadioGroup {...props} color='primary'>
        {options.map((opt, i) => {
          return (
            <SFFormControlLabel
              key={`${opt.value}${i}`}
              value={opt.value}
              control={<SFRadio />}
              label={opt.label}
              disabled={opt.disabled}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
