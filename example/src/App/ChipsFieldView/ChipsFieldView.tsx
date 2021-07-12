import React from 'react';

import { SFChipsListField, ChipFieldValueType } from 'sfui';

export const SFChipsFieldView = (): JSX.Element => {
  const [chipFieldValue, setChipFieldValue] = React.useState<
    ChipFieldValueType[]
  >();
  const [chipFieldValue1, setChipFieldValue1] = React.useState<
    ChipFieldValueType[]
  >([{ value: 'Bagel1', isNew: true }]);
  const [chipFieldValue2, setChipFieldValue2] = React.useState<
    ChipFieldValueType[]
  >([{ value: 'Bagel1', isNew: true }]);
  const [chipFieldValue3, setChipFieldValue3] = React.useState<
    ChipFieldValueType[]
  >([
    { value: 'Bagel1', isNew: true },
    { value: 'Bagel2', isNew: true },
    { value: 'Bagel3', isNew: true },
    { value: 'Bagel4', isNew: true },
    { value: 'Bagel5', isNew: true },
    { value: 'Bagel6', isNew: true },
    { value: 'Bagel7' },
    { value: 'Bagel8' },
    { value: 'Bagel9' },
    { value: 'Bagel10' },
    { value: 'Bagel11' },
    { value: 'Bagel12' }
  ]);

  return (
    <div className='column'>
      <SFChipsListField
        items={chipFieldValue}
        label='Bagel'
        onChange={(value: ChipFieldValueType[]) => setChipFieldValue(value)}
      />
      <SFChipsListField
        items={chipFieldValue1}
        label='Bagel'
        onChange={(value: ChipFieldValueType[]) => setChipFieldValue1(value)}
      />
      <SFChipsListField
        items={chipFieldValue2}
        label='Bagel'
        disabled
        onChange={(value: ChipFieldValueType[]) => setChipFieldValue2(value)}
      />
      <SFChipsListField
        items={chipFieldValue3}
        label='Bagel'
        onChange={(value: ChipFieldValueType[]) => setChipFieldValue3(value)}
      />
    </div>
  );
};
