import React, { ChangeEvent } from 'react';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason
} from '@material-ui/lab';
import { hexToRgba } from '../../Helpers';
import { SFGrey } from '../../SFColors/SFColors';
import { withStyles, Theme } from '@material-ui/core/styles';
import { SFAutocompleteChipRender } from './SFAutocompleteChipRender/SFAutocompleteChipRender';
import {
  minWidthInputSize,
  SFAutocompleteInput
} from './SFAutocompleteInput/SFAutocompleteInput';

export const StyledAutoComplete = withStyles((theme: Theme) => ({
  root: {
    '& .MuiAutocomplete-endAdornment': {
      display: 'none'
    }
  },
  listbox: {
    padding: '13px 0'
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

export interface SFAutocompleteChipProps {
  value: string[];
  inputMinWidth?: minWidthInputSize;
  label: string;
  helperText?: string;
  options: string[];
  disabled?: boolean;
  required?: boolean;
  onChange: (newValue: string[]) => void;
}

export const SFAutocompleteChip = ({
  inputMinWidth = 30,
  label,
  helperText,
  options = [],
  value = [],
  disabled = false,
  required = false,
  onChange
}: SFAutocompleteChipProps): React.ReactElement<SFAutocompleteChipProps> => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const onDelete = (input: string): void => {
    const index: number = value.indexOf(input);
    const values: string[] = [
      ...value.slice(0, index),
      ...value.slice(index + 1)
    ];
    onChange(values);
  };

  const onInputChange = (
    _event: ChangeEvent,
    input: string,
    reason: AutocompleteInputChangeReason
  ): void => {
    if (reason === 'reset') {
      setInputValue('');
    } else {
      setInputValue(input);
    }
  };

  const onAutoCompleteChange = (
    _event: ChangeEvent,
    value: string[],
    reason: AutocompleteChangeReason
  ): void => {
    if (reason === 'select-option') {
      onChange(value);
    }
  };

  return (
    <StyledAutoComplete
      disabled={disabled}
      clearOnBlur
      options={options}
      multiple
      fullWidth
      value={value}
      inputValue={inputValue}
      onInputChange={onInputChange}
      onChange={onAutoCompleteChange}
      filterSelectedOptions
      getOptionSelected={(option: string, value: string): boolean =>
        option === value
      }
      renderTags={(value: string[]): JSX.Element => (
        <SFAutocompleteChipRender
          disabled={disabled}
          values={value}
          onDelete={onDelete}
        />
      )}
      renderInput={(params: AutocompleteRenderInputParams): JSX.Element => (
        <SFAutocompleteInput
          {...params}
          rows={1}
          label={label}
          helperText={helperText}
          required={required}
          minWidth={
            inputMinWidth === 'full-width'
              ? '100%'
              : inputMinWidth === 'auto'
              ? 'auto'
              : `${inputMinWidth}px`
          }
        />
      )}
    />
  );
};
