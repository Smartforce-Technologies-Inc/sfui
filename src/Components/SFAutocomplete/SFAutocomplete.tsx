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

const isOption = (option: SFMenuOption, options: SFMenuOption[]): boolean => {
  return !!options.find((o: SFMenuOption) => o.value === option.value);
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
  popupIndicator: {},
  clearIndicator: {}
}))(Autocomplete);

const useStyles = makeStyles({
  root: {
    '& button.MuiAutocomplete-popupIndicator': {
      pointerEvents: (props: Partial<SFAutocompleteProps>): string =>
        props.popupIconType === 'search' ? 'none' : 'auto',
      display: (props: Partial<SFAutocompleteProps>): string =>
        props.popupIconType !== 'none' ? 'inline-flex' : 'none',
      padding: (props: Partial<SFAutocompleteProps>): string =>
        props.popupIconType !== 'none' ? '9px' : '0'
    },
    '& button.MuiAutocomplete-popupIndicatorOpen': {
      transform: (props: Partial<SFAutocompleteProps>): string =>
        props.popupIconType === 'search' ? 'none' : 'rotate(180deg)'
    }
  }
});

export type SFAutocompleteInputChangeReason = AutocompleteInputChangeReason;
export type SFAutocompleteChangeReason = AutocompleteChangeReason;
export type SFAutocompleteCloseReason = AutocompleteCloseReason;

export interface SFAutocompleteRefHandler {
  focus: () => void;
}

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
  popupIconType?: 'default' | 'search' | 'none';
  allowEmpty?: boolean;
  error?: boolean;
  helperText?: string;
  value?: string | SFMenuOption;
  onChange: (value: string | SFMenuOption) => void;
}

export const SFAutocomplete = React.forwardRef<
  SFAutocompleteRefHandler,
  SFAutocompleteProps
>(
  (
    {
      className = '',
      label,
      required = false,
      popupIconType = 'none',
      allowEmpty = false,
      value,
      error = false,
      helperText,
      ...props
    },
    ref
  ) => {
    const classes = useStyles({ popupIconType });
    const [inputValue, setInputValue] = React.useState<string>('');

    React.useEffect(() => {
      if (value) {
        if (typeof value === 'string') {
          setInputValue(value);
        } else if (isOption(value, props.options)) {
          // It's of type SFMenuOption
          setInputValue(value.label);
        } else {
          setInputValue('');
        }
      } else {
        setInputValue('');
      }
    }, [value]);

    const inputRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(
      null
    );

    React.useImperativeHandle(ref, () => ({
      focus(): void {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    }));

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
        setInputValue(value ? (value as SFMenuOption).label : '');
      }
    };

    const onChange = (
      _event: React.ChangeEvent,
      option: SFMenuOption,
      reason: AutocompleteChangeReason
    ): void => {
      if (reason !== 'create-option' && reason !== 'remove-option') {
        props.onChange(option || '');
      }
    };

    let options: SFMenuOption[] = [...props.options];

    if (allowEmpty) {
      options = [...options, { label: '', value: '' }];
    }

    const popupIcon =
      popupIconType === 'search' ? (
        <SFIcon icon='Search' size={16} />
      ) : (
        <SFIcon icon='Down-2' size={16} />
      );

    return (
      <StyledAutocomplete
        {...props}
        className={`${classes.root} ${className}`}
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
          // Check needed if allowEmpty
          return typeof value === 'string'
            ? value === option.value
            : value.value === option.value;
        }}
        getOptionLabel={(option: SFMenuOption): string =>
          typeof option === 'string' ? option : option.label
        }
        renderInput={(
          params: AutocompleteRenderInputParams
        ): React.ReactNode => (
          <SFTextField
            {...params}
            inputRef={inputRef}
            label={label}
            required={required}
            error={error}
            helperText={helperText}
          />
        )}
        popupIcon={popupIcon}
        closeIcon={<SFIcon icon='Close' size={16} />}
      />
    );
  }
);
