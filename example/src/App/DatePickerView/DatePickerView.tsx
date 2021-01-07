import React from 'react';

import { SFDatePicker } from 'sfui';

const SFDatePickerView = (): JSX.Element => {
  const onChange = (): void => console.log('onChange');
  return (
    <div className='textFieldWrapper'>
      <h3>Date Picker</h3>
      <div className='appRow'>
        <SFDatePicker label='Bagel' value={undefined} onChange={onChange} />
      </div>
      <div className='appRow'>
        <SFDatePicker label='Bagel' value={Date.now()} onChange={onChange} />
      </div>
      <div className='appRow'>
        <SFDatePicker
          label='Bagel'
          value={Date.now()}
          disabled
          onChange={onChange}
        />
      </div>
      <div className='appRow'>
        <SFDatePicker
          label='Bagel'
          value={Date.now()}
          error
          onChange={onChange}
        />
      </div>
      <div className='appRow'>
        <SFDatePicker
          label='Bagel'
          value={Date.now()}
          helperText='Helper Message'
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export { SFDatePickerView };
