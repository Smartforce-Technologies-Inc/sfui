import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardTimePickerProps
} from '@material-ui/pickers';

import { SFBlue, SFGrey, SFRed } from '../../SFColors/SFColors';
import { SFMaterialUiPickersDate } from '../../SFTypes';

const StyledTimePicker = withStyles((theme: Theme) => ({
  root: {
    boxSizing: 'border-box',

    '& .MuiFilledInput-root': {
      height: '56px',
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${
        theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
      }`,
      borderRadius: 2,
      boxSizing: 'border-box',

      '&:before': {
        content: `none !important`
      },

      '&:after': {
        content: `none !important`
      },

      '&:hover': {
        '@media (hover: hover)': {
          borderColor: `${
            theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
          }`
        }
      },

      '&.Mui-focused': {
        border: `2px solid ${
          theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
        }`,

        '& .MuiFilledInput-input': {
          padding: '26px 10px 7px'
        },

        '&:hover': {
          '@media (hover: hover)': {
            borderColor: `${
              theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
            }`
          }
        }
      },

      '&.Mui-error': {
        border: `1px solid ${
          theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
        } !important`,

        '& .MuiFilledInput-input': {
          padding: '26px 11px 7px !important'
        }
      },

      '&.Mui-disabled': {
        border: `1px solid ${
          theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
        } !important`
      },

      '& .MuiFilledInput-input': {
        fontWeight: 400,
        fontSize: '16px',
        padding: '26px 11px 7px',

        '&.Mui-disabled': {
          color: `${
            theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
          }`,
          WebkitTextFillColor: `${
            theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
          }`
        }
      }
    },

    '& .MuiInputLabel-filled': {
      fontSize: '16px',
      lineHeight: '24px',
      color: `${theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]}`,

      '&.MuiInputLabel-shrink': {
        fontSize: '14px',
        lineHeight: '20px',
        transform: `translate(12px, 6px)`
      },

      '&.Mui-focused': {
        color: theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
      },

      '&.Mui-error': {
        color: `${theme.palette.type === 'light' ? SFRed[700] : SFRed[200]}`
      },

      '&.Mui-disabled': {
        color: `${theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]}`
      }
    },

    '& .MuiFormHelperText-root': {
      margin: '5px 13px 0px',
      backgroundColor: 'transparent',
      lineHeight: '12px',
      fontSize: '10px',

      '&.Mui-error': {
        color: `${theme.palette.type === 'light' ? SFRed[700] : SFRed[200]}`
      }
    }
  }
}))(KeyboardTimePicker);

export interface SFTimeFieldProps extends KeyboardTimePickerProps {
  label: string;
  onChange: (
    date: SFMaterialUiPickersDate | null,
    value?: string | null
  ) => void;
}

export const SFTimeField = ({
  placeholder = '08:00 AM',
  mask = '__:__ _M',
  ...props
}: SFTimeFieldProps): React.ReactElement<SFTimeFieldProps> => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <StyledTimePicker
        {...props}
        fullWidth
        variant='inline'
        inputVariant='filled'
        disableToolbar
        mask={mask}
        InputAdornmentProps={{
          style: { display: 'none ' }
        }}
        inputProps={{ 'aria-label': props.label }}
      />
    </MuiPickersUtilsProvider>
  );
};
