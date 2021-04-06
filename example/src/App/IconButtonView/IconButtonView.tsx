import React from 'react';

import { SFIconButton } from 'sfui';

const SFIconButtonView = (): JSX.Element => {
  return (
    <div className='column'>
      <div className='grid-row'>
        <SFIconButton
          sfIcon='Callendar'
          sfSize='tiny'
          style={{ margin: 'auto' }}
        />
        <SFIconButton
          sfIcon='Callendar'
          sfSize='small'
          style={{ margin: 'auto' }}
        />
        <SFIconButton
          sfIcon='Callendar'
          sfSize='medium'
          style={{ margin: 'auto' }}
        />
        <SFIconButton
          sfIcon='Callendar'
          sfSize='large'
          style={{ margin: 'auto' }}
        />
      </div>
      <div className='grid-row'>
        <SFIconButton
          sfIcon='Callendar'
          sfSize='tiny'
          disabled
          style={{ margin: 'auto' }}
        />
        <SFIconButton
          sfIcon='Callendar'
          sfSize='small'
          disabled
          style={{ margin: 'auto' }}
        />
        <SFIconButton
          sfIcon='Callendar'
          sfSize='medium'
          disabled
          style={{ margin: 'auto' }}
        />
        <SFIconButton
          sfIcon='Callendar'
          sfSize='large'
          disabled
          style={{ margin: 'auto' }}
        />
      </div>
    </div>
  );
};
export { SFIconButtonView };
