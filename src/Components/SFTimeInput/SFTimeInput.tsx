import React, { useEffect, useState } from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardTimePickerProps
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { SFBlue, SFGrey, SFRed } from '../../SFColors/SFColors';

function getDateFromString(value: string): MaterialUiPickersDate | null {
  const date = moment(value);
  return date.isValid() ? date : null;
}

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
        borderColor: `${
          theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
        }`
      },

      '&.Mui-focused': {
        border: `2px solid ${
          theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
        }`,

        '& .MuiFilledInput-input': {
          padding: '26px 10px 7px'
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
        }`
      },

      '& .MuiFilledInput-input': {
        fontWeight: 400,
        fontSize: '16px',
        padding: '26px 11px 7px',

        '&.Mui-disabled': {
          color: `${theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]}`
        }
      }
    },

    '& .MuiInputLabel-filled': {
      fontSize: '16px',
      lineHeight: '24px',

      '&.MuiInputLabel-shrink': {
        fontSize: '14px',
        lineHeight: '20px',
        transform: `translate(12px, 6px)`,
        color: `${theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600]}`
      },

      '&.Mui-error': {
        color: `${theme.palette.type === 'light' ? SFRed[700] : SFRed[200]}`
      },

      '&.Mui-disabled': {
        color: `${theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]}`
      }
    },

    '& .MuiFormHelperText-root': {
      backgroundColor: 'transparent',

      '&.Mui-error': {
        color: `${theme.palette.type === 'light' ? SFRed[700] : SFRed[200]}`
      }
    }
  }
}))(KeyboardTimePicker);

export interface SFTimeInputProps
  extends Omit<KeyboardTimePickerProps, 'value' | 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}

export const SFTimeInput = ({
  value,
  onChange,
  placeholder = '08:00 AM',
  ...props
}: SFTimeInputProps): React.ReactElement<SFTimeInputProps> => {
  const [date, setDate] = useState<MaterialUiPickersDate | null>(
    getDateFromString(value)
  );

  useEffect(() => {
    setDate(getDateFromString(value));
  }, [value]);

  const onDateChange = (date: MaterialUiPickersDate): void => {
    setDate(date);

    if (date && date.isValid()) {
      onChange(date.toISOString());
    }
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <StyledTimePicker
        {...props}
        fullWidth
        variant='inline'
        inputVariant='filled'
        disableToolbar
        mask='__:__ _M'
        value={date}
        onChange={onDateChange}
        keyboardIcon={null}
      />
    </MuiPickersUtilsProvider>
  );
};
