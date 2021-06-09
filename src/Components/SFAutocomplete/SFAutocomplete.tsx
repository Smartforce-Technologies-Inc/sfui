import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteInputChangeReason as SFAutocompleteInputChangeReason,
  AutocompleteChangeReason as SFAutocompleteChangeReason,
  AutocompleteCloseReason as SFAutocompleteCloseReason
} from '@material-ui/lab';
import { SFMenuOption } from '../SFSelect/SFSelect';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';

const StyledAutocomplete = withStyles(() => ({
  inputRoot: {
    paddingTop: '20px !important'
  },
  input: {
    '&:first-child': {
      paddingLeft: '4px !important'
    }
  },
  endAdornment: {
    right: '16px !important'
  },
  popupIndicator: {
    fontSize: 'inherit',
    marginLeft: '10px'
  },
  paper: {
    marginLeft: '4px',
    marginRight: '-4px'
  }
}))(Autocomplete);

export {
  SFAutocompleteInputChangeReason,
  SFAutocompleteChangeReason,
  SFAutocompleteCloseReason
};

export interface SFAutocompleteProps
  extends AutocompleteProps<
    SFMenuOption,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  > {
  label: string;
  options: SFMenuOption[];
}

export const SFAutocomplete = ({
  label,
  options,
  ...props
}: SFAutocompleteProps): React.ReactElement<SFAutocompleteProps> => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onInputChange = (
    event: React.ChangeEvent,
    value: string,
    reason: SFAutocompleteInputChangeReason
  ) => {
    if (!isOpen && value.length > 0) {
      setIsOpen(true);
    } else if (isOpen && value.length === 0) {
      setIsOpen(false);
    }

    if (props.onInputChange) {
      props.onInputChange(event, value, reason);
    }
  };

  const onChange = (
    event: React.ChangeEvent,
    value: SFMenuOption,
    reason: SFAutocompleteChangeReason
  ) => {
    setIsOpen(false);
    if (props.onChange) {
      props.onChange(event, value, reason);
    }
  };

  const onOpen = () => {
    setIsOpen(!isOpen);
  };
  const onClose = (
    event: React.ChangeEvent,
    reason: SFAutocompleteCloseReason
  ) => {
    if (isOpen) {
      setIsOpen(false);
      if (props.onClose) {
        props.onClose(event, reason);
      }
    }
  };

  return (
    <StyledAutocomplete
      {...props}
      open={isOpen}
      openOnFocus={false}
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      onClose={onClose}
      renderInput={(params) => <SFTextField {...params} label={label} />}
      popupIcon={<SFIcon onClick={onOpen} icon='Down-2' size='16' />}
      closeIcon={<SFIcon icon='Close' size='16' />}
    />
  );
};
