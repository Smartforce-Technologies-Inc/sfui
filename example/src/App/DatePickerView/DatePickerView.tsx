import React, { useState } from 'react';

import { SFDatePicker } from 'sfui';

const SFDatePickerView = (): JSX.Element => {
  const [firstPickerDate, setFirstPickerDate] = useState(undefined);
  const [secondPickerDate, setSecondPickerDate] = useState(Date.now());
  const [thirdPickerDate, setThirdPickerDate] = useState(Date.now());
  const [fourthPickerDate, setFourthPickerDate] = useState(Date.now());
  const [fifthPickerDate, setFifthPickerDate] = useState(Date.now());
  const dateLabel = 'mm/dd/yyyy';
  return (
    <div className='column'>
      <div className='row'>
        <SFDatePicker
          label={dateLabel}
          onChange={(value): void => setFirstPickerDate(value)}
          value={firstPickerDate}
        />
      </div>
      <div className='row'>
        <SFDatePicker
          label={dateLabel}
          onChange={(value): void => setSecondPickerDate(value)}
          value={secondPickerDate}
        />
      </div>
      <div className='row'>
        <SFDatePicker
          label={dateLabel}
          onChange={(value): void => setThirdPickerDate(value)}
          value={thirdPickerDate}
          disabled
        />
      </div>
      <div className='row'>
        <SFDatePicker
          label={dateLabel}
          onChange={(value): void => setFourthPickerDate(value)}
          helperText='Error message'
          value={fourthPickerDate}
          error
        />
      </div>
      <div className='row'>
        <SFDatePicker
          label={dateLabel}
          value={fifthPickerDate}
          onChange={(value): void => setFifthPickerDate(value)}
          helperText='Helper message'
        />
      </div>
    </div>
  );
};

export { SFDatePickerView };
