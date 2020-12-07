import React from 'react';

import { SFRadio } from 'sfui';

const SFRadioView = () => {
  return (
    <div className='radioGroupWraper'>
      <h3>Radio</h3>
      <div className='appRow'>
        <SFRadio />
        <SFRadio label='Bagel' />
      </div>
      <div className='appRow'>
        <SFRadio disabled />
        <SFRadio label='Bagel' disabled />
      </div>
      <div className='appRow'>
        <SFRadio checked />
        <SFRadio label='Bagel' checked />
      </div>
      <div className='appRow'>
        <SFRadio checked disabled />
        <SFRadio label='Bagel' checked disabled />
      </div>
    </div>
  );
};

export { SFRadioView };
