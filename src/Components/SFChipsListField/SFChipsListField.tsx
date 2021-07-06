import React, { ChangeEvent } from 'react';
import FormControl from '@material-ui/core/FormControl';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason
} from '@material-ui/lab';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFChipListModal } from './SFChipFieldModal/SFChipFieldModal';
import { SFChipListRender } from './SFChipFieldRender/SFChipFieldRender';
import { hexToRgba } from '../../Helpers';
import { SFGrey } from '../../SFColors/SFColors';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';

const StyledAutoComplete = withStyles((theme: Theme) => ({
  root: {
    '& .MuiAutocomplete-endAdornment': {
      display: 'none'
    }
  },
  listbox: {
    padding: '13px 0'
  },
  paper: {
    marginLeft: '4px',
    marginRight: '-4px'
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

const StyledTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      height: 'inherit',
      minHeight: '56px',
      gap: '6px'
    }
  }
})(SFTextField);

const chipsDisplay = makeStyles({
  chipDisplayInline: {
    display: 'flex',
    gap: '8px',
    marginTop: '14px',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  chipDisplayBlock: {
    display: 'flex',
    gap: '8px',
    marginTop: '14px',
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
});

export type ChipFieldValueType = {
  value: string;
  isNew?: boolean;
  hasChanged?: boolean;
};

export interface SFChipsListFieldProps {
  chipSize?: 'small' | 'medium';
  chipDisplay?: 'inline' | 'block';
  emptyMessage?: string;
  label: string;
  options?: string[];
  items?: ChipFieldValueType[];
  delimiter?: ',' | ';';
  freeSolo?: boolean;
  disabled?: boolean;
  onChange: (newItems: ChipFieldValueType[]) => void;
}

export const SFChipsListField = ({
  chipSize = 'small',
  chipDisplay = 'inline',
  emptyMessage,
  label,
  options = [],
  items = [],
  delimiter = undefined,
  freeSolo = false,
  disabled = false,
  onChange
}: SFChipsListFieldProps): React.ReactElement<SFChipsListFieldProps> => {
  const [isPopperOpen, setIsPopperOpen] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [editedValue, setEditedValue] = React.useState<ChipFieldValueType>();
  const [inputValue, setInputValue] = React.useState<string>('');
  const { chipDisplayInline, chipDisplayBlock } = chipsDisplay();

  const savedValues: ChipFieldValueType[] = items.filter(
    (item: ChipFieldValueType) => item.isNew !== true
  );

  const inputValues: ChipFieldValueType[] = items.filter(
    (item: ChipFieldValueType) => item.isNew === true
  );

  const isValueInOptions = (value: string): string | undefined => {
    return options
      .filter(
        (option: string) =>
          !items.find((item: ChipFieldValueType) => item.value === option)
      )
      .find((option) => option.toLowerCase() === value.toLowerCase());
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

  const deleteValue = (input: ChipFieldValueType): void => {
    const index: number = items.indexOf(input);
    const values: ChipFieldValueType[] = [
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ];
    onChange(values);
  };

  const onEdit = (value: ChipFieldValueType): void => {
    if (options.length === 0 || freeSolo === true) {
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
      setIsPopperOpen(true);
      if ((event as InputEvent).inputType === 'insertLineBreak') {
        (event as InputEvent).preventDefault();
        let insertedValues: string[] = [];
        if (delimiter) {
          insertedValues = value.replace(/\n/g, '').split(`${delimiter}`);
        } else {
          insertedValues = [value.replace(/\n/g, '')];
        }

        let valuesToAdd: ChipFieldValueType[] = [];
        insertedValues.forEach((insertedValue: string) => {
          if (insertedValue.trim() !== '') {
            if (options.length === 0) {
              valuesToAdd = [
                ...valuesToAdd,
                { value: insertedValue.trim(), isNew: true }
              ];
            } else {
              const valueOption = isValueInOptions(insertedValue.trim());
              if (valueOption) {
                valuesToAdd = [
                  ...valuesToAdd,
                  { value: valueOption, isNew: true }
                ];
              }
            }
          }
        });
        addValue(valuesToAdd);
        setInputValue('');
      }
    }
  };

  const onAutoCompleteChange = (
    _event: ChangeEvent,
    value: string,
    reason: AutocompleteChangeReason
  ): void => {
    if (reason === 'select-option' || reason === 'create-option') {
      if (typeof value[value.length - 1] === 'string') {
        const currentValue: string = value[value.length - 1];
        const values: string[] = delimiter
          ? currentValue.split(`${delimiter}`)
          : [currentValue];
        let currentValues: ChipFieldValueType[] = [];
        values.forEach((value: string) => {
          if (value.trim() !== '') {
            const matchValue: string | undefined = options.find(
              (option) => option.toLowerCase() === value.trim().toLowerCase()
            );
            if (matchValue) {
              if (items.findIndex((item) => item.value === matchValue) === -1) {
                currentValues = [
                  ...currentValues,
                  { value: matchValue, isNew: true }
                ];
              }
            } else {
              currentValues = [
                ...currentValues,
                { value: value.trim(), isNew: true }
              ];
            }
          }
        });
        addValue(currentValues);
      }
      setIsPopperOpen(false);
      setInputValue('');
    }
  };

  const DisplayValues = (): JSX.Element => {
    return (
      <div
        className={` ${
          chipDisplay === 'block' ? chipDisplayBlock : chipDisplayInline
        }`}
      >
        {savedValues.length !== 0 && (
          <SFChipListRender
            values={savedValues}
            isChipFullWidth={chipDisplay === 'block'}
            chipSize={chipSize}
            disabled={disabled}
            onDelete={deleteValue}
            onEdit={onEdit}
          />
        )}
        {emptyMessage && (!savedValues || savedValues.length === 0) && (
          <p>{emptyMessage}</p>
        )}
      </div>
    );
  };

  return (
    <FormControl fullWidth>
      <SFChipListModal
        value={editedValue}
        open={isModalOpen}
        onEdit={editValue}
        onClose={(): void => setIsModalOpen(false)}
      />
      <StyledAutoComplete
        disabled={disabled}
        options={filteredOptions(options)}
        multiple
        value={inputValues}
        inputValue={inputValue}
        onChange={onAutoCompleteChange}
        onInputChange={onInputChange}
        open={options.length !== 0 ? isPopperOpen : false}
        onClose={(): void => setIsPopperOpen(false)}
        filterSelectedOptions
        freeSolo={freeSolo}
        getOptionSelected={(
          option: string,
          value: ChipFieldValueType
        ): boolean => option === value.value}
        renderTags={(value: ChipFieldValueType[]): JSX.Element => (
          <SFChipListRender
            isChipFullWidth={false}
            chipSize='small'
            values={value}
            disabled={disabled}
            onDelete={deleteValue}
            onEdit={onEdit}
          />
        )}
        renderInput={(params: AutocompleteRenderInputParams): JSX.Element => (
          <StyledTextField {...params} multiline rows={1} label={label} />
        )}
      />
      <DisplayValues />
    </FormControl>
  );
};
