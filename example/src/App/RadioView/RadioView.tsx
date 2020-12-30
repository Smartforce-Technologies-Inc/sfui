import React from 'react';

import { SFRadio } from 'sfui';

const SFRadioView = () => {
  return (
    <div className='column'>
      <div className='row'>
        <SFRadio />
        <SFRadio label='Bagel' />
      </div>
      <div className='row'>
        <SFRadio disabled />
        <SFRadio label='Bagel' disabled />
      </div>
      <div className='row'>
        <SFRadio checked />
        <SFRadio label='Bagel' checked />
      </div>
      <div className='row'>
        <SFRadio checked disabled />
        <SFRadio label='Bagel' checked disabled />
      </div>
    </div>
  );
};

export { SFRadioView };
