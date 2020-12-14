import React from 'react';

import { SFSwitch } from 'sfui';

const SFSwitchesView = () => {
  return (
    <div className='contentBody item two'>
      <SFSwitch />
      <SFSwitch label='Bagel' />
      <SFSwitch disabled />
      <SFSwitch label='Bagel' disabled />
      <SFSwitch checked />
      <SFSwitch label='Bagel' checked />
      <SFSwitch checked disabled />
      <SFSwitch checked label='Bagel' disabled />
    </div>
  );
};

export { SFSwitchesView };
