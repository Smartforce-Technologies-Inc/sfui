import React from 'react';

import { SFCheckbox } from 'sfui';

const SFCheckboxesView = () => {
  return (
    <div className='contentBody item two'>
      <SFCheckbox />
      <SFCheckbox label='Bagel' />
      <SFCheckbox disabled />
      <SFCheckbox label='Bagel' disabled />
      <SFCheckbox checked />
      <SFCheckbox label='Bagel' checked />
      <SFCheckbox checked disabled />
      <SFCheckbox label='Bagel' checked disabled />
    </div>
  );
};

export { SFCheckboxesView };
