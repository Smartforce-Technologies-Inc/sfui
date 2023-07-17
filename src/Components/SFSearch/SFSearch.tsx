import React from 'react';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFBlue, SFGrey, SFRed } from '../../SFColors/SFColors';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import {
  FormControl,
  FormControlProps,
  Input,
  InputLabel,
  styled
} from '@mui/material';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& label + .MuiInputBase-formControl': {
    margin: 0
  },
  '.MuiInputBase-root': {
    height: '56px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px 13px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 2,
    boxSizing: 'border-box',
    border: `1px solid ${
      theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
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
        theme.palette.mode === 'light' ? SFRed[700] : SFRed[200]
      }`
    },
    '&:hover': {
      '@media (hover: hover)': {
        border: `1px solid ${
          theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]
        }`
      }
    }
  },

  '.MuiInputBase-input': {
    padding: '27px 13px 5px 0',
    color: theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50],

    '&:focus': {
      backgroundColor: 'transparent'
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
      transform: `translate(14px, 6px)`
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

  '.MuiInputBase-adornedEnd': {
    '.searchIcon': {
      padding: '11px 8px'
    }
  }
}));

interface EndAdornmentProps {
  className?: string;
  onClean: () => void;
  value: string;
}

const EndAdornmentBase = ({
  className,
  onClean,
  value
}: EndAdornmentProps): React.ReactElement<EndAdornmentProps> => (
  <div className={className}>
    {value.length > 0 && (
      <SFIconButton sfSize='medium' sfIcon='Close' onClick={onClean} />
    )}
    <SFIcon className='searchIcon' icon='Search' />
  </div>
);

const EndAdornment = styled(EndAdornmentBase)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});

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
  onChange: (value: string) => void;
  value: string;
}

export const SFSearch = ({
  label,
  onChange,
  value,
  ...props
}: SFSearchProps): React.ReactElement<SFSearchProps> => {
  const onInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => onChange(event.target.value.trimStart());

  const onClean = (): void => onChange('');

  return (
    <StyledFormControl {...props} variant='outlined' fullWidth>
      <InputLabel>{label}</InputLabel>
      <Input
        endAdornment={<EndAdornment value={value} onClean={onClean} />}
        fullWidth
        onChange={onInputChange}
        value={value}
        disableUnderline
      />
    </StyledFormControl>
  );
};
