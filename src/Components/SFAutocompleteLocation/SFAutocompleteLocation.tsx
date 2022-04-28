import React from 'react';
import { Theme, withStyles, makeStyles } from '@material-ui/core/styles';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import debounce from 'lodash.debounce';
import { DebouncedFunc } from 'lodash';
import parse from 'autosuggest-highlight/parse';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFGrey, SFSurfaceLight } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

/*
  This component uses three Google Maps API's: Places API, Places Autocomplete API and Geocoder API.

  The Geocoder API it's used when the user has the geolocation enabled in the browser and looks for
  a place based on the user coordinates to pre populate the input.

  https://developers.google.com/maps/documentation/javascript/reference/geocoder

  The Places Autocomplete API it's used to fetch options based on the current value of the input.

  https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service

  This two API's returns objects that have a property named "place_id". In case that the value of the
  component it's obtained by one of this two services (it's not a simple text) and has this place_id property, 
  the component use the Places API to get the place details and adds it to the value of the component
  if nothing fails.

  https://developers.google.com/maps/documentation/javascript/reference/places-service

  The method for getting the place details is "getDetails" and it's call with an argument of type "PlaceDetailsRequest".

  This request is configured to get only two types of data (for billing reasons): "address_components" and "geometry".

  https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails

  "address_component" has the information of the different components that makes and address: street number, route, city, etc.

  https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderAddressComponent

  https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes

  "geometry" has the information about the coordinates of the place

  https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceGeometry
  
*/

type PlacePredictionsFn = (
  text: string,
  service: google.maps.places.AutocompleteService
) => Promise<google.maps.places.AutocompletePrediction[]>;

const memoizePredictionsFn = (fn: PlacePredictionsFn): PlacePredictionsFn => {
  const cache = {};
  return async (
    text: string,
    service: google.maps.places.AutocompleteService
  ): Promise<google.maps.places.AutocompletePrediction[]> => {
    if (text in cache) {
      return cache[text];
    } else {
      const result = await fn(text, service);
      cache[text] = result;
      return result;
    }
  };
};

