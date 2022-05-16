import * as React from 'react';
import { Theme, withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteRenderInputParams
} from '@material-ui/lab';
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

export const StyledAutocomplete = withStyles((theme: Theme) => ({
  inputRoot: {
    '&[class*="MuiOutlinedInput-root"]': {
      paddingTop: '20px',

      '& input.MuiAutocomplete-input:first-child': {
        padding: '9.5px 4px'
      },

      '& .MuiAutocomplete-endAdornment': {
        right: '18px'
      }
    }
  },
  endAdornment: {
    marginTop: '-3px',
    '& button': {
      padding: '9px',
      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor:
            theme.palette.type === 'light'
              ? hexToRgba(SFGrey.A100 as string, 0.3)
              : hexToRgba(SFGrey[500] as string, 0.3)
        }
      },
      '&:active': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey.A100 as string, 0.5)
            : hexToRgba(SFGrey[500] as string, 0.5)
      }
    }
  },
  paper: {
    margin: '0 0 0 2px',
    boxShadow:
      '0px 5px 5px -3px rgba(0, 0, 0, 0.02), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    borderRadius: '2px'
  },
  listbox: {
    padding: '13px 0',
    backgroundColor:
      theme.palette.type === 'light' ? SFSurfaceLight : SFGrey[800]
  },
  option: {
    padding: '6px 24px',

    '&[data-focus="true"]': {
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey.A100 as string, 0.3)
          : hexToRgba(SFGrey[500] as string, 0.3),
      '&:active': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey.A100 as string, 0.5)
            : hexToRgba(SFGrey[500] as string, 0.5)
      }
    },

    '&[aria-selected="true"]': {
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey.A100 as string, 0.5)
          : hexToRgba(SFGrey[500] as string, 0.5)
    }
  },
  popupIndicator: {}
}))(Autocomplete);

const useStyles = makeStyles({
  root: {
    '& button.MuiAutocomplete-popupIndicator': {
      display: (props: Partial<SFAutocompleteProps>): string =>
        props.hasPopupIcon ? 'inline-flex' : 'none',
      padding: (props: Partial<SFAutocompleteProps>): string =>
        props.hasPopupIcon ? '9px' : '0'
    }
  }
});

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

export const SFAutocomplete = ({
  label,
  required = false,
  hasPopupIcon = false,
  allowEmpty = false,
  value,
  ...props
}: SFAutocompleteProps): React.ReactElement<SFAutocompleteProps> => {
  const classes = useStyles({ hasPopupIcon });

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
    if (reason !== 'create-option' && reason !== 'remove-option') {
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
      className={`${classes.root} ${props.className || ''}`}
      {...props}
      openOnFocus
      value={value}
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      inputValue={inputValue}
      getOptionSelected={(
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
      closeIcon={<SFIcon icon='Close' size={16} />}
    />
  );
};
