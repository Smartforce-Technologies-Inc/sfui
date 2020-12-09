import React from 'react';

import { SFTextField } from 'sfui';

const SFTextFieldsView = () => {
  return (
    <div className='textFieldWrapper'>
      <h3>TextFields</h3>
      <div className='appRow'>
        <SFTextField label='Bagel' />
      </div>
      <div className='appRow'>
        <SFTextField label='Bagel' value='This is a bagel' />
      </div>
      <div className='appRow'>
        <SFTextField label='Bagel' value='This is a bagel' disabled />
      </div>
      <div className='appRow'>
        <SFTextField label='Bagel' value='This is a bagel' error />
      </div>
      <div className='appRow'>
        <SFTextField
          label='Bagel'
          value='This is a bagel'
          helperText='Helper Message'
        />
      </div>
    </div>
  );
};

export { SFTextFieldsView };
