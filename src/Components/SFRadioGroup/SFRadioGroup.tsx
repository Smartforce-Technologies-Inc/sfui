import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { SFFormControlLabel } from '../SFFormControlLabel/SFFormControlLabel';
import { SFGrey } from '../../SFColors/SFColors';

const StyledRadio = withStyles((theme: Theme) => ({
  root: {
    color: `${theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]}`
  },
  colorPrimary: {
    '&:hover': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 204, 204, 0.3)'
          : 'rgba(128, 128, 128, 0.3)'
      }`
    },
    '&:active': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 204, 204, 0.5)'
          : 'rgba(128, 128, 128, 0.2)'
      }`
    },
    '&.Mui-checked:hover': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 235, 255, 0.4)'
          : 'rgba(128, 198, 255, 0.2)'
      }`
    },
    '&.Mui-checked:active': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 235, 255, 0.6)'
          : 'rgba(128, 198, 255, 0.1)'
      }`
    },
    '&.Mui-disabled': {
      color: `${theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]}`
    }
  }
}))(Radio);

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
  defaultValue = 'female',
  color,
  label,
  options,
  ...props
}: SFRadioGroupProps): React.ReactElement<SFRadioGroupProps> => {
  color = 'primary';
  return (
    <FormControl>
      <label>{label}</label>
      <RadioGroup color={color} defaultValue={defaultValue} {...props}>
        {options.map((opt, i) => {
          return (
            <SFFormControlLabel
              key={`${opt.value}${i}`}
              value={opt.value}
              control={<StyledRadio color={color} disableRipple />}
              label={opt.label}
              disabled={opt.disabled}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
