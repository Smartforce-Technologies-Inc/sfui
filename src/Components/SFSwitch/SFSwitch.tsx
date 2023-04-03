import * as React from 'react';
import { Switch, styled, SwitchProps, FormControl } from '@mui/material';
import { SFSurfaceLight, SFSurfaceDark, SFGrey } from '../../SFColors/SFColors';
import { SFFormControlBooleanLabel } from '../SFFormControlBooleanLabel/SFFormControlBooleanLabel';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  display: 'flex',
  width: 60,
  height: 42,
  padding: 11,

  '.MuiSwitch-switchBase': {
    color: theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400],

    '&:hover': {
      '@media (hover: hover)': {
        backgroundColor:
          theme.palette.mode === 'light'
            ? `rgba(204, 204, 204, 0.3)`
            : `rgba(128, 128, 128, 0.3)`
      }
    },

    '&:active': {
      backgroundColor:
        theme.palette.mode === 'light'
          ? `rgba(204, 204, 204, 0.5)`
          : `rgba(128, 128, 128, 0.2)`
    },

    '&.Mui-checked': {
      transform: 'translateX(17px)',
      color: theme.palette.mode === 'light' ? SFSurfaceLight : SFSurfaceDark,

      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      },

      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? `rgba(204, 235, 255, 0.4)`
              : `rgba(128, 198, 255, 0.2)`
        }
      },

      '&:active': {
        backgroundColor:
          theme.palette.mode === 'light'
            ? `rgba(204, 235, 255, 0.6)`
            : `rgba(128, 198, 255, 0.1)`
      }
    },

    '&.Mui-disabled': {
      color: theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700],

      '& + $track': {
        opacity: 1,
        backgroundColor: 'transparent',
        borderColor: theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
      },

      '&.Mui-checked': {
        color: theme.palette.mode === 'light' ? SFSurfaceLight : SFSurfaceDark,

        '& + .MuiSwitch-track': {
          backgroundColor:
            theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700],
          borderColor:
            theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
        }
      }
    }
  },

  '.MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 12,
    height: 12,
    margin: '6px'
  },

  '.MuiSwitch-track': {
    height: '16px',
    border: `2px solid ${theme.palette.grey[600]}`,
    borderRadius: 10,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'light' ? SFSurfaceLight : SFSurfaceDark
  },

  '&.MuiSwitch-sizeSmall': {
    width: 49,
    height: 34,
    padding: 8,

    '.MuiSwitch-switchBase': {
      '&.Mui-checked': {
        transform: 'translateX(14px)'
      },

      '.MuiSwitch-thumb': {
        width: 10,
        height: 10,
        margin: '8px'
      }
    },

    '.MuiSwitch-track': {
      height: '14px'
    },

    '& + .MuiFormControlLabel-label': {
      paddingTop: '7px',
      fontSize: '14px',
      lineHeight: '20px'
    }
  }
}));

export interface SFSwitchProps
  extends Omit<
    SwitchProps,
    'color' | 'disableRipple' | 'disableTouchRipple' | 'disableFocusRipple'
  > {
  label?: React.ReactNode;
}

export const SFSwitch = ({
  label,
  size = 'medium',
  ...props
}: SFSwitchProps): React.ReactElement<SFSwitchProps> => {
  return (
    <FormControl>
      <SFFormControlBooleanLabel
        control={
          <StyledSwitch
            {...props}
            color='primary'
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
