import React, { Fragment } from 'react';
import { ChipListValueType } from '../SFChipsListInput';
import { SFChip } from '../../SFChip/SFChip';
import { EditChipListValue } from '../SFChipListModal/SFChipListModal';

export interface SFChipListRenderProps {
  values: ChipListValueType[];
  valuesLabel: string;
  isChipFullWidth: boolean;
  chipSize: 'small' | 'medium';
  disabled: boolean;
  onDelete: (deleteValue: ChipListValueType, index: number) => void;
  onEdit: (editValue: EditChipListValue) => void;
}

export const SFChipListRender = ({
  values,
  valuesLabel,
  isChipFullWidth,
  chipSize,
  disabled,
  onDelete,
  onEdit
}: SFChipListRenderProps): React.ReactElement<SFChipListRenderProps> => {
  return (
    <Fragment>
      {values.map((input: ChipListValueType, index: number) => (
        <SFChip
          key={index}
          fullWidth={isChipFullWidth}
          deleteable
          clickable
          sfColor='default'
          variant='outlined'
          size={input.isNew ? 'small' : chipSize}
          label={input.value}
          disabled={disabled}
          onDelete={(): void => onDelete(input, index)}
          onClick={(): void => {
            onEdit({
              label: `${valuesLabel} value`,
              index: index,
              input: {
                value: input.value,
                isNew: input.isNew ? input.isNew : false
              }
            });
          }}
        />
      ))}
    </Fragment>
  );
};
