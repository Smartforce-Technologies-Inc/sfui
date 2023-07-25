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
import { SFAutocompleteChipRender } from '../SFAutocompleteChip/SFAutocompleteChipRender/SFAutocompleteChipRender';

export const StyledPeopleAutocomplete = withStyles({
  option: {
    padding: '6px 24px'
  },
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
  },
  multipleValues: {
    '& .MuiInputBase-root': {
      height: 'inherit',
      minHeight: '56px',
      gap: '6px',
      padding: '28px 9px 9px',

      '& input.MuiAutocomplete-input': {
        padding: 0,

        '&:first-child': {
          padding: 0
        }
      },
      '& .MuiFormControl-root .MuiChip-outlined': {
        margin: '3px auto 2px'
      }
    }
  }
}));

export interface SFPeopleOption {
  name: string;
  avatarUrl?: string;
  asyncObject?: any;
}

interface SFPeoplePickerBaseProps {
  label: string;
  isAsync: boolean;
  disabled?: boolean;
  required?: boolean;
  multiple?: boolean;
  helperText?: React.ReactNode;
}

interface SFPeoplePickerSingleProps extends SFPeoplePickerBaseProps {
  multiple: false;
  value: SFPeopleOption;
  onChange: (value: SFPeopleOption) => void;
}

interface SFPeoplePickerMultipleProps extends SFPeoplePickerBaseProps {
  multiple: true;
  value: SFPeopleOption[];
  onChange: (value: SFPeopleOption[]) => void;
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
  | (SFPeoplePickerSingleProps & SFPeoplePickerWithOptionsProps)
  | (SFPeoplePickerSingleProps & SFPeoplePickerAsyncProps)
  | (SFPeoplePickerMultipleProps & SFPeoplePickerWithOptionsProps)
  | (SFPeoplePickerMultipleProps & SFPeoplePickerAsyncProps);

export const SFPeoplePicker = ({
  helperText,
  label,
  disabled = false,
  required,
  value,
  ...props
}: SFPeoplePickerProps): React.ReactElement<SFPeoplePickerProps> => {
  const classes = useStyles();
  const isMultiple: boolean = props.multiple ?? false;

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
    newValue: SFPeopleOption | SFPeopleOption[]
  ): void => {
    if (props.multiple) {
      props.onChange(newValue as SFPeopleOption[]);
    } else {
      props.onChange(newValue as SFPeopleOption);
    }
  };

  const onDelete = (currentValue: SFPeopleOption[], index: number): void => {
    const newValue = currentValue.filter(
      (_v: SFPeopleOption, i: number) => i !== index
    );

    props.multiple && props.onChange(newValue as SFPeopleOption[]);
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

  const renderTags = (value: SFPeopleOption[]): React.ReactNode => {
    if (props.multiple) {
      return (
        <SFAutocompleteChipRender
          disabled={disabled}
          values={value.map((val: SFPeopleOption) => val.name)}
          onDelete={(_v, index: number): void => onDelete(value, index)}
        />
      );
    }

    return undefined;
  };

  return (
    <StyledPeopleAutocomplete
      className={isMultiple ? classes.multipleValues : ''}
      freeSolo={false}
      loading={loading}
      multiple={isMultiple}
      clearOnBlur
      disabled={disabled}
      options={props.isAsync ? asyncOptions : props.options}
      renderInput={renderInput}
      popupIcon={null}
      filterSelectedOptions={isMultiple}
      closeIcon={<SFIcon icon='Close' size='16' />}
      value={value}
      onInputChange={onInputChange}
      onChange={onPeopleChange}
      getOptionLabel={(option: SFPeopleOption): string => option.name}
      renderOption={renderOption}
      filterOptions={(options: SFPeopleOption[]): SFPeopleOption[] => options}
      renderTags={renderTags}
    />
  );
};
