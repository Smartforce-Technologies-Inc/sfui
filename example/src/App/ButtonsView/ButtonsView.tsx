import React from 'react';

import { SFButton } from 'sfui';

const MUIButtonsView = () => {
  return (
    <div>
      <h4>MUI Buttons</h4>
      <div className='appRow'>
        <SFButton>Button Text</SFButton>
        <SFButton variant='outlined'>Button Text</SFButton>
        <SFButton variant='text'>Button Text</SFButton>
      </div>
      <div className='appRow'>
        <SFButton color='secondary'>Button Text</SFButton>
        <SFButton color='secondary' variant='outlined'>
          Button Text
        </SFButton>
        <SFButton color='secondary' variant='text'>
          Button Text
        </SFButton>
      </div>
      <div className='appRow'>
        <SFButton color='default'>Button Text</SFButton>
        <SFButton color='default' variant='outlined'>
          Button Text
        </SFButton>
        <SFButton color='default' variant='text'>
          Button Text
        </SFButton>
      </div>
      <div className='appRow'>
        <SFButton disabled={true}>Button Text</SFButton>
        <SFButton variant='outlined' disabled={true}>
          Button Text
        </SFButton>
        <SFButton variant='text' disabled={true}>
          Button Text
        </SFButton>
      </div>
    </div>
  );
};

const SFButtonsView = () => {
  return (
    <div>
      <h4>SmartForce Buttons</h4>
      <div className='appRow'>
        <SFButton sfColor='blue'>Button Text</SFButton>
        <SFButton sfColor='blue' variant='outlined'>
          Button Text
        </SFButton>
        <SFButton sfColor='blue' variant='text'>
          Button Text
        </SFButton>
      </div>
      <div className='appRow'>
        <SFButton sfColor='red'>Button Text</SFButton>
        <SFButton sfColor='red' variant='outlined'>
          Button Text
        </SFButton>
        <SFButton sfColor='red' variant='text'>
          Button Text
        </SFButton>
      </div>
      <div className='appRow'>
        <SFButton sfColor='grey'>Button Text</SFButton>
        <SFButton sfColor='grey' variant='outlined'>
          Button Text
        </SFButton>
        <SFButton sfColor='grey' variant='text'>
          Button Text
        </SFButton>
      </div>
      <div className='appRow'>
        <SFButton sfColor='blue' disabled={true}>
          Button Text
        </SFButton>
        <SFButton sfColor='blue' variant='outlined' disabled={true}>
          Button Text
        </SFButton>
        <SFButton sfColor='blue' variant='text' disabled={true}>
          Button Text
        </SFButton>
      </div>
    </div>
  );
};

export { MUIButtonsView, SFButtonsView };
