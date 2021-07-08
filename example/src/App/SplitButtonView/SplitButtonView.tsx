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
    <div className='row'>
      <div className='column'>
        <SFSplitButton
          sfColor='blue'
          variant='contained'
          defaultSelected={1}
          options={splitButtonOptions}
        />
        <SFSplitButton
          sfColor='blue'
          variant='outlined'
          defaultSelected={1}
          options={splitButtonOptions}
        />
        <SFSplitButton
          sfColor='grey'
          variant='contained'
          defaultSelected={1}
          options={splitButtonOptions}
        />
        <SFSplitButton
          sfColor='grey'
          variant='outlined'
          defaultSelected={1}
          options={splitButtonOptions}
        />
      </div>
      <div className='column'>
        <SFSplitButton
          sfColor='blue'
          variant='contained'
          defaultSelected={2}
          size='large'
          options={splitButtonOptions}
        />
        <SFSplitButton
          sfColor='blue'
          variant='outlined'
          defaultSelected={2}
          size='large'
          options={splitButtonOptions}
        />
        <SFSplitButton
          sfColor='grey'
          variant='contained'
          defaultSelected={2}
          size='large'
          options={splitButtonOptions}
        />
        <SFSplitButton
          sfColor='grey'
          variant='outlined'
          defaultSelected={2}
          size='large'
          options={splitButtonOptions}
        />
      </div>
    </div>
  );
};
