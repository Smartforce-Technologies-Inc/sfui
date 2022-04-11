import React, { ChangeEvent } from 'react';
import FormControl from '@material-ui/core/FormControl';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason
} from '@material-ui/lab';
import { SFTextField, SFTextFieldProps } from '../SFTextField/SFTextField';
import { hexToRgba } from '../../Helpers';
import { SFGrey } from '../../SFColors/SFColors';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { SFAutocompleteChipModal } from './SFAutocompleteChipModal/SFAutocompleteChipModal';
import { SFAutocompleteChipRender } from './SFAutocompleteChipRender/SFAutocompleteChipRender';

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

export type minWidthInputSize = number | 'auto' | 'full-width';

interface TextFieldStylesProps extends SFTextFieldProps {
  minWidth: string;
}

const useTextFieldStyles = makeStyles({
  root: {
    '& .MuiInputBase-root': {
      height: 'inherit',
      minHeight: '56px',
      gap: '6px',
      padding: '28px 9px 9px !important',
      '& .MuiAutocomplete-input': {
        padding: '0',
        minWidth: (props: TextFieldStylesProps): string => props.minWidth
      },
      '& .MuiFormControl-root .MuiChip-outlined': {
        margin: '3px auto 2px'
      }
    }
  }
});

function StyledTextField(props: TextFieldStylesProps): React.ReactElement {
  const { minWidth, ...other } = props;
  const classes = useTextFieldStyles(props);
  return <SFTextField className={classes.root} {...other} />;
}

export interface SFAutocompleteChipProps {
  items?: string[];
  inputMinWidth?: minWidthInputSize;
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
  onChange: (newItems: string[]) => void;
}

export const SFAutocompleteChip = ({
  inputMinWidth = 30,
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
}: SFAutocompleteChipProps): React.ReactElement<SFAutocompleteChipProps> => {
  const [isPopperOpen, setIsPopperOpen] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [editedValue, setEditedValue] = React.useState<string>();
  const [inputValue, setInputValue] = React.useState<string>('');

  const isFreeSolo = (): boolean => {
    return freeSolo || options.length === 0;
  };

  const createNewValue = (value: string): string => {
    return value;
  };

  const addValue = (input: string[]): void => {
    const values: string[] = [...items, ...input];
    onChange(values);
  };

  const editValue = (input: string): void => {
    const index: number = items.findIndex((item) => input === item);
    const values: string[] = [
      ...items.slice(0, index),
      input,
      ...items.slice(index + 1)
    ];
    onChange(values);
  };

  const deleteValue = (input: string): void => {
    const index: number = items.indexOf(input);
    const values: string[] = [
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ];
    onChange(values);
  };

  const onEdit = (value: string): void => {
    if (isFreeSolo()) {
      setEditedValue(value);
      setIsModalOpen(true);
    }
  };

  const filteredOptions = (options: string[]): string[] => {
    if (items.length !== 0) {
      return options.filter(
        (option: string) => !items.find((item: string) => item === option)
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
    const matchValueItem: string | undefined = items.find(
      (item) => item.toLowerCase() === value.toLowerCase()
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

        let valuesToAdd: string[] = [];
        insertedValues.forEach((insertedValue: string) => {
          const valueTrim: string = insertedValue.trim();

          if (valueTrim !== '' && !isValueAlreadyAdded(valueTrim)) {
            const valueOption: string | undefined = getValueFromOptions(
              valueTrim
            );

            if (valueOption) {
              valuesToAdd = [...valuesToAdd, valueOption];
            } else {
              if (isFreeSolo()) {
                valuesToAdd = [...valuesToAdd, valueTrim];
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
    value: string[],
    reason: AutocompleteChangeReason
  ): void => {
    if (reason === 'select-option' || reason === 'create-option') {
      const lastItem = value[value.length - 1];

      if (typeof lastItem === 'string') {
        const values: string[] = getValuesFromInputField(lastItem as string);
        let currentValues: string[] = [];

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
    <FormControl fullWidth>
      <SFAutocompleteChipModal
        value={editedValue}
        open={isModalOpen}
        onEdit={editValue}
        onClose={(): void => setIsModalOpen(false)}
      />
      <StyledAutoComplete
        disabled={disabled}
        options={filteredOptions(options)}
        multiple
        value={items}
        inputValue={inputValue}
        onChange={onAutoCompleteChange}
        onInputChange={onInputChange}
        open={options.length > 0 ? isPopperOpen : false}
        onClose={(): void => setIsPopperOpen(false)}
        filterSelectedOptions
        freeSolo={isFreeSolo()}
        getOptionSelected={(option: string, value: string): boolean =>
          option === value
        }
        renderTags={(value: string[]): JSX.Element => (
          <SFAutocompleteChipRender
            values={value}
            disabled={disabled}
            onDelete={deleteValue}
            onEdit={isEditable ? onEdit : undefined}
            isValid={isValid}
          />
        )}
        renderInput={(params: AutocompleteRenderInputParams): JSX.Element => (
          <StyledTextField
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
    </FormControl>
  );
};
