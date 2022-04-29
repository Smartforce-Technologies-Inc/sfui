import React, { ChangeEvent } from 'react';
import {
  styled,
  FormControl,
  Autocomplete,
  AutocompleteRenderInputParams,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason
} from '@mui/material';
import { SFChipListModal } from './SFChipFieldModal/SFChipFieldModal';
import { SFChipListRender } from './SFChipFieldRender/SFChipFieldRender';
import { SFAutocompletePopper } from '../SFAutocomplete/SFAutocomplete';
import { SFChipFieldTextField } from './SFChipFieldTextField/SFChipFieldTextField';
import { SFChipListDisplayValues } from './SFChipFieldDisplayValues/SFChipFieldDisplayValues';

const StyledAutoComplete = styled(Autocomplete)({
  '& .MuiAutocomplete-endAdornment': {
    display: 'none'
  },

  '& .MuiAutocomplete-paper': {
    marginLeft: '4px',
    marginRight: '-4px'
  }
});

export type minWidthInputSize = number | 'auto' | 'full-width';

export type ChipFieldValueType = {
  value: string;
  isNew?: boolean;
  hasChanged?: boolean;
  isValid?: boolean;
};

export interface SFChipsListFieldProps {
  itemChipSize?: 'small' | 'medium';
  itemChipDisplay?: 'inline' | 'block';
  items?: ChipFieldValueType[];
  inputMinWidth?: minWidthInputSize;
  emptyMessage?: string;
  label: string;
  helperText?: string;
  options?: string[];
  delimiters?: string[];
  freeSolo?: boolean;
  disabled?: boolean;
  required?: boolean;
  isEditable?: boolean;
  inputType?: string;
  isValid?: (value: string) => boolean;
  onChange: (newItems: ChipFieldValueType[]) => void;
}

