import * as React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import TextField, { FilledTextFieldProps } from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { SFGrey, SFRed } from '../../SFColors/SFColors';

const StyledTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.background.paper,
      '&.Mui-focused': {
        backgroundColor: theme.palette.background.paper
      }
    },
    boxSizing: 'border-box',
    '& .MuiFilledInput-root': {
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
        borderColor: theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
      },
      '&:active': {
        border: `2px solid ${theme.palette.primary.main}`,
        '& .MuiFilledInput-input': {
          padding: '26px 11px 7px'
        }
      },
      '&.Mui-focused': {
        border: `2px solid ${theme.palette.primary.main}`,
        '& .MuiFilledInput-input': {
          padding: '26px 11px 7px'
        }
      },
      '&.Mui-error': {
        border: `2px solid ${
          theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
        }`,
        '& .MuiFilledInput-input': {
          padding: '26px 11px 7px'
        }
      },
      '&.Mui-disabled': {
        border: `1px solid ${
          theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
        }`,
        '& .MuiFilledInput-input': {
          padding: '27px 12px 8px !important'
        }
      },
      '& .MuiFilledInput-input': {
        fontWeight: 400,
        fontSize: '16px',
        padding: '27px 12px 8px',
        '&.Mui-disabled': {
          color: theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
        }
      }
    },
    '& .MuiInputLabel-filled': {
      fontSize: '16px',
      lineHeight: '24px',
      '&.MuiInputLabel-shrink': {
        fontSize: '14px',
        lineHeight: '20px',
        transform: `translate(12px, 6px)`
      },
      '&.Mui-error': {
        color: theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
      },
      '&.Mui-disabled': {
        color: theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
      }
    },
    '& .MuiFormHelperText-root': {
      '&.Mui-error': {
        color: theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
      }
    }
  }
}))(TextField);

export interface SFTextFieldProps extends Partial<FilledTextFieldProps> {
  variant?: 'filled';
}

export const SFTextField = ({
  variant = 'filled',
  color,
  ...props
}: SFTextFieldProps): React.ReactElement<SFTextFieldProps> => {
  color = 'primary';
  return (
    <FormControl fullWidth>
      <StyledTextField {...props} color={color} variant={variant} />
    </FormControl>
  );
};
