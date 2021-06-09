import * as React from 'react';
import { Theme, withStyles, makeStyles } from '@material-ui/core/styles';
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
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

const StyledAutocomplete = withStyles((theme: Theme) => ({
  inputRoot: {
    '&[class*="MuiOutlinedInput-root"]': {
      paddingTop: '20px',

      '& input.MuiAutocomplete-input:first-child': {
        paddingLeft: '4px'
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
  paper: {
    marginLeft: '4px',
    marginRight: '-4px'
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
        props.hasPopoupIcon ? '9px' : '0'
    }
  }
});

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
  hasPopoupIcon?: boolean;
}

export const SFAutocomplete = ({
  label,
  options,
  hasPopoupIcon = false,
  ...props
}: SFAutocompleteProps): React.ReactElement<SFAutocompleteProps> => {
  const classes = useStyles({ hasPopoupIcon });
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

  const onOpen = (e: React.ChangeEvent) => {
    // If reason of open is click on button
    if (e.type === 'click') {
      setIsOpen(!isOpen);
    }
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
      className={`${classes.root} ${props.className || ''}`}
      {...props}
      open={isOpen}
      openOnFocus={false}
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      onClose={onClose}
      onOpen={onOpen}
      renderInput={(params) => <SFTextField {...params} label={label} />}
      popupIcon={hasPopoupIcon ? <SFIcon icon='Down-2' size={16} /> : null}
      closeIcon={<SFIcon icon='Close' size={16} />}
    />
  );
};
