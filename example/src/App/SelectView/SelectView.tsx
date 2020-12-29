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

const SFSelectView = () => {
  return (
    <div className='content-inner oneColumn'>
      <SFSelect label='Bagel' options={getOptions()} />
      <SFSelect label='Bagel' options={getOptions()} value='Bagel number one' />
      <SFSelect
        label='Bagel'
        options={getOptions()}
        value='Bagel number one'
        disabled
      />
      <SFSelect
        label='Bagel'
        options={getOptions()}
        value='Bagel number one'
        error
      />
      <SFSelect
        label='Bagel'
        options={getOptions()}
        value='Bagel number one'
        helperText='Helper Message'
      />
    </div>
  );
};

export { SFSelectView };
