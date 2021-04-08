import * as React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { SFGrey, SFRed } from '../../SFColors/SFColors';

const StyledTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.background.paper,
      height: '56px',
      boxSizing: 'border-box',

      '&.Mui-focused': {
        backgroundColor: theme.palette.background.paper,

        '& .MuiOutlinedInput-notchedOutline': {
          border: `2px solid ${theme.palette.primary.main}`
        },

        '&.Mui-error': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${
              theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
            }`
          }
        }
      },

      '&.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${
            theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
          }`
        }
      },

      '&.Mui-disabled': {
        '& .MuiInputBase-input': {
          color: theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600]
        }
      },

      '& .MuiInputBase-input': {
        padding: '27px 13px 5px',
        color: theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
      },

      '& .MuiInputBase-inputMultiline': {
        padding: '29px 13px 3px'
      },

      '&.MuiOutlinedInput-multiline': {
        padding: '0',

        '& .MuiInputBase-inputMultiline': {
          height: '-webkit-fill-available'
        }
      },

      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${
          theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
        }`,
        borderRadius: 2,

        '& > legend': {
          transition: 'none',
          maxWidth: '0px'
        }
      }
    },

    '& .MuiInputLabel-outlined': {
      fontSize: '16px',
      lineHeight: '24px',
      color: theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400],

      '&.MuiInputLabel-shrink': {
        fontSize: '14px',
        lineHeight: '20px',
        transform: `translate(12px, 6px)`
      },

      '&.Mui-focused': {
        color: theme.palette.primary.main
      },

      '&.Mui-error': {
        color: theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
      },

      '&.Mui-disabled': {
        color: theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600]
      }
    },

    '& .MuiFormHelperText-root': {
      margin: '5px 13px 0px',

      '&.Mui-error': {
        color: theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
      }
    }
  }
}))(TextField);

export interface SFTextFieldProps extends Partial<OutlinedTextFieldProps> {}

export const SFTextField = ({
  variant,
  rows = 4,
  color,
  ...props
}: SFTextFieldProps): React.ReactElement<SFTextFieldProps> => {
  return (
    <FormControl fullWidth>
      <StyledTextField
        {...props}
        color='primary'
        variant='outlined'
        rows={rows}
      />
    </FormControl>
  );
};
