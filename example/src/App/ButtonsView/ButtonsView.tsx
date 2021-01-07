import React from 'react';

import { SFButton } from 'sfui';

const renderButtonsColumn = (
  size: 'small' | 'medium' | 'large' | undefined
): JSX.Element => {
  return (
    <div className='column-size'>
      <div className='appRow'>
        <SFButton sfColor='blue' size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
        <SFButton sfColor='blue' variant='outlined' size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
        <SFButton sfColor='blue' variant='text' size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
      </div>
      <div className='appRow'>
        <SFButton sfColor='grey' size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
        <SFButton sfColor='grey' variant='outlined' size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
        <SFButton sfColor='grey' variant='text' size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
      </div>
      <div className='appRow'>
        <SFButton sfColor='red' size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
        <SFButton sfColor='red' variant='outlined' size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
        <SFButton sfColor='red' variant='text' size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
      </div>
      <div className='appRow'>
        <SFButton sfColor='blue' disabled size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
        <SFButton sfColor='blue' variant='outlined' disabled size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
        <SFButton sfColor='blue' variant='text' disabled size={size}>
          <span style={{ textTransform: 'capitalize' }}>{size}</span>
        </SFButton>
      </div>
    </div>
  );
};

const SFButtonsView = (): JSX.Element => {
  return (
    <div>
      <h3>Buttons</h3>
      <div className='appGrid col-3'>
        {renderButtonsColumn('small')}
        {renderButtonsColumn('medium')}
        {renderButtonsColumn('large')}
      </div>
    </div>
  );
};

export { SFButtonsView };
