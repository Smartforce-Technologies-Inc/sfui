import React from 'react';
import { SFCheckbox } from 'sfui';

const SFCheckboxesView = () => {
  return (
    <div className='column'>
      <div className='row'>
        <SFCheckbox />
        <SFCheckbox label='Bagel' />
      </div>
      <div className='row'>
        <SFCheckbox disabled />
        <SFCheckbox label='Bagel' disabled />
      </div>
      <div className='row'>
        <SFCheckbox checked />
        <SFCheckbox label='Bagel' checked />
      </div>
      <div className='row'>
        <SFCheckbox checked disabled />
        <SFCheckbox label='Bagel' checked disabled />
      </div>
    </div>
  );
};

export { SFCheckboxesView };
