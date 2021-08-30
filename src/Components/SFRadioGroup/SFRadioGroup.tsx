import * as React from 'react';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { SFFormControlLabelBoolean } from '../SFFormControlLabelBoolean/SFFormControlLabelBoolean';
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
}

const StyledRadioGroup = withStyles({
  root: {
    '&.MuiFormGroup-row': {
      gap: '20px'
    }
  }
})(RadioGroup);

export const SFRadioGroup = ({
  label,
  options,
  ...props
}: SFRadioGroupProps): React.ReactElement<SFRadioGroupProps> => {
  return (
    <FormControl>
      <label>{label}</label>
      <StyledRadioGroup {...props} color='primary'>
        {options.map((opt, i) => {
          return (
            <SFFormControlLabelBoolean
              key={`${opt.value}${i}`}
              value={opt.value}
              control={<SFRadio isGroup />}
              label={opt.label}
              disabled={opt.disabled}
            />
          );
        })}
      </StyledRadioGroup>
    </FormControl>
  );
};
