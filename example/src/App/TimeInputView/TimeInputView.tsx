import React from 'react';

import { SFTimeField } from 'sfui';

export const SFTimeFieldView = (): JSX.Element => {
  return (
    <div className='column'>
      <SFTimeField
        label='Bagel'
        value=''
        onChange={(): void => console.log('Time Selected')}
      />
      <SFTimeField
        label='Bagel'
        value={new Date().toISOString()}
        onChange={(): void => console.log('Time Selected')}
      />
      <SFTimeField
        label='Bagel'
        value={new Date().toISOString()}
        disabled
        onChange={(): void => console.log('Time Selected')}
      />
      <SFTimeField
        label='Bagel'
        value={new Date().toISOString()}
        error
        helperText='Error message'
        onChange={(): void => console.log('Time Selected')}
      />
      <SFTimeField
        label='Bagel'
        value={new Date().toISOString()}
        helperText='Helper message'
        onChange={(): void => console.log('Time Selected')}
      />
    </div>
  );
};
