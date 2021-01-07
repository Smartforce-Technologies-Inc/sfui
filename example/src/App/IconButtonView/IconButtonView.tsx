import React from 'react';

import { SFIconButton } from 'sfui';

const SFIconButtonView = (): JSX.Element => {
  return (
    <div className='icon-button-wrapper'>
      <h3>Icon button</h3>
      <div className='appRow'>
        <SFIconButton sfIcon='Callendar' sfSize='tiny' />
        <SFIconButton sfIcon='Callendar' sfSize='small' />
        <SFIconButton sfIcon='Callendar' sfSize='medium' />
        <SFIconButton sfIcon='Callendar' sfSize='large' />
      </div>
      <div className='appRow'>
        <SFIconButton sfIcon='Callendar' sfSize='tiny' disabled />
        <SFIconButton sfIcon='Callendar' sfSize='small' disabled />
        <SFIconButton sfIcon='Callendar' sfSize='medium' disabled />
        <SFIconButton sfIcon='Callendar' sfSize='large' disabled />
      </div>
    </div>
  );
};

export { SFIconButtonView };
