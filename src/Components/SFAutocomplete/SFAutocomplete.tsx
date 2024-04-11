import * as React from 'react';
import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteInputChangeReason,
  AutocompleteProps,
  AutocompleteRenderInputParams,
  Paper,
  styled
} from '@mui/material';
import { SFMenuOption } from '../SFSelect/SFSelect';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey, SFSurfaceLight } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const isOption = (value: string, options: SFMenuOption[]): boolean => {
  return !!options.find((o: SFMenuOption) => o.value === value);
};

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '.MuiAutocomplete-inputRoot': {
    '&[class*="MuiOutlinedInput-root"]': {
      padding: '5px 13px',

      '& input.MuiAutocomplete-input:first-child': {
        padding: '22px 0 0'
      },

      '& .MuiAutocomplete-endAdornment': {
        right: '18px'
      }
    }
  },
  '.MuiAutocomplete-endAdornment': {
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

export const SFAutocompletePaper = styled(Paper)(({ theme }) => ({
  margin: '0 0 0 2px',
  boxShadow:
    '0px 5px 5px -3px rgba(0, 0, 0, 0.02), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  borderRadius: '2px',

  '.MuiAutocomplete-listbox': {
    padding: '13px 0',
    backgroundColor:
      theme.palette.mode === 'light' ? SFSurfaceLight : SFGrey[800],

    '.MuiAutocomplete-option': {
      padding: 0,

      '&.Mui-focused': {
        backgroundColor:
          theme.palette.mode === 'light'
            ? hexToRgba(SFGrey.A100 as string, 0.3)
            : hexToRgba(SFGrey[500] as string, 0.3),
        '&:active, &[aria-selected="true"]': {
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

interface PopupIconProps {
  type?: 'default' | 'search' | 'none';
}

const PopupIcon = ({
  type = 'default'
}: PopupIconProps): React.ReactElement<PopupIconProps> => {
  const iconName = type === 'search' ? 'Search' : 'Down-2';
  return <SFIcon icon={iconName} size={16} />;
};

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
  value?: string;
  onChange: (value: string | SFMenuOption) => void;
}

const SFAutocompleteBase = React.forwardRef<
  SFAutocompleteRefHandler,
  SFAutocompleteProps
>(
  (
    {
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
    const [inputValue, setInputValue] = React.useState<string>('');

    React.useEffect(() => {
      if (value && isOption(value, props.options)) {
        setInputValue(value);
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
        setInputValue(value || '');
      }
    };

    const onChange = (
      _event: React.ChangeEvent,
      option: SFMenuOption,
      reason: AutocompleteChangeReason
    ): void => {
      if (reason !== 'createOption' && reason !== 'removeOption') {
        props.onChange(option || '');
      }
    };

    let options: SFMenuOption[] = [...props.options];

    if (allowEmpty) {
      options = [...options, { label: '', value: '' }];
    }

    return (
      <StyledAutocomplete
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
          // Check needed if allowEmpty
          return typeof value === 'string'
            ? value === option.value
            : value.value === option.value;
        }}
        getOptionLabel={(option: SFMenuOption): string =>
          typeof option === 'string' ? option : option.label
        }
        renderOption={(props, option: SFMenuOption): React.ReactNode => (
          <li
            {...props}
            style={{
              padding:
                option.label && option.label.length > 0 ? '6px 24px' : '0'
            }}
          >
            {typeof option === 'string' ? option : option.label}
          </li>
        )}
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
        popupIcon={<PopupIcon type={popupIconType} />}
        clearIcon={<SFIcon icon='Close' size={16} />}
        PaperComponent={SFAutocompletePaper}
      />
    );
  }
);

export const SFAutocomplete = styled(SFAutocompleteBase)(
  ({ popupIconType }) => ({
    '& .MuiAutocomplete-popupIndicator': {
      pointerEvents: popupIconType === 'search' ? 'none' : 'auto',
      display: popupIconType !== 'none' ? 'inline-flex' : 'none',
      padding: popupIconType !== 'none' ? '9px' : '0'
    },
    '& .MuiAutocomplete-popupIndicatorOpen': {
      transform: popupIconType === 'search' ? 'none' : 'rotate(180deg)'
    }
  })
);
