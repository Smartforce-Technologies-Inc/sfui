import React, { KeyboardEvent } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import { SFTextField } from '../SFTextField/SFTextField';
import {
  SFChipListModal,
  EditChipValue,
  emptyEditValue
} from './SFChipListModal/SFChipListModal';
import { SFChipListRender } from './SFChipListRender/SFChipListRender';
import { hexToRgba } from '../../Helpers';
import { SFGrey } from '../../SFColors/SFColors';
import { withStyles, Theme } from '@material-ui/core/styles';

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
      gap: '6px',
      '& .MuiInputBase-input': {}
    }
  }
})(SFTextField);

export type ValueType = {
  value: string;
  isNew?: boolean;
  hasChanged?: boolean;
};

export interface SFChipsListInputProps {
  chipSize?: 'small' | 'medium';
  chipDisplay?: 'inline' | 'block';
  emptyMessage: string;
  label: string;
  options?: string[];
  items?: ValueType[];
  freeSolo: boolean;
  onChange: (newItems: ValueType[]) => void;
}

export const SFChipsListInput = ({
  chipSize = 'small',
  chipDisplay = 'inline',
  emptyMessage = 'No items selected',
  label = 'Bagel',
  options = [],
  items = [],
  freeSolo = false,
  onChange
}: SFChipsListInputProps): React.ReactElement<SFChipsListInputProps> => {
  const [inputValues, setInputValues] = React.useState<ValueType[]>([]);
  const [displayValues, setDisplayValues] = React.useState<ValueType[]>([]);
  const [isPopperOpen, setIsPopperOpen] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [editedValue, setEditedValue] = React.useState<EditChipValue>(
    emptyEditValue
  );

  React.useEffect(() => {
    let incomingInputValues: ValueType[] = [];
    let incomingDisplayValues: ValueType[] = [];

    items.map((item: ValueType): void => {
      if (item.isNew === true) {
        incomingInputValues = [...incomingInputValues, item];
      } else {
        incomingDisplayValues = [...incomingDisplayValues, item];
      }
    });

    setInputValues(incomingInputValues);
    setDisplayValues(incomingDisplayValues);
  }, [items]);

  React.useEffect(() => {
    onChange([...displayValues, ...inputValues]);
  }, [inputValues, displayValues]);

  const handleValueAction = (
    actionType: string,
    input?: ValueType,
    index?: number
  ): void => {
    let values: ValueType[] =
      input && !input.isNew ? displayValues : inputValues;

    switch (actionType) {
      case 'addValue':
        values = [...values, input as ValueType];
        break;

      case 'editValue':
        values = [
          ...values.slice(0, index as number),
          input as ValueType,
          ...values.slice((index as number) + 1)
        ];
        break;

      default:
        values = [
          ...values.slice(0, index as number),
          ...values.slice((index as number) + 1)
        ];
        break;
    }

    if (input && !input.isNew) {
      setDisplayValues(values);
    } else {
      setInputValues(values);
    }
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      event.preventDefault();
      if ((freeSolo === true && options.length !== 0) || options.length === 0) {
        if (target.value.trim() !== '') {
          handleValueAction('addValue', { value: target.value, isNew: true });
        }

        target.value = '';
      }
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      if (inputValues.length !== 0) {
        handleValueAction('', undefined, inputValues.length - 1);
      }
      target.value = '';
    }
  };

  const onInputChange = (value: string): void => {
    if (!isPopperOpen && value.length > 0) {
      setIsPopperOpen(true);
    } else if (isPopperOpen && value.length === 0) {
      setIsPopperOpen(false);
    }
  };

  const DisplayValues = (): JSX.Element => {
    return (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginTop: '14px',
          flexWrap: 'wrap',
          flexDirection: chipDisplay === 'inline' ? 'row' : 'column'
        }}
      >
        {displayValues && (
          <SFChipListRender
            values={displayValues}
            isChipFullWidth={chipDisplay === 'block'}
            chipSize={chipSize}
            onDelete={(deleteValue: ValueType, index: number): void =>
              handleValueAction('', deleteValue, index)
            }
            onEdit={(value: EditChipValue): void => {
              setEditedValue(value);
              setIsModalOpen(true);
            }}
          />
        )}
        {(!displayValues || displayValues.length === 0) && (
          <p>{emptyMessage}</p>
        )}
      </div>
    );
  };

  return (
    <FormControl fullWidth>
      <SFChipListModal
        editValue={editedValue.input}
        index={editedValue.index}
        type={editedValue.type}
        open={isModalOpen}
        onEdit={(value: ValueType, index: number): void =>
          handleValueAction('editValue', value, index)
        }
        onClose={(): void => {
          setEditedValue(emptyEditValue);
          setIsModalOpen(false);
        }}
      />
      <StyledAutoComplete
        options={options}
        multiple
        value={inputValues}
        filterSelectedOptions
        renderTags={(value: ValueType[]): JSX.Element => {
          return (
            <SFChipListRender
              isChipFullWidth={false}
              chipSize='small'
              values={value}
              onDelete={(deleteValue: ValueType, index: number): void =>
                handleValueAction('', deleteValue, index)
              }
              onEdit={(value: EditChipValue): void => {
                setEditedValue(value);
                setIsModalOpen(true);
              }}
            />
          );
        }}
        renderInput={(params: AutocompleteRenderInputParams): JSX.Element => (
          <StyledTextField
            {...params}
            rows={1}
            label={label}
            multiline
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              onInputChange(event.target.value)
            }
          />
        )}
        filterOptions={(options: string[]): string[] => {
          const values: ValueType[] = [...displayValues, ...inputValues];
          const filteredOptions = options.filter((option: string) => {
            return !values.find((item: ValueType) => item.value === option);
          });
          return filteredOptions;
        }}
        getOptionSelected={(option: string, value: ValueType): boolean => {
          return option === value.value;
        }}
        open={options.length !== 0 ? isPopperOpen : false}
        onChange={(event, value: string): void => {
          setIsPopperOpen(false);
          if (options.length !== 0) {
            handleValueAction('addValue', {
              value: value[value.length - 1],
              isNew: true
            });
          }
        }}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>): void => {
          onKeyPress(event);
        }}
        freeSolo={freeSolo}
      />
      <DisplayValues />
    </FormControl>
  );
};
