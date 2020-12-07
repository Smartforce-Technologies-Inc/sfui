import React from 'react';

import { SFRadioGroup, SFRadioOptionsProps } from 'sfui';

const SFRadioGroupView = () => {
  const options: SFRadioOptionsProps[] = [
    { value: 'male', label: 'Male', disabled: false },
    { value: 'female', label: 'Female', disabled: false },
    { value: 'others', label: 'Others', disabled: false }
  ];
  return (
    <div className='radioGroupWraper'>
      <h3>Radio Group</h3>
      <div className='appRow'>
        <SFRadioGroup label='Genders' defaultValue={'male'} options={options} />
      </div>
    </div>
  );
};

export { SFRadioGroupView };
