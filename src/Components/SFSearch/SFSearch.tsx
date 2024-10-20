import React from 'react';
import {
  FormControl,
  FormControlProps,
  Input,
  InputLabel,
  makeStyles,
  Theme,
  withStyles
} from '@material-ui/core';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFBlue, SFGrey, SFRed } from '../../SFColors/SFColors';
import { SFIconButton, SFIconButtonProps } from '../SFIconButton/SFIconButton';

const StyledFormControl = withStyles((theme: Theme) => ({
  root: {
    '& label + .MuiInput-formControl': {
      margin: 0
    },
    '& .MuiInputBase-root': {
      height: '56px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '5px 13px',
      backgroundColor: theme.palette.background.paper,
      borderRadius: 2,
      boxSizing: 'border-box',
      border: `1px solid ${
        theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
      }`,
      '&.Mui-focused': {
        border: `2px solid ${theme.palette.primary.main}`,
        padding: '3px 12px',
        '&:hover': {
          border: `2px solid ${theme.palette.primary.main}`
        }
      },
      '&.Mui-error': {
        border: `1px solid ${
          theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
        }`
      },
      '&:hover': {
        '@media (hover: hover)': {
          border: `1px solid ${
            theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
          }`
        }
      }
    },
    '& .MuiInputBase-input': {
      padding: '27px 13px 5px 0',
      color: theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50],

      '&:focus': {
        backgroundColor: 'transparent'
      }
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '16px',
      lineHeight: '24px',
      color: theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400],
      transform: 'translate(14px, 16px) scale(1)',

      '&.MuiInputLabel-shrink': {
        fontSize: '14px',
        lineHeight: '20px',
        transform: `translate(14px, 6px)`
      },

      '&.Mui-focused': {
        color: theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
      },

      '&.Mui-error': {
        color: theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
      },

      '&.Mui-disabled': {
        color: theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600]
      }
    },
    '& .MuiInputBase-adornedEnd': {
      '& .searchIcon': {
        padding: '11px 8px'
      }
    }
  }
}))(FormControl);

const useStyles = makeStyles(() => ({
  endAdornmentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}));

export interface SFSearchProps
  extends Omit<
    FormControlProps,
    | 'onChange'
    | 'children'
    | 'focused'
    | 'fullWidth'
    | 'required'
    | 'size'
    | 'color'
  > {
  label: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputProps?: Record<string, any>;
  clearButtonProps?: Partial<
    Omit<SFIconButtonProps, 'sfSize' | 'sfIcon' | 'onClick'>
  >;
  onChange: (value: string) => void;
}

export const SFSearch = ({
  label,
  value,
  onChange,
  inputProps,
  clearButtonProps,
  ...props
}: SFSearchProps): React.ReactElement<SFSearchProps> => {
  const classes = useStyles();

  const onInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    onChange(event.target.value.trimStart());
  };

  const onClean = (): void => onChange('');

  return (
    <StyledFormControl {...props} variant='outlined' fullWidth>
      <InputLabel>{label}</InputLabel>
      <Input
        endAdornment={
          <div className={classes.endAdornmentContainer}>
            {value.length > 0 && (
              <SFIconButton
                {...clearButtonProps}
                aria-label={clearButtonProps?.['aria-label'] || 'Clear search'}
                sfSize='medium'
                sfIcon='Close'
                onClick={onClean}
              />
            )}
            <SFIcon className='searchIcon' icon='Search' />
          </div>
        }
        fullWidth
        onChange={onInputChange}
        value={value}
        disableUnderline
        inputProps={{ ...inputProps, 'aria-label': label }}
      />
    </StyledFormControl>
  );
};
