import React, { ChangeEvent, Fragment } from 'react';
import {
  AutocompleteRenderInputParams,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason
} from '@material-ui/lab';
import { SFChipListModal } from '../SFChipListField/SFChipFieldModal/SFChipFieldModal';
import { SFChipListRender } from '../SFChipListField/SFChipFieldRender/SFChipFieldRender';
import { StyledAutocompleteChip } from '../SFAutocompleteChip/SFAutocompleteChip';
import {
  minWidthInputSize,
  SFAutocompleteInput
} from '../SFAutocompleteChip/SFAutocompleteInput/SFAutocompleteInput';

export type ChipInputFieldValueType = {
  value: string;
  hasChanged?: boolean;
  isValid?: boolean;
};

export interface SFChipListInputProps {
  items?: ChipInputFieldValueType[];
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
  onChange: (newItems: ChipInputFieldValueType[]) => void;
}

export const SFChipListInput = ({
  items = [],
  inputMinWidth = 30,
  label,
  helperText,
  options = [],
  delimiters = [','],
  freeSolo = false,
  disabled = false,
  isEditable = false,
  inputType = 'text',
  isValid,
  onChange
}: SFChipListInputProps): React.ReactElement<SFChipListInputProps> => {
  const [isPopperOpen, setIsPopperOpen] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [
    editedValue,
    setEditedValue
  ] = React.useState<ChipInputFieldValueType>();
  const [inputValue, setInputValue] = React.useState<string>('');

  const isFreeSolo = (): boolean => {
    return freeSolo || options.length === 0;
  };

  const createNewValue = (value: string): ChipInputFieldValueType => {
    return {
      value: value,
      isValid: isValid ? isValid(value) : true
    };
  };

  const addValue = (input: ChipInputFieldValueType[]): void => {
    const values: ChipInputFieldValueType[] = [...items, ...input];
    onChange(values);
  };

  const editValue = (
    previousInput: ChipInputFieldValueType,
    input: ChipInputFieldValueType
  ): void => {
    const index: number = items.findIndex(
      (item) => item.value === previousInput.value
    );
    const values: ChipInputFieldValueType[] = [
      ...items.slice(0, index),
      input,
      ...items.slice(index + 1)
    ];
    onChange(values);
  };

  const deleteValue = (input: ChipInputFieldValueType): void => {
    const index: number = items.indexOf(input);
    const values: ChipInputFieldValueType[] = [
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ];
    onChange(values);
  };

  const onEdit = (value: ChipInputFieldValueType): void => {
    if (isFreeSolo()) {
      setEditedValue(value);
      setIsModalOpen(true);
    }
  };

  const filteredOptions = (options: string[]): string[] => {
    return options;
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
    const matchValueItem: ChipInputFieldValueType | undefined = items.find(
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

        let valuesToAdd: ChipInputFieldValueType[] = [];
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
    value: (ChipInputFieldValueType | string)[],
    reason: AutocompleteChangeReason
  ): void => {
    if (reason === 'select-option' || reason === 'create-option') {
      const lastItem = value[value.length - 1];

      if (typeof lastItem === 'string') {
        const values: string[] = getValuesFromInputField(lastItem as string);
        let currentValues: ChipInputFieldValueType[] = [];

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
      <StyledAutocompleteChip
        disabled={disabled}
        options={filteredOptions(options)}
        multiple
        fullWidth
        value={items}
        onChange={onAutoCompleteChange}
        onInputChange={onInputChange}
        inputValue={inputValue}
        open={options.length > 0 ? isPopperOpen : false}
        onClose={(): void => setIsPopperOpen(false)}
        filterSelectedOptions
        freeSolo={isFreeSolo()}
        getOptionSelected={(
          option: string,
          value: ChipInputFieldValueType
        ): boolean => option === value.value}
        renderTags={(value: ChipInputFieldValueType[]): JSX.Element => (
          <SFChipListRender
            isChipFullWidth={false}
            chipSize='small'
            values={value}
            disabled={disabled}
            onDelete={deleteValue}
            onEdit={isEditable ? onEdit : undefined}
            isValid={isValid}
          />
        )}
        renderInput={(params: AutocompleteRenderInputParams): JSX.Element => (
          <SFAutocompleteInput
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
      />
    </Fragment>
  );
};
