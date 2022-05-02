import * as React from 'react';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
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

export const StyledPeopleAutocomplete = withStyles({
  endAdornment: {
    '& .MuiAutocomplete-popupIndicator': {
      display: 'none'
    }
  }
})(StyledAutocomplete);

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

type PeopleOptionsFn = (url: string, fetchInit?: RequestInit) => Promise<any[]>;

const getPeopleOptions = async (
  url: string,
  fetchInit?: RequestInit
): Promise<any[]> => {
  try {
    const fetchResp = await fetch(url, fetchInit);
    const response = await fetchResp.json();
    return response;
  } catch (e) {
    console.error('SFPeoplePicker:getPeopleOptions', e);
    return Promise.resolve([]);
  }
};

const memoizePeopleFn = (fn: PeopleOptionsFn): PeopleOptionsFn => {
  const cache = {};
  return async (url: string, fetchInit?: RequestInit): Promise<any[]> => {
    if (url in cache) {
      return cache[url];
    } else {
      try {
        const result = await fn(url, fetchInit);
        cache[url] = result;
        return result;
      } catch (e) {
        console.error('SFPeoplePicker:getPeopleFn', e);
        return [];
      }
    }
  };
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
  asyncObject?: any;
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
  formatOption: (option: any) => SFPeopleOption;
  fetchInit?: RequestInit;
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
    refGetOptions.current = debounce(memoizePeopleFn(getPeopleOptions), 250, {
      leading: true,
      trailing: false
    });
  }, []);

  const fetchOptions = async (url: string): Promise<SFPeopleOption[]> => {
    if (props.isAsync && refGetOptions.current) {
      try {
        const options = await refGetOptions.current(url, props.fetchInit);
        return options?.length
          ? options.map((option: any) => {
              const newObj: SFPeopleOption = props.formatOption(option);
              if (!newObj.asyncObject) {
                newObj.asyncObject = option;
              }
              return newObj;
            })
          : [];
      } catch (e) {
        console.error('SFPeoplePicker:fetchOptions', e);
        return [];
      }
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
        try {
          setIsLoading(true);
          const url: string = props.formatUrlQuery(value);
          const options = await fetchOptions(url);
          setAsyncOptions(options);
          setIsLoading(false);
        } catch (e) {
          console.error('SFPeoplePicker:onInputChange', e);
          setAsyncOptions([]);
          setIsLoading(false);
        }
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
    <StyledPeopleAutocomplete
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
