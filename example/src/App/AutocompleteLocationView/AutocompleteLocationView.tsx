import React from 'react';

import { SFAutocompleteLocation, SFAutocompleteLocationResult } from 'sfui';

export const SFAutoCompleteLocationView = (): JSX.Element => {
  const [
    autcompleteValue,
    setAutocompleteValue
  ] = React.useState<SFAutocompleteLocationResult>({
    text: ''
  });
  const [
    autcompleteValue1,
    setAutocompleteValue1
  ] = React.useState<SFAutocompleteLocationResult>({
    text:
      '6400 S. Fiddlers Green Circle, Suite 250, Greenwood Village, CO 80111'
  });
  const [
    autcompleteValue2,
    setAutocompleteValue2
  ] = React.useState<SFAutocompleteLocationResult>({
    text:
      '6400 S. Fiddlers Green Circle, Suite 250, Greenwood Village, CO 80111'
  });
  return (
    <div className='column'>
      <SFAutocompleteLocation
        label='Bagel'
        value={autcompleteValue}
        onChange={(value: SFAutocompleteLocationResult) =>
          setAutocompleteValue(value)
        }
      />
      <SFAutocompleteLocation
        label='Bagel'
        value={autcompleteValue1}
        onChange={(value: SFAutocompleteLocationResult) =>
          setAutocompleteValue1(value)
        }
      />
      <SFAutocompleteLocation
        label='Bagel'
        value={autcompleteValue2}
        disabled
        onChange={(value: SFAutocompleteLocationResult) =>
          setAutocompleteValue2(value)
        }
      />
    </div>
  );
};
