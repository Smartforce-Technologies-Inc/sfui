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
          onChange={(value) => setFirstPickerDate(value)}
          value={firstPickerDate}
        />
      </div>
      <div className='row'>
        <SFDatePicker
          label={dateLabel}
          onChange={(value) => setSecondPickerDate(value)}
          value={secondPickerDate}
        />
      </div>
      <div className='row'>
        <SFDatePicker
          label={dateLabel}
          onChange={(value) => setThirdPickerDate(value)}
          value={thirdPickerDate}
          disabled
        />
      </div>
      <div className='row'>
        <SFDatePicker
          label={dateLabel}
          onChange={(value) => setFourthPickerDate(value)}
          value={fourthPickerDate}
          error
        />
      </div>
      <div className='row'>
        <SFDatePicker
          label={dateLabel}
          value={fifthPickerDate}
          onChange={(value) => setFifthPickerDate(value)}
          helperText='Helper Message'
        />
      </div>
    </div>
  );
};

export { SFDatePickerView };
