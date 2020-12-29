import React from 'react';

import { SFRadio } from 'sfui';

const SFRadioView = () => {
  return (
    <div className='content-inner twoColumns'>
      <SFRadio />
      <SFRadio label='Bagel' />
      <SFRadio disabled />
      <SFRadio label='Bagel' disabled />
      <SFRadio checked />
      <SFRadio label='Bagel' checked />
      <SFRadio checked disabled />
      <SFRadio label='Bagel' checked disabled />
    </div>
  );
};

export { SFRadioView };
