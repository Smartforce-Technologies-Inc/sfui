import * as React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import { SFGrey, SFRed } from '../../SFColors/SFColors';

const StyledTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.background.paper,
      height: '56px',
      boxSizing: 'border-box',

      '&.Mui-focused': {
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

      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${
            theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
          }`
        },

        '&.Mui-disabled': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${
              theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
            }`
          }
        }
      },

      '& .MuiInputBase-input': {
        padding: '27px 13px 5px',
        color: theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50],

        '&:focus': {
          backgroundColor: 'transparent'
        }
      },

      '& .MuiInputBase-inputMultiline': {
        padding: '30px 13px 3px'
      },

      '&.MuiOutlinedInput-root': {
        '&:after, &:before': {
          content: 'none !important'
        }
      },

      '&.MuiOutlinedInput-multiline': {
        padding: '30px 12px 8px',
        height: 'auto',

        '& .MuiInputBase-inputMultiline': {
          padding: '0'
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

      '&.Mui-error': {
        color: theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
      },

      '&.Mui-disabled': {
        color: theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600]
      }
    },

    '& .MuiFormHelperText-root': {
      margin: '5px 13px 0px',
      lineHeight: '12px',
      fontSize: '10px',

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
    <StyledTextField
      {...props}
      fullWidth
      color='primary'
      variant='outlined'
      rows={props.multiline ? rows : 1}
    />
  );
};
