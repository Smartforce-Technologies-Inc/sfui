import React from 'react';

import { SFSwitch } from 'sfui';

const SFSwitchesView = () => {
  return (
    <div className='appRow'>
      <SFSwitch label='Bagel' />
      <SFSwitch color='secondary' label='Bagel' />
      <SFSwitch color='default' label='Bagel' />
    </div>
  );
};

export { SFSwitchesView };
