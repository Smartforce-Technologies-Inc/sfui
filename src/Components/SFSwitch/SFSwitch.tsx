import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Switch, { SwitchProps } from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import { SFSurfaceLight, SFSurfaceDark, SFGrey } from '../../SFColors/SFColors';
import { SFFormControlLabel } from '../SFFormControlLabel/SFFormControlLabel';

const StyledSwitch = withStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    width: 60,
    height: 42,
    padding: 11,

    '& .MuiButtonBase-root': {
      '& .MuiIconButton-label': {
        '& .MuiSwitch-thumb': {
          width: 12,
          height: 12,
          margin: '6px'
        }
      },

      '&.Mui-checked': {
        transform: 'translateX(17px)'
      }
    },

    '& .MuiSwitch-track': {
      height: '16px'
    },

    '&.MuiSwitch-sizeSmall': {
      width: 49,
      height: 34,
      padding: 8,

      '& .MuiButtonBase-root': {
        '&.Mui-checked': {
          transform: 'translateX(14px)'
        },

        '& .MuiIconButton-label': {
          '& .MuiSwitch-thumb': {
            width: 10,
            height: 10,
            margin: '8px'
          }
        }
      },

      '& .MuiSwitch-track': {
        height: '14px'
      },

      '& + .MuiFormControlLabel-label': {
        lineHeight: '20px'
      }
    }
  },
  switchBase: {
    color: theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400],

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

    '&.Mui-checked': {
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
      }
    },

    '&.Mui-disabled': {
      color: theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700],

      '& + $track': {
        opacity: 1,
        backgroundColor: 'transparent',
        borderColor: theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
      },

      '&.Mui-checked': {
        color: theme.palette.type === 'light' ? SFSurfaceLight : SFSurfaceDark,

        '& + $track': {
          backgroundColor:
            theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700],
          borderColor:
            theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
        }
      }
    }
  },
  thumb: {
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
  sfColor?: 'primary' | 'default';
}

export const SFSwitch = ({
  sfColor = 'primary',
  label,
  size = 'medium',
  ...props
}: SFSwitchProps): React.ReactElement<SFSwitchProps> => {
  return (
    <FormControl>
      <SFFormControlLabel
        control={
          <StyledSwitch
            {...props}
            color={sfColor}
            disableRipple
            disableTouchRipple
            disableFocusRipple
            size={size}
          />
        }
        label={label}
      />
    </FormControl>
  );
};
