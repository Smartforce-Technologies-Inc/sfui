import * as React from 'react';
import {
  RadioGroup,
  RadioGroupProps,
  FormControl,
  styled
} from '@mui/material';
import { SFFormControlBooleanLabel } from '../SFFormControlBooleanLabel/SFFormControlBooleanLabel';
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

const StyledRadioGroup = styled(RadioGroup)({
  root: {
    '&.MuiFormGroup-row': {
      gap: '20px'
    }
  }
});

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
            <SFFormControlBooleanLabel
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
