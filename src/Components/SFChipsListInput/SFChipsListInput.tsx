import React, { KeyboardEvent } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import { SFTextField } from '../SFTextField/SFTextField';
import {
  SFChipListModal,
  EditChipListValue
} from './SFChipListModal/SFChipListModal';
import { SFChipListRender } from './SFChipListRender/SFChipListRender';
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
      gap: '6px',
      '& .MuiInputBase-input': {}
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
    flexDirection: 'column'
  }
});

export type ChipListValueType = {
  value: string;
  isNew?: boolean;
  hasChanged?: boolean;
};

export interface SFChipsListInputProps {
  chipSize?: 'small' | 'medium';
  chipDisplay?: 'inline' | 'block';
  emptyMessage?: string;
  label: string;
  options?: string[];
  itemsLabel: string;
  items?: ChipListValueType[];
  freeSolo: boolean;
  disabled: boolean;
  onChange: (newItems: ChipListValueType[]) => void;
}

export const SFChipsListInput = ({
  chipSize = 'small',
  chipDisplay = 'inline',
  emptyMessage,
  label = 'Bagel',
  options = [],
  itemsLabel,
  items = [],
  freeSolo = false,
  disabled = false,
  onChange
}: SFChipsListInputProps): React.ReactElement<SFChipsListInputProps> => {
  const [inputValues, setInputValues] = React.useState<ChipListValueType[]>([]);
  const [displayValues, setDisplayValues] = React.useState<ChipListValueType[]>(
    []
  );
  const [isPopperOpen, setIsPopperOpen] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [editedValue, setEditedValue] = React.useState<EditChipListValue>({
    label: '',
    input: { value: '' },
    index: -1
  });
  const { chipDisplayInline, chipDisplayBlock } = chipsDisplay();

  React.useEffect(() => {
    let incomingInputValues: ChipListValueType[] = [];
    let incomingDisplayValues: ChipListValueType[] = [];

    items.map((item: ChipListValueType): void => {
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

  const addValue = (input: ChipListValueType): void => {
    let values: ChipListValueType[] = !input.isNew
      ? displayValues
      : inputValues;
    values = [...values, input];

    if (!input.isNew) {
      setDisplayValues(values);
    } else {
      setInputValues(values);
    }
  };

  const editValue = (input: ChipListValueType, index: number): void => {
    let values: ChipListValueType[] = !input.isNew
      ? displayValues
      : inputValues;
    values = [...values.slice(0, index), input, ...values.slice(index + 1)];

    if (!input.isNew) {
      setDisplayValues(values);
    } else {
      setInputValues(values);
    }
  };

  const deleteValue = (index: number, input?: ChipListValueType): void => {
    let values: ChipListValueType[] =
      input && !input.isNew ? displayValues : inputValues;
    values = [...values.slice(0, index), ...values.slice(index + 1)];

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
          addValue({ value: target.value, isNew: true });
        }

        target.value = '';
      }
    } else if (event.key === 'Backspace') {
      if (inputValues.length !== 0 && target.value === '') {
        event.preventDefault();
        deleteValue(inputValues.length - 1);
        target.value = '';
      }
    }
  };

  const onInputChange = (value: string): void => {
    if (!isPopperOpen && value.length > 0) {
      setIsPopperOpen(true);
    } else if (isPopperOpen && value.length === 0) {
      setIsPopperOpen(false);
    }
  };

  const filterOptions = (options: string[]): string[] => {
    const values: ChipListValueType[] = [...displayValues, ...inputValues];
    const filteredOptions = options.filter((option: string) => {
      return !values.find((item: ChipListValueType) => item.value === option);
    });
    return filteredOptions;
  };

  const DisplayValues = (): JSX.Element => {
    return (
      <div
        className={`${chipDisplayInline} ${
          chipDisplay === 'block' ? chipDisplayBlock : ''
        }`}
      >
        {displayValues && (
          <SFChipListRender
            values={displayValues}
            valuesLabel={itemsLabel}
            isChipFullWidth={chipDisplay === 'block'}
            chipSize={chipSize}
            disabled={disabled}
            onDelete={(value: ChipListValueType, index: number): void =>
              deleteValue(index, value)
            }
            onEdit={(value: EditChipListValue): void => {
              setEditedValue(value);
              setIsModalOpen(true);
            }}
          />
        )}
        {emptyMessage && (!displayValues || displayValues.length === 0) && (
          <p>{emptyMessage}</p>
        )}
      </div>
    );
  };

  return (
    <FormControl fullWidth>
      <SFChipListModal
        editValue={editedValue}
        open={isModalOpen}
        onEdit={(value: ChipListValueType, index: number): void =>
          editValue(value, index)
        }
        onClose={(): void => setIsModalOpen(false)}
      />
      <StyledAutoComplete
        disabled={disabled}
        options={options}
        multiple
        value={inputValues}
        filterSelectedOptions
        renderTags={(value: ChipListValueType[]): JSX.Element => {
          return (
            <SFChipListRender
              isChipFullWidth={false}
              chipSize='small'
              values={value}
              valuesLabel={itemsLabel}
              disabled={disabled}
              onDelete={(value: ChipListValueType, index: number): void =>
                deleteValue(index, value)
              }
              onEdit={(value: EditChipListValue): void => {
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
        filterOptions={(options: string[]): string[] => filterOptions(options)}
        getOptionSelected={(
          option: string,
          value: ChipListValueType
        ): boolean => option === value.value}
        open={options.length !== 0 ? isPopperOpen : false}
        onChange={(event: React.ChangeEvent, value: string): void => {
          setIsPopperOpen(false);
          if (options.length !== 0) {
            addValue({
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
