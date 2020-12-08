import React from 'react';

import { SFDatePicker } from 'sfui';

const SFDatePickerView = () => {
  return (
    <div className='textFieldWrapper'>
      <h3>Date Picker</h3>
      <div className='appRow'>
        <SFDatePicker label='Bagel' />
      </div>
      <div className='appRow'>
        <SFDatePicker label='Bagel' value={Date.now()} />
      </div>
      <div className='appRow'>
        <SFDatePicker label='Bagel' value={Date.now()} disabled />
      </div>
      <div className='appRow'>
        <SFDatePicker label='Bagel' value={Date.now()} error />
      </div>
      <div className='appRow'>
        <SFDatePicker
          label='Bagel'
          value={Date.now()}
          helperText='Helper Message'
        />
      </div>
    </div>
  );
};

export { SFDatePickerView };
