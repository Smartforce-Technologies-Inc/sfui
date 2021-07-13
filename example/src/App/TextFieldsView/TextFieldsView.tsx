import React from 'react';

import { SFTextField } from 'sfui';

const SFTextFieldsView = (): JSX.Element => {
  return (
    <div className='column'>
      <div className='row'>
        <SFTextField label='Bagel' />
      </div>
      <div className='row'>
        <SFTextField label='Bagel' value='This is a bagel' />
      </div>
      <div className='row'>
        <SFTextField label='Bagel' value='This is a bagel' disabled />
      </div>
      <div className='row'>
        <SFTextField
          label='Bagel'
          value='This is a bagel'
          error
          helperText='Error message'
        />
      </div>
      <div className='row'>
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
