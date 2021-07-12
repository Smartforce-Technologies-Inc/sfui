import React from 'react';

import { SFSwitch } from 'sfui';

const SFSwitchesView = (): JSX.Element => {
  return (
    <div className='row extra-space'>
      <div className='row'>
        <div className='column'>
          <SFSwitch size='small' />
          <SFSwitch size='small' disabled />
          <SFSwitch size='small' checked />
          <SFSwitch size='small' checked disabled />
        </div>
        <div className='column'>
          <SFSwitch size='small' label='Bagel' />
          <SFSwitch size='small' label='Bagel' disabled />
          <SFSwitch size='small' label='Bagel' checked />
          <SFSwitch size='small' checked label='Bagel' disabled />
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <SFSwitch />
          <SFSwitch disabled />
          <SFSwitch checked />
          <SFSwitch checked disabled />
        </div>
        <div className='column'>
          <SFSwitch label='Bagel' />
          <SFSwitch label='Bagel' disabled />
          <SFSwitch label='Bagel' checked />
          <SFSwitch checked label='Bagel' disabled />
        </div>
      </div>
    </div>
  );
};

export { SFSwitchesView };
