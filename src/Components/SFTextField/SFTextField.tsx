import * as React from 'react';
import { SFGrey, SFRed, SFBlue } from '../../SFColors/SFColors';
import { TextField, TextFieldProps, styled } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '.MuiInputBase-root': {
    fontSize: '16px',
    lineHeight: '24px',
    backgroundColor: theme.palette.background.paper,
    height: '56px',
    boxSizing: 'border-box',

    '&.Mui-error': {
      '.MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${
          theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]
        }`
      }
    },

    '&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        border: `2px solid ${theme.palette.primary.main}`
      },

      '&.Mui-error': {
        '.MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${
            theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]
          }`
        }
      }
    },

    '&.Mui-disabled': {
      '.MuiInputBase-input': {
        color: theme.palette.mode === 'light' ? SFGrey[400] : SFGrey[600],
        WebkitTextFillColor:
          theme.palette.mode === 'light' ? SFGrey[400] : SFGrey[600]
      },
      '.MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${
          theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
        }`
      }
    },

    '&:hover': {
      '@media (hover: hover)': {
        '.MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${
            theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]
          }`
        },

        '&.Mui-focused': {
          '.MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${theme.palette.primary.main}`
          }
        },

        '&.Mui-disabled': {
          '.MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${
              theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
            }`
          }
        },

        '&.Mui-error': {
          '.MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${
              theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]
            }`
          }
        }
      }
    },

    '&.MuiInputBase-multiline': {
      padding: '30px 12px 8px',
      height: 'auto',

      '.MuiInputBase-inputMultiline': {
        padding: '0'
      }
    },

    '.MuiInputBase-input': {
      height: '24px',
      padding: '27px 13px 5px',
      color: theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50],

      '&:focus': {
        backgroundColor: 'transparent'
      }
    },

    '.MuiInputBase-inputMultiline': {
      padding: '30px 13px 3px'
    },

    '.MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${
        theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
      }`,
      borderRadius: 2,

      '> legend': {
        transition: 'none',
        maxWidth: '0px'
      }
    }
  },

  '.MuiInputLabel-outlined': {
    fontSize: '16px',
    lineHeight: '24px',
    color: theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400],
    transform: 'translate(14px, 16px) scale(1)',

    '&.MuiInputLabel-shrink': {
      fontSize: '14px',
      lineHeight: '20px',
      transform: `translate(12px, 6px)`
    },

    '&.Mui-focused': {
      color: theme.palette.mode === 'light' ? SFBlue[500] : SFBlue[200]
    },

    '&.Mui-error': {
      color: theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]
    },

    '&.Mui-disabled': {
      color: theme.palette.mode === 'light' ? SFGrey[400] : SFGrey[600]
    }
  },

  '.MuiFormHelperText-root': {
    margin: '5px 13px 0px',
    lineHeight: '12px',
    fontSize: '10px',

    '&.Mui-error': {
      color: theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]
    }
  }
}));

export interface SFTextFieldProps
  extends Omit<TextFieldProps, 'color' | 'variant' | 'fullWidth'> {}

export const SFTextField = ({
  autoComplete = 'off',
  rows = 4,
  ...props
}: SFTextFieldProps): React.ReactElement<SFTextFieldProps> => {
  return (
    <StyledTextField
      {...props}
      fullWidth
      color='primary'
      variant='outlined'
      minRows={props.multiline ? rows : 1}
      autoComplete={autoComplete}
    />
  );
};
