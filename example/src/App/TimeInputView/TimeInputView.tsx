import React from 'react';

import { SFTimeField } from 'sfui';

export const SFTimeFieldView = (): JSX.Element => {
  return (
    <div className='column'>
      <SFTimeField label='Bagel' value='' onChange={() => console.log('asd')} />
      <SFTimeField
        label='Bagel'
        value={new Date().toISOString()}
        onChange={() => console.log('asd')}
      />
      <SFTimeField
        label='Bagel'
        value={new Date().toISOString()}
        disabled
        onChange={() => console.log('asd')}
      />
      <SFTimeField
        label='Bagel'
        value={new Date().toISOString()}
        error
        helperText='Error message'
        onChange={() => console.log('asd')}
      />
      <SFTimeField
        label='Bagel'
        value={new Date().toISOString()}
        helperText='Helper message'
        onChange={() => console.log('asd')}
      />
    </div>
  );
};
