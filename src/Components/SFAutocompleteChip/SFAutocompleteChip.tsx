import React, { ChangeEvent } from 'react';
import {
  styled,
  Autocomplete,
  AutocompleteRenderInputParams,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason
} from '@mui/material';
import { SFAutocompleteChipRender } from './SFAutocompleteChipRender/SFAutocompleteChipRender';
import {
  minWidthInputSize,
  SFAutocompleteInput
} from './SFAutocompleteInput/SFAutocompleteInput';
import { SFAutocompletePopper } from '../SFAutocomplete/SFAutocomplete';

export const StyledAutoComplete = styled(Autocomplete)({
  '& .MuiAutocomplete-endAdornment': {
    display: 'none'
  }
});

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
    if (reason === 'selectOption') {
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
      PopperComponent={SFAutocompletePopper}
    />
  );
};
