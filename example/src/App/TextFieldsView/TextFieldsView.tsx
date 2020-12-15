import React from 'react';

import { SFTextField } from 'sfui';

const SFTextFieldsView = () => {
  return (
    <div className='layout-columns one'>
      <SFTextField label='Bagel' />
      <SFTextField label='Bagel' value='This is a bagel' />
      <SFTextField label='Bagel' value='This is a bagel' disabled />
      <SFTextField label='Bagel' value='This is a bagel' error />
      <SFTextField
        label='Bagel'
        value='This is a bagel'
        helperText='Helper Message'
      />
    </div>
  );
};

export { SFTextFieldsView };
