import * as React from 'react';
import {
  styled,
  Autocomplete,
  AutocompleteProps,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteRenderInputParams,
  Popper
} from '@mui/material';
import { SFMenuOption } from '../SFSelect/SFSelect';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey, SFSurfaceLight } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const isOption = (value: string, options: SFMenuOption[]): boolean => {
  if (options.find((option: SFMenuOption) => value === option.value)) {
    return true;
  } else {
    return false;
  }
};

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-inputRoot': {
    '&[class*="MuiOutlinedInput-root"]': {
      paddingTop: '20px',

      '& input.MuiAutocomplete-input:first-of-type': {
        padding: '9.5px 4px'
      },

      '& .MuiAutocomplete-endAdornment': {
        right: '18px'
      }
    }
  },
  '& .MuiAutocomplete-endAdornment': {
    marginTop: '-3px',
    '& button': {
      padding: '9px',
      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? hexToRgba(SFGrey.A100 as string, 0.3)
              : hexToRgba(SFGrey[500] as string, 0.3)
        }
      },
      '&:active': {
        backgroundColor:
          theme.palette.mode === 'light'
            ? hexToRgba(SFGrey.A100 as string, 0.5)
            : hexToRgba(SFGrey[500] as string, 0.5)
      }
    }
  }
}));

export const SFAutocompletePopper = styled(Popper)(({ theme }) => ({
  '& .MuiAutocomplete-listbox': {
    padding: '13px 0',
    backgroundColor:
      theme.palette.mode === 'light' ? SFSurfaceLight : SFGrey[800],

    '& .MuiAutocomplete-option': {
      padding: '6px 24px',

      '&.Mui-focused': {
        backgroundColor:
          theme.palette.mode === 'light'
            ? hexToRgba(SFGrey.A100 as string, 0.3)
            : hexToRgba(SFGrey[500] as string, 0.3),
        '&:active': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? hexToRgba(SFGrey.A100 as string, 0.5)
              : hexToRgba(SFGrey[500] as string, 0.5)
        }
      },

      '&[aria-selected="true"]': {
        backgroundColor:
          theme.palette.mode === 'light'
            ? hexToRgba(SFGrey.A100 as string, 0.5)
            : hexToRgba(SFGrey[500] as string, 0.5)
      }
    }
  }
}));

export type SFAutocompleteInputChangeReason = AutocompleteInputChangeReason;
export type SFAutocompleteChangeReason = AutocompleteChangeReason;
export type SFAutocompleteCloseReason = AutocompleteCloseReason;

export interface SFAutocompleteProps
  extends Omit<
    AutocompleteProps<
      SFMenuOption,
      boolean | undefined,
      boolean | undefined,
      boolean | undefined
    >,
    'renderInput' | 'onChange' | 'onInputChange'
  > {
  label: string;
  required?: boolean;
  options: SFMenuOption[];
  hasPopupIcon?: boolean;
  allowEmpty?: boolean;
  value?: string;
  onChange: (value: string) => void;
}
const SFAutocompleteBase = ({
  label,
  required = false,
  hasPopupIcon = false,
  allowEmpty = false,
  value,
  ...props
}: SFAutocompleteProps): React.ReactElement<SFAutocompleteProps> => {
  // const classes = useStyles({ hasPopupIcon });

  let initInputValue = '';
  if (value && isOption(value, props.options)) {
    initInputValue = value;
  }

  const [inputValue, setInputValue] = React.useState<string>(initInputValue);

  const onInputChange = (
    _event: React.ChangeEvent,
    newValue: string,
    reason: AutocompleteInputChangeReason
  ): void => {
    if (reason !== 'reset') {
      setInputValue(newValue);

      if (props.freeSolo) {
        props.onChange(newValue);
      }
    } else if (props.clearOnBlur) {
      setInputValue(value && value.length > 0 ? value : '');
    }
  };

  const onChange = (
    _event: React.ChangeEvent,
    option: SFMenuOption,
    reason: AutocompleteChangeReason
  ): void => {
    if (reason !== 'createOption' && reason !== 'removeOption') {
      setInputValue(option ? option.value : '');
      props.onChange(option ? option.value : '');
    }
  };

  let options: SFMenuOption[] = [...props.options];

  if (allowEmpty) {
    options = [...options, { label: '', value: '' }];
  }

  return (
    <StyledAutocomplete
      className={`SFAutocomplete-root ${props.className || ''}`}
      {...props}
      openOnFocus
      value={value}
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      inputValue={inputValue}
      isOptionEqualToValue={(
        option: SFMenuOption,
        value: SFMenuOption | string
      ): boolean => {
        return typeof value === 'string'
          ? value === option.value
          : value.value === option.value;
      }}
      getOptionLabel={(option: SFMenuOption): string =>
        typeof option === 'string' ? option : option.label
      }
      renderInput={(params: AutocompleteRenderInputParams): React.ReactNode => (
        <SFTextField {...params} label={label} required={required} />
      )}
      popupIcon={<SFIcon icon='Down-2' size={16} />}
      clearIcon={<SFIcon icon='Close' size={16} />}
      PopperComponent={SFAutocompletePopper}
    />
  );
};

export const SFAutocomplete = styled(SFAutocompleteBase)(
  ({ hasPopupIcon }) => ({
    '& button.MuiAutocomplete-popupIndicator': {
      display: hasPopupIcon ? 'inline-flex' : 'none',
      padding: hasPopupIcon ? '9px' : '0'
    }
  })
);
