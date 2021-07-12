import React from 'react';

import { SFAutocomplete, SFMenuOption } from 'sfui';

export const SFAutocompleteView = (): JSX.Element => {
  const getOptions = (): SFMenuOption[] => {
    return [
      {
        label: 'Bagel number one',
        value: 'Bagel number one'
      },
      {
        label: 'Bagel number two',
        value: 'Bagel number two'
      },
      {
        label: 'Bagel number three',
        value: 'Bagel number three'
      }
    ];
  };

  const [autocompleteValue, setAutocompleteValue] = React.useState<string>('');
  const [autocompleteValue1, setAutocompleteValue1] = React.useState<string>(
    getOptions()[1].value
  );
  const [autocompleteValue2, setAutocompleteValue2] = React.useState<string>(
    getOptions()[1].value
  );

  return (
    <div className='column'>
      <SFAutocomplete
        label='Bagel'
        options={getOptions()}
        value={autocompleteValue}
        onChange={(value: string): void => setAutocompleteValue(value)}
      />
      <SFAutocomplete
        label='Bagel'
        value={autocompleteValue1}
        options={getOptions()}
        onChange={(value: string): void => setAutocompleteValue1(value)}
      />
      <SFAutocomplete
        label='Bagel'
        disabled
        value={autocompleteValue2}
        options={getOptions()}
        onChange={(value: string): void => setAutocompleteValue2(value)}
      />
    </div>
  );
};
