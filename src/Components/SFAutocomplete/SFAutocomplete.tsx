import * as React from 'react';
import { Theme, withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteInputChangeReason,
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteRenderInputParams
} from '@material-ui/lab';
import { SFMenuOption } from '../SFSelect/SFSelect';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const StyledAutocomplete = withStyles((theme: Theme) => ({
  inputRoot: {
    '&[class*="MuiOutlinedInput-root"]': {
      paddingTop: '20px',

      '& input.MuiAutocomplete-input:first-child': {
        padding: '9.5px 4px'
      },

      '& .MuiAutocomplete-endAdornment': {
        right: '18px'
      }
    }
  },
  endAdornment: {
    marginTop: '-3px',
    '& button': {
      padding: '9px',
      '&:hover': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey.A100 as string, 0.3)
            : hexToRgba(SFGrey[500] as string, 0.3)
      },
      '&:active': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey.A100 as string, 0.5)
            : hexToRgba(SFGrey[500] as string, 0.5)
      }
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

const useStyles = makeStyles({
  root: {
    '& button.MuiAutocomplete-popupIndicator': {
      padding: (props: Partial<SFAutocompleteProps>): string =>
        props.hasPopupIcon ? '9px' : '0'
    }
  }
});

export type SFAutocompleteInputChangeReason = AutocompleteInputChangeReason;
export type SFAutocompleteChangeReason = AutocompleteChangeReason;
export type SFAutocompleteCloseReason = AutocompleteCloseReason;

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
  options: SFMenuOption[];
  hasPopupIcon?: boolean;
  onChange: (value: string) => void;
}

export const SFAutocomplete = ({
  label,
  options,
  hasPopupIcon = false,
  ...props
}: SFAutocompleteProps): React.ReactElement<SFAutocompleteProps> => {
  const classes = useStyles({ hasPopupIcon });
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>('');

  const onInputChange = (
    _event: React.ChangeEvent,
    value: string,
    reason: AutocompleteInputChangeReason
  ): void => {
    if (reason === 'reset') {
      if (!props.freeSolo) {
        setInputValue(value);
        props.onChange(value);
      }
    } else {
      setInputValue(value);

      if (!isOpen && value.length > 0) {
        setIsOpen(true);
      } else if (isOpen && value.length === 0) {
        setIsOpen(false);
      }

      if (props.freeSolo) {
        props.onChange(value);
      }
    }
  };

  const onChange = (
    _event: React.ChangeEvent,
    option: SFMenuOption,
    reason: AutocompleteChangeReason
  ): void => {
    setIsOpen(false);

    if (reason !== 'create-option' && reason !== 'remove-option') {
      setInputValue(option ? option.value : '');
      props.onChange(option ? option.value : '');
    }
  };

  const onOpen = (event: React.ChangeEvent): void => {
    event.persist();

    // If reason of open is click on button
    if (event.type === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const onClose = (
    event: React.ChangeEvent,
    reason: SFAutocompleteCloseReason
  ): void => {
    event.persist();

    if (isOpen) {
      setIsOpen(false);

      if (props.onClose) {
        props.onClose(event, reason);
      }
    }
  };

  return (
    <StyledAutocomplete
      className={`${classes.root} ${props.className || ''}`}
      {...props}
      open={isOpen}
      openOnFocus={false}
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      onClose={onClose}
      onOpen={onOpen}
      inputValue={inputValue}
      getOptionLabel={(option: SFMenuOption): string =>
        typeof option === 'string' ? option : option.label
      }
      renderInput={(params: AutocompleteRenderInputParams): React.ReactNode => (
        <SFTextField {...params} label={label} />
      )}
      popupIcon={hasPopupIcon ? <SFIcon icon='Down-2' size={16} /> : null}
      closeIcon={<SFIcon icon='Close' size={16} />}
    />
  );
};
