import { FormControlLabel, FormControlLabelProps, styled } from '@mui/material';
import * as React from 'react';
import { SFGrey } from '../../SFColors/SFColors';

const StyledFromControlLabel = styled(FormControlLabel)(({ theme }) => ({
  root: {
    color: `${theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]}`,
    gap: '3px',
    margin: '0px',
    alignItems: 'flex-start',

    '& .MuiTypography-root': {
      paddingTop: '9px'
    },

    '&.Mui-disabled': {
      color: `${theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400]}`
    }
  },
  label: {
    lineHeight: ' 24px'
  }
}));

export interface SFFormControlLabelProps extends FormControlLabelProps {}

export const SFFormControlBooleanLabel = (
  props: SFFormControlLabelProps
): React.ReactElement<SFFormControlLabelProps> => {
  return <StyledFromControlLabel {...props} />;
};
