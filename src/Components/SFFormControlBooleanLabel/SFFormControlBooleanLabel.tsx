import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import FormControlLabel, {
  FormControlLabelProps
} from '@material-ui/core/FormControlLabel';
import { SFGrey } from '../../SFColors/SFColors';

const StyledFromControlLabel = withStyles((theme: Theme) => ({
  root: {
    color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
    gap: '3px',
    margin: '0px',
    alignItems: 'flex-start',

    '& .MuiTypography-root': {
      paddingTop: '9px'
    },

    '&.Mui-disabled': {
      color: `${theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]}`
    }
  },
  label: {
    lineHeight: ' 24px'
  }
}))(FormControlLabel);

export interface SFFormControlLabelProps extends FormControlLabelProps {}

export const SFFormControlBooleanLabel = (
  props: SFFormControlLabelProps
): React.ReactElement<SFFormControlLabelProps> => {
  return <StyledFromControlLabel {...props} />;
};
