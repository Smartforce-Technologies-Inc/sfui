import React from 'react';

import { SFSplitButton, SFSplitButtonOption } from 'sfui';

export const SFSplitButtonView = (): JSX.Element => {
  const splitButtonOptions: SFSplitButtonOption[] = [
    { onClick: () => console.log('Clicked Small option!'), label: 'Small' },
    {
      onClick: () => console.log('Clicked Medium option!'),
      label: 'Medium'
    },
    { onClick: () => console.log('Clicked Large option!'), label: 'Large' }
  ];

  return (
    <div className='itemsContainer'>
      <div className='columnGroup'>
        <div className='column'>
          <div className='rowGroup row'>
            <SFSplitButton
              sfColor='blue'
              size='medium'
              variant='contained'
              defaultSelected={1}
              options={splitButtonOptions}
            />
            <SFSplitButton
              sfColor='blue'
              size='medium'
              variant='outlined'
              defaultSelected={1}
              options={splitButtonOptions}
            />
            <SFSplitButton
              sfColor='grey'
              size='medium'
              variant='contained'
              defaultSelected={1}
              options={splitButtonOptions}
            />
            <SFSplitButton
              sfColor='grey'
              size='medium'
              variant='outlined'
              defaultSelected={1}
              options={splitButtonOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
