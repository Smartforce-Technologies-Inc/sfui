import React, { ChangeEvent } from 'react';
import {
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  AutocompleteRenderInputParams,
  styled
} from '@mui/material';
import { SFAutocompleteChipRender } from './SFAutocompleteChipRender/SFAutocompleteChipRender';
import {
  minWidthInputSize,
  SFAutocompleteInput
} from './SFAutocompleteInput/SFAutocompleteInput';
import {
  SFAutocompletePaper,
  StyledAutocomplete
} from '../SFAutocomplete/SFAutocomplete';

export const StyledAutocompleteChip = styled(StyledAutocomplete)(
  ({ value }) => ({
    '.MuiAutocomplete-inputRoot': {
      '&[class*="MuiOutlinedInput-root"]': {
        padding:
          Array.isArray(value) && value.length > 0
            ? '32px 13px 10px'
            : '5px 13px'
      }
    },
    '.MuiAutocomplete-endAdornment': {
      display: 'none'
    }
  })
);

const SFAutocompleteChipPaper = styled(SFAutocompletePaper)({
  '.MuiAutocomplete-listbox': {
    '.MuiAutocomplete-option': {
      padding: '6px 24px'
    }
  }
});

export interface SFAutocompleteChipProps {
  value: string[];
  inputMinWidth?: minWidthInputSize;
  label: string;
  error?: boolean;
  helperText?: string;
  options: string[];
  disabled?: boolean;
  required?: boolean;
  onChange: (newValue: string[]) => void;
}

export const SFAutocompleteChip = ({
  inputMinWidth = 30,
  label,
  error = false,
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
    if (reason === 'selectOption') {
      onChange(value);
    }
  };

  return (
    <StyledAutocompleteChip
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
      PaperComponent={SFAutocompleteChipPaper}
      isOptionEqualToValue={(option: string, value: string): boolean =>
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
          error={error}
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
