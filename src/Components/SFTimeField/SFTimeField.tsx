import React from 'react';
import { TextFieldProps, styled } from '@mui/material';
import MomentUtils from '@date-io/moment';

import {
  TimeField,
  TimeFieldProps,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { SFBlue, SFGrey, SFRed } from '../../SFColors/SFColors';
import { MomentObjectOutput } from 'moment';

const StyledTimePicker = styled(TimeField)(({ theme }) => ({
  boxSizing: 'border-box',

  '& .MuiFilledInput-root': {
    height: '56px',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${
      theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
    }`,
    borderRadius: 2,
    boxSizing: 'border-box',

    '&:before': {
      content: 'none'
    },

    '&:after': {
      content: 'none'
    },

    '&:hover': {
      backgroundColor: theme.palette.background.paper,

      '@media (hover: hover)': {
        borderColor: `${
          theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]
        }`
      }
    },

    '&.Mui-focused': {
      border: `2px solid ${
        theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
      }`,

      '& .MuiFilledInput-input': {
        padding: '26px 10px 7px'
      },

      '&:hover': {
        '@media (hover: hover)': {
          borderColor: `${
            theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
          }`
        }
      }
    },

    '&.Mui-error': {
      border: `1px solid ${
        theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]
      } !important`,

      '& .MuiFilledInput-input': {
        padding: '26px 11px 7px !important'
      }
    },

    '&.Mui-disabled': {
      border: `1px solid ${
        theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
      } !important`
    },

    '& .MuiFilledInput-input': {
      fontWeight: 400,
      fontSize: '16px',
      padding: '26px 11px 7px',

      '&.Mui-disabled': {
        color: `${theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]}`,
        WebkitTextFillColor: `${
          theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
        }`
      }
    }
  },

  '& .MuiInputLabel-filled': {
    fontSize: '16px',
    lineHeight: '24px',
    color: `${theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400]}`,

    '&.MuiInputLabel-shrink': {
      fontSize: '14px',
      lineHeight: '20px',
      transform: `translate(12px, 6px)`
    },

    '&.Mui-focused': {
      color: theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
    },

    '&.Mui-error': {
      color: `${theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]}`
    },

    '&.Mui-disabled': {
      color: `${theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]}`
    }
  },

  '& .MuiFormHelperText-root': {
    backgroundColor: 'transparent',

    '&.Mui-error': {
      color: `${theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]}`
    }
  }
}));

export interface SFTimeFieldProps
  extends Omit<TimeFieldProps<TextFieldProps>, 'onChange'> {
  onChange: (date: MomentObjectOutput, error?: string | null) => void;
}

export const SFTimeField = ({
  ampm = true,
  onChange,
  ...props
}: SFTimeFieldProps): React.ReactElement<SFTimeFieldProps> => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment} utils={MomentUtils}>
      <StyledTimePicker
        {...props}
        fullWidth
        onChange={(date: MomentObjectOutput, error): void =>
          onChange(date, error.validationError)
        }
        variant='filled'
      />
    </LocalizationProvider>
  );
};
