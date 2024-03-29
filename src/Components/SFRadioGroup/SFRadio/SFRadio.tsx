import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import { SFFormControlBooleanLabel } from '../../SFFormControlBooleanLabel/SFFormControlBooleanLabel';
import { SFGrey } from '../../../SFColors/SFColors';

const StyledRadio = withStyles((theme: Theme) => ({
  root: {
    color: `${theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]}`
  },
  colorPrimary: {
    '&:hover': {
      '@media (hover: hover)': {
        backgroundColor: `${
          theme.palette.type === 'light'
            ? 'rgba(204, 204, 204, 0.3)'
            : 'rgba(128, 128, 128, 0.3)'
        }`
      }
    },
    '&:active': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 204, 204, 0.5)'
          : 'rgba(128, 128, 128, 0.2)'
      }`
    },
    '&.Mui-checked:hover': {
      '@media (hover: hover)': {
        backgroundColor: `${
          theme.palette.type === 'light'
            ? 'rgba(204, 235, 255, 0.4)'
            : 'rgba(128, 198, 255, 0.2)'
        }`
      }
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

export interface SFRadioProps extends RadioProps {
  label?: React.ReactNode;
  isGroup?: boolean;
}

export const SFRadio = ({
  label,
  isGroup = false,
  ...props
}: SFRadioProps): React.ReactElement<SFRadioProps> => {
  if (isGroup) {
    return <StyledRadio {...props} color='primary' disableRipple />;
  }
  return (
    <FormControl>
      <SFFormControlBooleanLabel
        control={<StyledRadio {...props} color='primary' disableRipple />}
        label={label}
        disabled={props.disabled}
      />
    </FormControl>
  );
};