const getPlacePredictions = async (
  text: string,
  service: google.maps.places.AutocompleteService
): Promise<google.maps.places.AutocompletePrediction[]> => {
  return new Promise((resolve, reject) => {
    try {
      service.getPlacePredictions(
        { input: text },
        (results: google.maps.places.AutocompletePrediction[]) => {
          resolve(results);
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

const getPlaceDetails = async (
  service: google.maps.places.PlacesService,
  placeId: string
): Promise<google.maps.places.PlaceResult> => {
  return new Promise((resolve, reject) => {
    try {
      service.getDetails(
        {
          placeId,
          fields: ['address_components', 'geometry']
        },
        (placeDetails: google.maps.places.PlaceResult) => resolve(placeDetails)
      );
    } catch (e) {
      reject(e);
    }
  });
};

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
      '@media (hover: hover)': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey.A100 as string, 0.3)
            : hexToRgba(SFGrey[500] as string, 0.3)
      }
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

export interface SFGeocoderAddressComponent
  extends google.maps.GeocoderAddressComponent {}

export interface SFPlaceGeometry extends google.maps.places.PlaceGeometry {}

export interface SFAutocompleteLocationPlaceDetails {
  placeId: string;
  addressComponents?: SFGeocoderAddressComponent[];
  geometry?: SFPlaceGeometry;
}

export interface SFAutocompleteLocationResult {
  text: string;
  placeDetails?: SFAutocompleteLocationPlaceDetails;
}

export interface SFAutocompleteLocationProps {
  label: string;
  value: SFAutocompleteLocationResult;
  disabled?: boolean;
  required?: boolean;
  currentLocation?: boolean;
  currentLocationType?: 'address' | 'route';
  minChar?: number;
  onChange: (value: SFAutocompleteLocationResult) => void;
}

export const SFAutocompleteLocation = ({
  label,
  value,
  disabled = false,
  required = false,
  currentLocation = false,
  currentLocationType = 'route',
  minChar = 3,
  onChange
}: SFAutocompleteLocationProps): React.ReactElement<SFAutocompleteLocationResult> => {
  const classes = useStyles();
  const autocompleteService = React.useRef<google.maps.places.AutocompleteService>();
  const placesService = React.useRef<google.maps.places.PlacesService>();
  const geocoderService = React.useRef<google.maps.Geocoder>();

  const [selectedOption, setSelectedOption] = React.useState<
    Partial<google.maps.places.AutocompletePrediction>
  >({});

  const [options, setOptions] = React.useState<
    google.maps.places.AutocompletePrediction[]
  >([]);

  const refGetPlacePredictions = React.useRef<
    DebouncedFunc<PlacePredictionsFn>
  >();

  React.useEffect(() => {
    refGetPlacePredictions.current = debounce(
      memoizePredictionsFn(getPlacePredictions),
      100,
      {
        leading: true,
        trailing: false
      }
    );
  }, []);

  const fetchOptions = async (): Promise<void> => {
    if (
      navigator.onLine &&
      refGetPlacePredictions.current &&
      autocompleteService.current
    ) {
      const options = await refGetPlacePredictions.current(
        value.text,
        autocompleteService.current
      );
      setOptions(options || []);
    }
  };

  React.useEffect(() => {
    // Check if Google API it's loaded
    if (
      window.google &&
      typeof window.google === 'object' &&
      typeof window.google.maps === 'object'
    ) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();

      // The service needs an html div or a map as an argument
      placesService.current = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );

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
                  const locationType = `${
                    currentLocationType === 'address' ? 'street_' : ''
                  }${currentLocationType}`;

                  const result:
                    | google.maps.GeocoderResult
                    | undefined = results.find(
                    (result: google.maps.GeocoderResult) => {
                      return result.types.indexOf(locationType) !== -1;
                    }
                  );

                  if (result) {
                    setSelectedOption({
                      description: result.formatted_address,
                      // eslint-disable-next-line
                      place_id: result.place_id
                    });

                    if (placesService.current) {
                      getPlaceDetails(placesService.current, result.place_id)
                        .then(
                          (
                            placeDetailsResult: google.maps.places.PlaceResult
                          ) => {
                            onChange({
                              text: result.formatted_address,
                              placeDetails: {
                                placeId: result.place_id,
                                addressComponents:
                                  placeDetailsResult.address_components,
                                geometry: placeDetailsResult.geometry
                              }
                            });
                          }
                        )
                        .catch((e) =>
                          console.error('PlacesService::getPlaceDetails', e)
                        );
                    } else {
                      onChange({
                        text: result.formatted_address,
                        placeDetails: {
                          placeId: result.place_id
                        }
                      });
                    }
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
    if (value.text && value.text.length > minChar) {
      fetchOptions();
    } else {
      setOptions([]);
    }
  }, [value]);

  const renderInput = (
    params: AutocompleteRenderInputParams
  ): React.ReactNode => (
    <SFTextField {...params} required={required} label={label} />
  );

  const onAutocompleteChange = async (
    _event: React.ChangeEvent,
    newValue: google.maps.places.AutocompletePrediction,
    reason: string
  ): Promise<void> => {
    if (reason !== 'create-option' && newValue) {
      if (newValue.place_id) {
        let placeDetails: SFAutocompleteLocationPlaceDetails = {
          placeId: newValue.place_id
        };

        try {
          if (placesService.current) {
            const placeDetailsResult = await getPlaceDetails(
              placesService.current,
              newValue.place_id
            );

            if (placeDetailsResult) {
              placeDetails = {
                ...placeDetails,
                addressComponents: placeDetailsResult.address_components,
                geometry: placeDetailsResult.geometry
              };
            }
          }
        } catch (e) {
          console.error('PlacesService::getDetails', e);
        } finally {
          setSelectedOption(newValue);
          onChange({
            text: newValue.description,
            placeDetails
          });
        }
      } else {
        setSelectedOption(newValue);
        onChange({ text: newValue.description });
      }
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
    let matches: google.maps.places.PredictionSubstring[] = [];
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
      disabled={disabled}
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
