import React from 'react';
import { SFMultiSelect, SFMenuOption } from 'sfui';
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

const SFMultiSelectView = (): JSX.Element => {
  return (
    <div className='column'>
      <div className='row'>
        <SFMultiSelect label='Bagel' options={getOptions()} />
      </div>
      <div className='row'>
        <SFMultiSelect
          label='Bagel'
          options={getOptions()}
          value={['Bagel number one']}
        />
      </div>
      <div className='row'>
        <SFMultiSelect
          label='Bagel'
          options={getOptions()}
          value={['Bagel number one']}
          disabled
        />
      </div>
      <div className='row'>
        <SFMultiSelect
          label='Bagel'
          options={getOptions()}
          value={['Bagel number one']}
          error
          helperText='Error message'
        />
      </div>
      <div className='row'>
        <SFMultiSelect
          label='Bagel'
          options={getOptions()}
          value={['Bagel number one']}
          helperText='Helper message'
        />
      </div>
    </div>
  );
};
export { SFMultiSelectView };
