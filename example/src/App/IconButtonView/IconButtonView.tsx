import React from 'react';

import { SFIconButton } from 'sfui';

const SFIconButtonView = () => {
  return (
    <div className='content-inner fourColumns'>
      <SFIconButton sfIcon='Callendar' sfSize='tiny' />
      <SFIconButton sfIcon='Callendar' sfSize='small' />
      <SFIconButton sfIcon='Callendar' sfSize='medium' />
      <SFIconButton sfIcon='Callendar' sfSize='large' />
      <SFIconButton sfIcon='Callendar' sfSize='tiny' disabled />
      <SFIconButton sfIcon='Callendar' sfSize='small' disabled />
      <SFIconButton sfIcon='Callendar' sfSize='medium' disabled />
      <SFIconButton sfIcon='Callendar' sfSize='large' disabled />
    </div>
  );
};

export { SFIconButtonView };
