import * as React from 'react';
import { SFFormControlBooleanLabel } from '../../SFFormControlBooleanLabel/SFFormControlBooleanLabel';
import { SFGrey } from '../../../SFColors/SFColors';
import { Radio, RadioProps, styled } from '@mui/material';

const StyledRadio = styled(Radio)(({ theme }) => ({
  color: `${theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400]}`,
  '&.MuiRadio-colorPrimary': {
    '&:hover': {
      '@media (hover: hover)': {
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? 'rgba(204, 204, 204, 0.3)'
            : 'rgba(128, 128, 128, 0.3)'
        }`
      }
    },
    '&:active': {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? 'rgba(204, 204, 204, 0.5)'
          : 'rgba(128, 128, 128, 0.2)'
      }`
    },
    '&.Mui-checked:hover': {
      '@media (hover: hover)': {
        backgroundColor: `${
          theme.palette.mode === 'light'
            ? 'rgba(204, 235, 255, 0.4)'
            : 'rgba(128, 198, 255, 0.2)'
        }`
      }
    },
    '&.Mui-checked:active': {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? 'rgba(204, 235, 255, 0.6)'
          : 'rgba(128, 198, 255, 0.1)'
      }`
    },
    '&.Mui-disabled': {
      color: `${theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]}`
    }
  }
}));

export interface SFRadioProps extends RadioProps {
  isGroup?: boolean;
  label?: React.ReactNode;
}

export const SFRadio = ({
  className = '',
  isGroup = false,
  label,
  ...props
}: SFRadioProps): React.ReactElement<SFRadioProps> => {
  if (isGroup) {
    return (
      <StyledRadio
        {...props}
        className={className}
        color='primary'
        disableRipple
      />
    );
  }

  return (
    <SFFormControlBooleanLabel
      className={className}
      control={<StyledRadio {...props} color='primary' disableRipple />}
      label={label}
      disabled={props.disabled}
    />
  );
};
