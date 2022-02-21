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

const StyledAutocomplete = withStyles((theme: Theme) => ({
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
  }
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
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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

      if (!isOpen && newValue.length > 0) {
        setIsOpen(true);
      } else if (isOpen && newValue.length === 0) {
        setIsOpen(false);
      }

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
    setIsOpen(false);

    if (reason !== 'create-option' && reason !== 'remove-option') {
      setInputValue(option ? option.value : '');
      props.onChange(option ? option.value : '');
    }
  };

  const onOpen = (event: React.ChangeEvent): void => {
    event.persist();

    // If reason of open is click on button
    if (event.type === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const onClose = (
    event: React.ChangeEvent,
    reason: SFAutocompleteCloseReason
  ): void => {
    event.persist();

    if (isOpen) {
      setIsOpen(false);

      if (props.onClose) {
        props.onClose(event, reason);
      }
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
      value={value}
      open={isOpen}
      openOnFocus={false}
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      onClose={onClose}
      onOpen={onOpen}
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
