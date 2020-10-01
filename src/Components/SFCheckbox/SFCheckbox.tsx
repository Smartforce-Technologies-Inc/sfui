import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import { SFGrey } from '../../SFColors/SFColors';
import { SFFormControlLabel } from '../SFFormControlLabel/SFFormControlLabel';

const StyledCheckbox = withStyles((theme: Theme) => ({
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
}))(Checkbox);

export interface SFCheckboxProps extends CheckboxProps {
  label?: string;
}

export const SFCheckbox = ({
  disableRipple = true,
  color,
  label,
  ...props
}: SFCheckboxProps): React.ReactElement<SFCheckboxProps> => {
  color = 'primary';
  return (
    <FormControl>
      <SFFormControlLabel
        control={
          <StyledCheckbox
            color={color}
            disableRipple={disableRipple}
            {...props}
          />
        }
        label={label}
      />
    </FormControl>
  );
};
