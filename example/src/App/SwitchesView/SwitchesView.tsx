import React from 'react';

import { SFSwitch } from 'sfui';

const SFSwitchesView = () => {
  return (
    <div className='switches'>
      <div className='row'>
        <SFSwitch />
        <SFSwitch label='Bagel' />
      </div>
      <div className='row'>
        <SFSwitch disabled />
        <SFSwitch label='Bagel' disabled />
      </div>
      <div className='row'>
        <SFSwitch checked />
        <SFSwitch label='Bagel' checked />
      </div>
      <div className='row'>
        <SFSwitch checked disabled />
        <SFSwitch checked label='Bagel' disabled />
      </div>
    </div>
  );
};

export { SFSwitchesView };
