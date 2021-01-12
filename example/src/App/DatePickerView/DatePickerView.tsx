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
    <div className='fullSize'>
      <SFDatePicker
        label={dateLabel}
        onChange={(value) => setFirstPickerDate(value)}
        value={firstPickerDate}
      />
      <SFDatePicker
        label={dateLabel}
        onChange={(value) => setSecondPickerDate(value)}
        value={secondPickerDate}
      />
      <SFDatePicker
        label={dateLabel}
        onChange={(value) => setThirdPickerDate(value)}
        value={thirdPickerDate}
        disabled
      />
      <SFDatePicker
        label={dateLabel}
        onChange={(value) => setFourthPickerDate(value)}
        value={fourthPickerDate}
        error
      />
      <SFDatePicker
        label={dateLabel}
        value={fifthPickerDate}
        onChange={(value) => setFifthPickerDate(value)}
        helperText='Helper Message'
      />
    </div>
  );
};

export { SFDatePickerView };