export const SFChipsListField = ({
  itemChipSize = 'small',
  itemChipDisplay = 'inline',
  inputMinWidth = 30,
  emptyMessage,
  label,
  helperText,
  options = [],
  items = [],
  delimiters = [','],
  freeSolo = false,
  disabled = false,
  isEditable = false,
  inputType = 'text',
  isValid,
  onChange
}: SFChipsListFieldProps): React.ReactElement<SFChipsListFieldProps> => {
  const [isPopperOpen, setIsPopperOpen] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [editedValue, setEditedValue] = React.useState<ChipFieldValueType>();
  const [inputValue, setInputValue] = React.useState<string>('');
  // const { chipDisplayInline, chipDisplayBlock } = chipsDisplay();

  const isFreeSolo = (): boolean => {
    return freeSolo || options.length === 0;
  };

  const savedValues: ChipFieldValueType[] = items.filter(
    (item: ChipFieldValueType) => item.isNew !== true
  );

  const inputValues: ChipFieldValueType[] = items.filter(
    (item: ChipFieldValueType) => item.isNew === true
  );

  const createNewValue = (value: string): ChipFieldValueType => {
    return {
      value: value,
      isNew: true,
      isValid: isValid ? isValid(value) : true
    };
  };

  const addValue = (input: ChipFieldValueType[]): void => {
    const values: ChipFieldValueType[] = [...items, ...input];
    onChange(values);
  };

  const editValue = (
    previousInput: ChipFieldValueType,
    input: ChipFieldValueType
  ): void => {
    const index: number = items.findIndex(
      (item) => item.value === previousInput.value
    );
    const values: ChipFieldValueType[] = [
      ...items.slice(0, index),
      input,
      ...items.slice(index + 1)
    ];
    onChange(values);
  };

  const onDelete = (input: ChipFieldValueType): void => {
    const index: number = items.indexOf(input);
    const values: ChipFieldValueType[] = [
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ];
    onChange(values);
  };

  const onEdit = (value: ChipFieldValueType): void => {
    if (isFreeSolo()) {
      setEditedValue(value);
      setIsModalOpen(true);
    }
  };

  const filteredOptions = (options: string[]): string[] => {
    if (savedValues.length !== 0) {
      return options.filter(
        (option: string) =>
          !savedValues.find((item: ChipFieldValueType) => item.value === option)
      );
    } else {
      return options;
    }
  };

  const getValuesFromInputField = (value: string): string[] => {
    const separatorRegExp = new RegExp(delimiters.join('|'), 'gi');
    const inputValues: string[] = value.split(separatorRegExp);

    return Array.from(new Set(inputValues));
  };

  const getValueFromOptions = (value: string): string | undefined => {
    return options.find(
      (option) => option.toLowerCase() === value.toLowerCase()
    );
  };

  const isValueAlreadyAdded = (value: string): boolean => {
    const matchValueItem: ChipFieldValueType | undefined = items.find(
      (item) => item.value.toLowerCase() === value.toLowerCase()
    );

    return matchValueItem !== undefined;
  };

  const onInputChange = (
    _event: ChangeEvent,
    value: string,
    reason: AutocompleteInputChangeReason
  ): void => {
    if (reason === 'reset') {
      if (inputValue !== '') {
        setInputValue(inputValue);
      } else {
        setIsPopperOpen(false);
      }
    } else {
      setInputValue(value);
      const nativeEvent: InputEvent = _event.nativeEvent as InputEvent;

      if (nativeEvent.data && delimiters.includes(nativeEvent.data)) {
        _event.preventDefault();
        setIsPopperOpen(false);
        const insertedValues: string[] = getValuesFromInputField(value);

        let valuesToAdd: ChipFieldValueType[] = [];
        insertedValues.forEach((insertedValue: string) => {
          const valueTrim: string = insertedValue.trim();

          if (valueTrim !== '' && !isValueAlreadyAdded(valueTrim)) {
            const valueOption: string | undefined = getValueFromOptions(
              valueTrim
            );

            if (valueOption) {
              valuesToAdd = [...valuesToAdd, createNewValue(valueOption)];
            } else {
              if (isFreeSolo()) {
                valuesToAdd = [...valuesToAdd, createNewValue(valueTrim)];
              }
            }
          }
        });
        addValue(valuesToAdd);
        setInputValue('');
      } else {
        setIsPopperOpen(true);
      }
    }
  };

  const onAutoCompleteChange = (
    _event: ChangeEvent,
    value: (ChipFieldValueType | string)[],
    reason: AutocompleteChangeReason
  ): void => {
    if (reason === 'selectOption' || reason === 'createOption') {
      const lastItem = value[value.length - 1];

      if (typeof lastItem === 'string') {
        const values: string[] = getValuesFromInputField(lastItem as string);
        let currentValues: ChipFieldValueType[] = [];

        values.forEach((value: string) => {
          const valueTrim: string = value.trim();

          if (valueTrim !== '' && !isValueAlreadyAdded(valueTrim)) {
            const matchValueOption: string | undefined = getValueFromOptions(
              valueTrim
            );

            currentValues = [
              ...currentValues,
              createNewValue(matchValueOption || valueTrim)
            ];
          }
        });
        addValue(currentValues);
      }
      setIsPopperOpen(false);
      setInputValue('');
    }
  };

  return (
    <Fragment>
      <SFChipListModal
        value={editedValue}
        open={isModalOpen}
        isValid={isValid}
        onEdit={editValue}
        onClose={(): void => setIsModalOpen(false)}
      />
      <StyledAutoComplete
        disabled={disabled}
        options={filteredOptions(options)}
        multiple
        fullWidth
        value={inputValues}
        inputValue={inputValue}
        onChange={onAutoCompleteChange}
        onInputChange={onInputChange}
        open={options.length > 0 ? isPopperOpen : false}
        onClose={(): void => setIsPopperOpen(false)}
        filterSelectedOptions
        freeSolo={isFreeSolo()}
        isOptionEqualToValue={(
          option: string,
          value: ChipFieldValueType
        ): boolean => option === value.value}
        renderTags={(value: ChipFieldValueType[]): JSX.Element => (
          <SFChipListRender
            isChipFullWidth={false}
            chipSize='small'
            values={value}
            disabled={disabled}
            onDelete={onDelete}
            onEdit={isEditable ? onEdit : undefined}
            isValid={isValid}
          />
        )}
        renderInput={(params: AutocompleteRenderInputParams): JSX.Element => (
          <SFChipFieldTextField
            {...params}
            type={inputType}
            rows={1}
            label={label}
            helperText={helperText}
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

      <SFChipListDisplayValues
        values={savedValues}
        emptyMessage={emptyMessage}
        chipSize={itemChipSize}
        itemChipDisplay={itemChipDisplay}
        disabled={disabled}
        onDelete={onDelete}
        onEdit={isEditable ? onEdit : undefined}
        isValid={isValid}
      />
    </FormControl>
  );
};
