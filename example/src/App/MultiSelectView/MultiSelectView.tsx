import React from 'react';

import { SFMultiSelect, SFMultiSelectOption } from 'sfui';

const getOptions = (): SFMultiSelectOption[] => {
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

const SFMultiSelectView = () => {
  return (
    <div className='content-inner oneColumn'>
      <SFMultiSelect label='Bagel' options={getOptions()} defaultValue={[]} />
      <SFMultiSelect
        label='Bagel'
        options={getOptions()}
        defaultValue={['Bagel number one']}
      />
      <SFMultiSelect
        label='Bagel'
        options={getOptions()}
        defaultValue={['Bagel number one']}
        disabled
      />
      <SFMultiSelect
        label='Bagel'
        options={getOptions()}
        defaultValue={['Bagel number one']}
        error
      />
      <SFMultiSelect
        label='Bagel'
        options={getOptions()}
        defaultValue={['Bagel number one']}
        helperText='Helper Message'
      />
    </div>
  );
};

export { SFMultiSelectView };
