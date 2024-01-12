import * as React from 'react';
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteRenderInputParams,
  styled
} from '@mui/material';
import { SFMenuOption } from '../SFSelect/SFSelect';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';
import { SFPaper } from '../SFPaper/SFPaper';

const isOption = (value: string, options: SFMenuOption[]): boolean => {
  return !!options.find((o: SFMenuOption) => o.value === value);
};

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-input': {
    padding: '12.5px 4px 9.5px 3px !important',

    '& .MuiAutocomplete-endAdornment': {
      right: '18px'
    }
  },
  '& .Mui-focused .MuiAutocomplete-popupIndicatorOpen:not(.search)': {
    transform: 'rotate(180deg) !important'
  },
  '& .MuiAutocomplete-endAdornment': {
    height: '34px',
    width: '34px',
    marginTop: '-4px',
    '& button': {
      height: '100%',
      padding: '9px',
      transform: ' rotate(0deg) !important',
      pointerEvents: 'none',

      '&.default': {
        pointerEvents: 'auto',
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
  }
}));

const StyledOption = styled('li')(({ theme }) => ({
  '&[data-focus="true"]': {
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
}));

const StyledIcon = styled(SFIcon)(({ icon }) => ({
  pointerEvents: icon === 'Search' ? 'none' : 'auto',
  height: 'fit-content',
  display: 'inline-flex',
  '[class*=MuiAutocomplete-popupIndicatorOpen]': {
    backgroundColor: 'blue'
  }
}));

const StyledPaper = styled(SFPaper)({
  margin: '0 0 0 2px',
  boxShadow:
    '0px 5px 5px -3px rgba(0, 0, 0, 0.02), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  borderRadius: '2px'
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
  value?: string;
  onChange: (value: string | SFMenuOption) => void;
}

export const SFAutocomplete = React.forwardRef<
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
      if (reason !== 'removeOption') {
        props.onChange(option.value || '');
      }
    };

    const onOptionClick = (option: string): void => {
      props.onChange(option);
    };

    let options: SFMenuOption[] = [...props.options];

    if (allowEmpty) {
      options = [...options, { label: '', value: '' }];
    }

    const popupIcon =
      popupIconType !== 'none' && !props.freeSolo ? (
        <StyledIcon
          icon={popupIconType === 'search' ? 'Search' : 'Down-2'}
          size={16}
        />
      ) : (
        <></>
      );

    return (
      <StyledAutocomplete
        {...props}
        openOnFocus
        value={value}
        options={options}
        onChange={onChange}
        onInputChange={onInputChange}
        inputValue={inputValue}
        PaperComponent={(props): JSX.Element => (
          <StyledPaper {...props}>{props.children}</StyledPaper>
        )}
        isOptionEqualToValue={(
          option: SFMenuOption,
          value: SFMenuOption | string
        ): boolean =>
          typeof value === 'string'
            ? value === option.value
            : value.value === option.value
        }
        getOptionLabel={(option: SFMenuOption): string =>
          typeof option === 'string' ? option : option.label
        }
        renderOption={(props, option: SFMenuOption): React.ReactNode => (
          <StyledOption
            {...props}
            key={option.label}
            style={{
              padding:
                option.label && option.label.length > 0 ? '6px 24px' : '0'
            }}
            onClick={(_e): void =>
              onOptionClick(typeof option === 'string' ? option : option.label)
            }
          >
            {typeof option === 'string' ? option : option.label}
          </StyledOption>
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
        componentsProps={{ popupIndicator: { className: popupIconType } }}
        popupIcon={popupIcon}
        clearIcon={<SFIcon icon='Close' size={16} />}
      />
    );
  }
);
