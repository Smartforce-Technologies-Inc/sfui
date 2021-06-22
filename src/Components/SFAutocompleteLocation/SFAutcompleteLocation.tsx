/* eslint-disable  */

import React from 'react';
import { Theme, withStyles, makeStyles } from '@material-ui/core/styles';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import throttle from 'lodash/throttle';
import parse from 'autosuggest-highlight/parse';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFGrey, SFSurfaceLight } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

function loadScript(
  src: string,
  element: HTMLHeadElement | null,
  id: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    script.onload = () => {
      console.log('Script loaded');
      resolve();
    };
    script.onerror = (e) => reject(e);
    element?.appendChild(script);
  });
}

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
    marginTop: '-3px'
  },
  popupIndicator: {
    padding: 0
  },
  clearIndicator: {
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
  },
  listbox: {
    padding: '13px 0',
    backgroundColor:
      theme.palette.type === 'light' ? SFSurfaceLight : SFGrey[800]
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

const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '15px',
    alignItems: 'center'
  },
  itemText: {
    fontSize: '16px',
    lineHeight: '24px',
    color: theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
  },
  itemSecondaryText: {
    fontSize: '12px',
    lineHeight: '14px',
    color: theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]
  }
}));

export interface SFAutcompleteLocationProps {
  label: string;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const SFAutcompleteLocation = ({
  label,
  value,
  disabled = false,
  onChange
}: SFAutcompleteLocationProps): React.ReactElement<SFAutcompleteLocationProps> => {
  const classes = useStyles();
  const loaded = React.useRef<boolean>(false);
  const autocompleteService = React.useRef<google.maps.places.AutocompleteService>();
  const geocoderService = React.useRef<google.maps.Geocoder>();

  const [selectedOption, setSelectedOption] = React.useState<
    Partial<google.maps.places.AutocompletePrediction>
  >({});

  const [options, setOptions] = React.useState<
    google.maps.places.AutocompletePrediction[]
  >([]);

  const fetchOptions = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current?.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  const createServices = () => {
    console.log('Creating Autocomplete service...');
    autocompleteService.current = new window.google.maps.places.AutocompleteService();

    if (value.length === 0 && navigator.geolocation) {
      console.log('Creating Geocoder service...');
      geocoderService.current = new google.maps.Geocoder();

      const onLocationError = (): void =>
        console.log("Can't get GeolocationPosition");

      const onLocationSuccess = (pos: GeolocationPosition): void => {
        const latlng = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };

        geocoderService.current?.geocode(
          { location: latlng },
          (
            results: google.maps.GeocoderResult[],
            status: google.maps.GeocoderStatus
          ) => {
            if (status === 'OK') {
              if (results[0]) {
                const address: string = results[0].formatted_address;
                setSelectedOption({ description: address });
                onChange(address);
              } else {
                console.error('Geocoder: no results found');
              }
            } else {
              console.error('Geocoder: failed due to: ' + status);
            }
          }
        );
      };

      navigator.geolocation.getCurrentPosition(
        onLocationSuccess,
        onLocationError
      );
    } else if (value.length > 0) {
      fetchOptions(
        { input: value },
        (results: google.maps.places.AutocompletePrediction[]) => {
          setOptions(results || []);
        }
      );
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined' && !loaded.current) {
      if (!document.querySelector('#google-maps')) {
        loadScript(
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyDET6OJJuN80emEkb8VMTd-K-XaXDrgAjI&libraries=places',
          document.querySelector('head'),
          'google-maps'
        ).then(() => {
          loaded.current = true;
          createServices();
        });
      } else {
        createServices();
      }
    }
  }, []);

  React.useEffect(() => {
    if (value.length > 0) {
      if (autocompleteService.current) {
        fetchOptions(
          { input: value },
          (results: google.maps.places.AutocompletePrediction[]) => {
            setOptions(results || []);
          }
        );
      }
    } else {
      setOptions([]);
    }
  }, [value]);

  const renderInput = (
    params: AutocompleteRenderInputParams
  ): React.ReactNode => <SFTextField {...params} label={label} />;

  const onValueChange = (
    _event: React.ChangeEvent,
    newValue: google.maps.places.AutocompletePrediction
  ): void => {
    if (newValue) {
      setSelectedOption(newValue);
      onChange(newValue.description);
    }
  };

  const onInputChange = (
    _event: React.ChangeEvent,
    newValue: string,
    reason: string
  ): void => {
    if (reason !== 'reset') {
      onChange(newValue);
    }
  };

  const getOptionLabel = (
    option: google.maps.places.AutocompletePrediction
  ): string => option.description || '';

  const renderOption = (
    option: google.maps.places.AutocompletePrediction
  ): React.ReactNode => {
    let matches = [];
    let parts: any[] = [];

    if (option.structured_formatting) {
      matches = option.structured_formatting.main_text_matched_substrings;
      parts = parse(
        option.structured_formatting.main_text,
        matches.map((match: google.maps.places.PredictionSubstring) => [
          match.offset,
          match.offset + match.length
        ])
      );
    }

    return (
      <div className={classes.menu}>
        <div>
          <SFIcon icon='Loction-1' />
        </div>

        <div className={classes.itemText}>
          {parts.map((part, index) => (
            <span
              key={index}
              style={{ fontWeight: part.highlight ? 700 : 400 }}
            >
              {part.text}
            </span>
          ))}

          <br />

          <span className={classes.itemSecondaryText}>
            {option.structured_formatting &&
              option.structured_formatting.secondary_text}
          </span>
        </div>
      </div>
    );
  };

  return (
    <StyledAutocomplete
      freeSolo
      disabled={disabled}
      options={options}
      renderInput={renderInput}
      popupIcon={null}
      closeIcon={<SFIcon icon='Close' size='16' />}
      value={selectedOption}
      inputValue={value}
      onChange={onValueChange}
      onInputChange={onInputChange}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
    />
  );
};
