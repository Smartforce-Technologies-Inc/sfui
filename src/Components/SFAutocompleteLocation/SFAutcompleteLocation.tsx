import React from 'react';
import { Theme, withStyles, makeStyles } from '@material-ui/core/styles';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import throttle from 'lodash.throttle';
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

interface TextPart {
  text: string;
  highlight: boolean;
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
  textHighlight: {
    fontWeight: 700
  },
  itemSecondaryText: {
    fontSize: '12px',
    lineHeight: '14px',
    color: theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]
  }
}));

export interface SFAutcompleteLocationResult {
  text: string;
  placeId?: string;
}

export interface SFAutcompleteLocationProps {
  label: string;
  value: SFAutcompleteLocationResult;
  disabled?: boolean;
  currentLocation?: boolean;
  currentLocationType?: 'street_address' | 'route';
  onChange: (value: SFAutcompleteLocationResult) => void;
}

export const SFAutcompleteLocation = ({
  label,
  value,
  disabled = false,
  currentLocation = false,
  currentLocationType = 'route',
  onChange
}: SFAutcompleteLocationProps): React.ReactElement<SFAutcompleteLocationProps> => {
  const classes = useStyles();
  const autocompleteService = React.useRef<google.maps.places.AutocompleteService>();
  const geocoderService = React.useRef<google.maps.Geocoder>();

  const [apiLoaded, setApiLoaded] = React.useState<boolean>(false);

  const [selectedOption, setSelectedOption] = React.useState<
    Partial<google.maps.places.AutocompletePrediction>
  >({});

  const [options, setOptions] = React.useState<
    google.maps.places.AutocompletePrediction[]
  >([]);

  const getPredictions = React.useMemo(
    () =>
      throttle((request, callback) => {
        if (autocompleteService.current) {
          autocompleteService.current.getPlacePredictions(request, callback);
        }
      }, 200),
    []
  );

  const fetchOptions = (): void =>
    getPredictions(
      { input: value.text },
      (results: google.maps.places.AutocompletePrediction[]) => {
        setOptions(results || []);
      }
    );

  React.useEffect(() => {
    // Check if Google API it's loaded
    if (
      window.google &&
      typeof window.google === 'object' &&
      typeof window.google.maps === 'object'
    ) {
      setApiLoaded(true);
      autocompleteService.current = new window.google.maps.places.AutocompleteService();

      if (
        (!value || !value.text || value.text.length === 0) &&
        currentLocation &&
        navigator.geolocation
      ) {
        geocoderService.current = new google.maps.Geocoder();

        const onLocationError = (): void =>
          console.error("Can't get GeolocationPosition: ");

        const onLocationSuccess = (pos: GeolocationPosition): void => {
          const latlng = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };

          if (geocoderService.current) {
            geocoderService.current.geocode(
              { location: latlng },
              (
                results: google.maps.GeocoderResult[],
                status: google.maps.GeocoderStatus
              ) => {
                if (status === 'OK') {
                  const result:
                    | google.maps.GeocoderResult
                    | undefined = results.find(
                    (result: google.maps.GeocoderResult) => {
                      console.log(
                        currentLocationType,
                        result.types,
                        result.types.indexOf(currentLocationType) !== -1
                      );
                      return result.types.indexOf(currentLocationType) !== -1;
                    }
                  );

                  if (result) {
                    setSelectedOption({
                      description: result.formatted_address,
                      // eslint-disable-next-line
                      place_id: result.place_id
                    });

                    onChange({
                      text: result.formatted_address,
                      placeId: result.place_id
                    });
                  } else {
                    console.error('Geocoder: no results found');
                  }
                } else {
                  console.error('Geocoder: failed due to: ' + status);
                }
              }
            );
          }
        };

        navigator.geolocation.getCurrentPosition(
          onLocationSuccess,
          onLocationError
        );
      } else if (value.text && value.text.length > 0) {
        fetchOptions();
      }
    } else {
      console.error('Google API is not loaded');
    }
  }, []);

  React.useEffect(() => {
    if (value.text && value.text.length > 0) {
      fetchOptions();
    } else {
      setOptions([]);
    }
  }, [value]);

  const renderInput = (
    params: AutocompleteRenderInputParams
  ): React.ReactNode => <SFTextField {...params} label={label} />;

  const onAutocompleteChange = (
    _event: React.ChangeEvent,
    newValue: google.maps.places.AutocompletePrediction
  ): void => {
    if (newValue) {
      setSelectedOption(newValue);
      onChange({
        text: newValue.description,
        placeId: newValue.place_id
      });
    }
  };

  const onInputChange = (
    _event: React.ChangeEvent,
    newValue: string,
    reason: string
  ): void => {
    if (reason !== 'reset') {
      onChange({ text: newValue });
    }
  };

  const getOptionLabel = (
    option: google.maps.places.AutocompletePrediction
  ): string => option.description || '';

  const renderOption = (
    option: google.maps.places.AutocompletePrediction
  ): React.ReactNode => {
    let matches = [];
    let parts: TextPart[] = [];

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
        <SFIcon icon='Loction-1' />

        <div className={classes.itemText}>
          {parts.map((part, index) => (
            <span
              key={index}
              className={part.highlight ? classes.textHighlight : ''}
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
      disabled={disabled || !apiLoaded}
      options={options}
      renderInput={renderInput}
      popupIcon={null}
      closeIcon={<SFIcon icon='Close' size='16' />}
      value={selectedOption}
      inputValue={value.text}
      onChange={onAutocompleteChange}
      onInputChange={onInputChange}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
    />
  );
};
