import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Switch, { SwitchProps } from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import { SFSurfaceLight, SFSurfaceDark, SFGrey } from '../../SFColors/SFColors';
import { SFFormControlLabel } from '../SFFormControlLabel/SFFormControlLabel';

const StyledSwitch = withStyles((theme: Theme) => ({
  root: {
    width: 64,
    height: 42,
    padding: 13,
    display: 'flex'
  },
  switchBase: {
    left: 3,
    padding: 15,
    color: theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400],
    '& + $track': {
      marginTop: -2
    },
    '&:hover': {
      backgroundColor:
        theme.palette.type === 'light'
          ? `rgba(204, 204, 204, 0.3)`
          : `rgba(128, 128, 128, 0.3)`
    },
    '&:active': {
      backgroundColor:
        theme.palette.type === 'light'
          ? `rgba(204, 204, 204, 0.5)`
          : `rgba(128, 128, 128, 0.2)`
    },
    '&.Mui-disabled': {
      color: theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700],
      '& + $track': {
        opacity: 1,
        backgroundColor: 'transparent',
        borderColor: theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
      }
    },
    '&.Mui-checked': {
      transform: 'translateX(17px)',
      color: theme.palette.type === 'light' ? SFSurfaceLight : SFSurfaceDark,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      },
      '&:hover': {
        backgroundColor:
          theme.palette.type === 'light'
            ? `rgba(204, 235, 255, 0.4)`
            : `rgba(128, 198, 255, 0.2)`
      },
      '&:active': {
        backgroundColor:
          theme.palette.type === 'light'
            ? `rgba(204, 235, 255, 0.6)`
            : `rgba(128, 198, 255, 0.1)`
      },
      '&.Mui-disabled': {
        color: theme.palette.type === 'light' ? SFSurfaceLight : SFSurfaceDark,
        '& + $track': {
          opacity: 1,
          backgroundColor:
            theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700],
          borderColor:
            theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
        }
      }
    }
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none'
  },
  track: {
    border: `2px solid ${theme.palette.grey[600]}`,
    borderRadius: 10,
    opacity: 1,
    backgroundColor:
      theme.palette.type === 'light' ? SFSurfaceLight : SFSurfaceDark
  }
}))(Switch);

export interface SFSwitchProps extends SwitchProps {
  label?: string;
}

export const SFSwitch = ({
  disableRipple = true,
  color,
  label,
  ...props
}: SFSwitchProps): React.ReactElement<SFSwitchProps> => {
  color = 'primary';
  return (
    <FormControl>
      <SFFormControlLabel
        control={
          <StyledSwitch
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
