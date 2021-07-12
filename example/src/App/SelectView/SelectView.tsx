import React from 'react';

import { SFSelect, SFMenuOption } from 'sfui';

const getOptions = (): SFMenuOption[] => {
  return [
    {
      label: 'Bagel number one',
      value: 'Bagel number one'
    },
    {
      label: 'Bagel number two',
      value: 'Bagel number two'
    },
    {
      label: 'Bagel number three',
      value: 'Bagel number three'
    }
  ];
};

const SFSelectView = (): JSX.Element => {
  const [selectValue, setSelectValue] = React.useState<string>('');
  const [selectValue1, setSelectValue1] = React.useState<string>(
    'Bagel number one'
  );
  const [selectValue2, setSelectValue2] = React.useState<string>(
    'Bagel number one'
  );
  const [selectValue3, setSelectValue3] = React.useState<string>('');
  const [selectValue4, setSelectValue4] = React.useState<string>('');

  return (
    <div className='column'>
      <div className='row'>
        <SFSelect
          label='Bagel'
          options={getOptions()}
          value={selectValue}
          onChange={(
            event: React.ChangeEvent<{
              name?: string | undefined;
              value: unknown;
            }>
          ) => setSelectValue(event.target.value as string)}
        />
      </div>
      <div className='row'>
        <SFSelect
          label='Bagel'
          options={getOptions()}
          value={selectValue1}
          onChange={(event) => setSelectValue1(event.target.value as string)}
        />
      </div>
      <div className='row'>
        <SFSelect
          label='Bagel'
          options={getOptions()}
          value={selectValue2}
          onChange={(event) => setSelectValue2(event.target.value as string)}
          disabled
        />
      </div>
      <div className='row'>
        <SFSelect
          label='Bagel'
          options={getOptions()}
          value={selectValue3}
          onChange={(event) => setSelectValue3(event.target.value as string)}
          error
          helperText='Error message'
        />
      </div>
      <div className='row'>
        <SFSelect
          label='Bagel'
          options={getOptions()}
          value={selectValue4}
          onChange={(event) => setSelectValue4(event.target.value as string)}
          helperText='Helper message'
        />
      </div>
    </div>
  );
};

export { SFSelectView };
