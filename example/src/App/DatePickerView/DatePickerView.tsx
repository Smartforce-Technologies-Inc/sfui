import React from 'react';

import { SFDatePicker } from 'sfui';

const SFDatePickerView = (): JSX.Element => {
  return (
    <div className='fullSize'>
      <SFDatePicker
        label='Bagel'
        onChange={(value: string) => console.log(value)}
        value={undefined}
      />
      <SFDatePicker
        label='Bagel'
        onChange={(value: string) => console.log(value)}
        value={Date.now()}
      />
      <SFDatePicker
        label='Bagel'
        onChange={(value: string) => console.log(value)}
        value={Date.now()}
        disabled
      />
      <SFDatePicker
        label='Bagel'
        onChange={(value: string) => console.log(value)}
        value={Date.now()}
        error
      />
      <SFDatePicker
        label='Bagel'
        value={Date.now()}
        onChange={(value: string) => console.log(value)}
        helperText='Helper Message'
      />
    </div>
  );
};

export { SFDatePickerView };
