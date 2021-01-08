import React from 'react';

import { SFRadioGroup, SFRadioOptionsProps } from 'sfui';

const SFRadioGroupView = (): JSX.Element => {
  const options: SFRadioOptionsProps[] = [
    { value: 'male', label: 'Male', disabled: false },
    { value: 'female', label: 'Female', disabled: false },
    { value: 'others', label: 'Others', disabled: false }
  ];
  return (
    <div className='column'>
      <div className='row'>
        <SFRadioGroup label='Genders' defaultValue={'male'} options={options} />
      </div>
    </div>
  );
};

export { SFRadioGroupView };
