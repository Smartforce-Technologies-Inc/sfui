import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import {
  AutocompleteInputChangeReason,
  AutocompleteRenderInputParams
} from '@material-ui/lab';
import { SFBlue, SFGrey, SFTextWhite } from '../../SFColors/SFColors';
import { DebouncedFunc } from 'lodash';
import debounce from 'lodash.debounce';
import { StyledAutocomplete } from '../SFAutocomplete/SFAutocomplete';

const getStringAbbreviation = (value: string): string => {
  const abbreviation = value.split(' ');
  let stringAbbreviation = '';

  if (abbreviation) {
    for (let i = 0; i < 3; i++) {
      if (abbreviation[i]) {
        stringAbbreviation += abbreviation[i][0];
      } else {
        break;
      }
    }
  }

  return stringAbbreviation;
};

type PeopleOptionsFn = (url: string) => Promise<unknown[]>;

const getPeopleOptions = async (url: string): Promise<unknown[]> => {
  try {
    const fetchResp = await fetch(url);
    const response = await fetchResp.json();
    return response;
  } catch (e) {
    console.error('SFPeoplePicker:getPeopleOptions', e);
    return Promise.resolve([]);
  }
};

const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '15px',
    alignItems: 'center'
  },
  avatar: {
    backgroundColor: SFBlue[400],
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 700,
    color: SFTextWhite
  },
  name: {
    fontSize: '16px',
    lineHeight: '24px',
    color: theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
  }
}));

export interface SFPeopleOption {
  name: string;
  avatarUrl?: string;
}

interface SFPeoplePickerBaseProps {
  label: string;
  value: SFPeopleOption;
  isAsync: boolean;
  disabled?: boolean;
  required?: boolean;
  helperText?: React.ReactNode;
  onChange: (value: SFPeopleOption) => void;
}

interface SFPeoplePickerWithOptionsProps extends SFPeoplePickerBaseProps {
  isAsync: false;
  options: SFPeopleOption[];
}

interface SFPeoplePickerAsyncProps extends SFPeoplePickerBaseProps {
  isAsync: true;
  formatUrlQuery: (value: string) => string;
  formatOption: (option: unknown) => SFPeopleOption;
  minChar?: number;
}

export type SFPeoplePickerProps =
  | SFPeoplePickerWithOptionsProps
  | SFPeoplePickerAsyncProps;

export const SFPeoplePicker = ({
  helperText,
  label,
  disabled,
  required,
  value,
  onChange,
  ...props
}: SFPeoplePickerProps): React.ReactElement<SFPeoplePickerProps> => {
  const classes = useStyles();

  const [asyncOptions, setAsyncOptions] = React.useState<SFPeopleOption[]>([]);
  const [loading, setIsLoading] = React.useState<boolean>(false);

  const refGetOptions = React.useRef<DebouncedFunc<PeopleOptionsFn>>();

  React.useEffect(() => {
    refGetOptions.current = debounce(getPeopleOptions, 250);
  }, []);

  const fetchOptions = async (url: string): Promise<SFPeopleOption[]> => {
    if (props.isAsync && refGetOptions.current) {
      const options = await refGetOptions.current(url);
      return options
        ? options.map((option: unknown) => props.formatOption(option))
        : [];
    } else {
      return [];
    }
  };

  const renderOption = (option: SFPeopleOption): React.ReactNode => {
    return (
      <div className={classes.menu}>
        <div
          className={classes.avatar}
          style={{
            backgroundImage: option.avatarUrl
              ? `url("${option.avatarUrl}")`
              : '',
            backgroundSize: 'cover'
          }}
        >
          {!option.avatarUrl && (
            <span>{getStringAbbreviation(option.name)}</span>
          )}
        </div>

        <div className={classes.name}>{option.name}</div>
      </div>
    );
  };

  const renderInput = (
    params: AutocompleteRenderInputParams
  ): React.ReactNode => (
    <SFTextField
      {...params}
      required={required}
      label={label}
      helperText={helperText}
    />
  );

  const onInputChange = async (
    _event: React.ChangeEvent,
    value: string,
    _reason: AutocompleteInputChangeReason
  ): Promise<void> => {
    if (props.isAsync) {
      if (value.length >= (props.minChar || 3)) {
        setIsLoading(true);
        const url: string = props.formatUrlQuery(value);
        const options = await fetchOptions(url);
        setAsyncOptions(options);
        setIsLoading(false);
      } else {
        setAsyncOptions([]);
      }
    }
  };

  const onPeopleChange = (
    _event: React.ChangeEvent,
    newValue: SFPeopleOption
  ): void => {
    onChange(newValue);
  };

  return (
    <StyledAutocomplete
      freeSolo={false}
      loading={loading}
      clearOnBlur
      disabled={disabled}
      options={props.isAsync ? asyncOptions : props.options}
      renderInput={renderInput}
      popupIcon={null}
      closeIcon={<SFIcon icon='Close' size='16' />}
      value={value}
      onInputChange={onInputChange}
      onChange={onPeopleChange}
      getOptionLabel={(option: SFPeopleOption): string => option.name}
      renderOption={renderOption}
    />
  );
};
