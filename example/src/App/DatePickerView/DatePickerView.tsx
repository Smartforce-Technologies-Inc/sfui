import React, { useState } from 'react';

import { SFDatePicker } from 'sfui';

const SFDatePickerView = (): JSX.Element => {
  const [firstPickerDate, setFirstPickerDate] = useState(undefined);
  const [secondPickerDate, setSecondPickerDate] = useState(Date.now());
  const [thirdPickerDate, setThirdPickerDate] = useState(Date.now());
  const [fourthPickerDate, setFourthPickerDate] = useState(Date.now());
  const [fifthPickerDate, setFifthPickerDate] = useState(Date.now());
  return (
    <div className='fullSize'>
      <SFDatePicker
        label='Bagel'
        onChange={(value) => setFirstPickerDate(value)}
        value={firstPickerDate}
      />
      <SFDatePicker
        label='Bagel'
        onChange={(value) => setSecondPickerDate(value)}
        value={secondPickerDate}
      />
      <SFDatePicker
        label='Bagel'
        onChange={(value) => setThirdPickerDate(value)}
        value={thirdPickerDate}
        disabled
      />
      <SFDatePicker
        label='Bagel'
        onChange={(value) => setFourthPickerDate(value)}
        value={fourthPickerDate}
        error
      />
      <SFDatePicker
        label='Bagel'
        value={fifthPickerDate}
        onChange={(value) => setFifthPickerDate(value)}
        helperText='Helper Message'
      />
    </div>
  );
};

export { SFDatePickerView };
