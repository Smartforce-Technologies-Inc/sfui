import React from 'react';

import { SFDatePicker } from 'sfui';

const SFDatePickerView = (): JSX.Element => {
  const onChange = (): void => console.log('onChange');
  return (
    <div className='fullSize'>
      <SFDatePicker label='Bagel' />
      <SFDatePicker label='Bagel' value={Date.now()} />
      <SFDatePicker label='Bagel' value={Date.now()} disabled />
      <SFDatePicker label='Bagel' value={Date.now()} error />
      <SFDatePicker
        label='Bagel'
        value={Date.now()}
        helperText='Helper Message'
      />
    </div>
  );
};

export { SFDatePickerView };
