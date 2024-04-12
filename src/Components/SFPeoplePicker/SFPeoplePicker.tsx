import * as React from 'react';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { DebouncedFunc } from 'lodash';
import debounce from 'lodash.debounce';
import { StyledAutocomplete } from '../SFAutocomplete/SFAutocomplete';
import {
  AutocompleteInputChangeReason,
  AutocompleteRenderInputParams,
  styled
} from '@mui/material';
import { SFPeoplePickerOption } from './SFPeoplePickerOption/SFPeoplePickerOption';
import { SFAutocompleteLocationPaper } from '../SFAutocompleteLocation/SFAutocompleteLocation';

const StyledPeopleAutocomplete = styled(StyledAutocomplete)({
  '.MuiAutocomplete-endAdornment': {
    '.MuiAutocomplete-popupIndicator': {
      display: 'none'
    }
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PeopleOptionsFn = (url: string, fetchInit?: RequestInit) => Promise<any[]>;

const getPeopleOptions = async (
  url: string,
  fetchInit?: RequestInit
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cache: Record<string, any> = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export interface SFPeopleOption {
  name: string;
  avatarUrl?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // const classes = useStyles();

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
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options.map((option: any) => {
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
      clearIcon={<SFIcon icon='Close' size='16' />}
      value={value}
      onInputChange={onInputChange}
      onChange={onPeopleChange}
      getOptionLabel={(option: SFPeopleOption): string => option.name}
      renderOption={(props, option: SFPeopleOption): React.ReactNode => (
        <SFPeoplePickerOption liProps={props} option={option} />
      )}
      filterOptions={(options: SFPeopleOption[]): SFPeopleOption[] => options}
      PaperComponent={SFAutocompleteLocationPaper}
    />
  );
};
