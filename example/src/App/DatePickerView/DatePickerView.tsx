import React from 'react';

import { SFDatePicker } from 'sfui';

const SFDatePickerView = () => {
  return (
    <div className='content-inner oneColumn'>
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
