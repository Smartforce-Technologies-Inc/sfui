import React from 'react';

import { SFSelect, SFSelectOption } from 'sfui';

const getOptions = (): SFSelectOption[] => {
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

const SFSelectView = (): JSX.Element => {
  return (
    <div className='column'>
      <div className='row'>
        <SFSelect label='Bagel' options={getOptions()} />
      </div>
      <div className='row'>
        <SFSelect
          label='Bagel'
          options={getOptions()}
          value='Bagel number one'
        />
      </div>
      <div className='row'>
        <SFSelect
          label='Bagel'
          options={getOptions()}
          value='Bagel number one'
          disabled
        />
      </div>
      <div className='row'>
        <SFSelect
          label='Bagel'
          options={getOptions()}
          value='Bagel number one'
          error
        />
      </div>
      <div className='row'>
        <SFSelect
          label='Bagel'
          options={getOptions()}
          value='Bagel number one'
          helperText='Helper Message'
        />
      </div>
    </div>
  );
};

export { SFSelectView };
