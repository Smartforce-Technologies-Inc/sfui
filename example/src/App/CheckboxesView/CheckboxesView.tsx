import React from 'react';

import { SFCheckbox } from 'sfui';

const SFCheckboxesView = (): JSX.Element => {
  return (
    <div className='ckeckbox-wrapper'>
      <h3>Checkboxes</h3>
      <div className='appRow'>
        <SFCheckbox />
        <SFCheckbox label='Bagel' />
      </div>
      <div className='appRow'>
        <SFCheckbox disabled />
        <SFCheckbox label='Bagel' disabled />
      </div>
      <div className='appRow'>
        <SFCheckbox checked />
        <SFCheckbox label='Bagel' checked />
      </div>
      <div className='appRow'>
        <SFCheckbox checked disabled />
        <SFCheckbox label='Bagel' checked disabled />
      </div>
    </div>
  );
};

export { SFCheckboxesView };
