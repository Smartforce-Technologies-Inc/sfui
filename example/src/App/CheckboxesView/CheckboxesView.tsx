import React from 'react';

import { SFCheckbox } from 'sfui';

const SFCheckboxesView = () => {
  return (
    <div className='appRow'>
      <SFCheckbox label='Bagel' />
      <SFCheckbox color='secondary' label='Bagel' />
      <SFCheckbox color='default' label='Bagel' />
    </div>
  );
};

export { SFCheckboxesView };
