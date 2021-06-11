import React, { Fragment } from 'react';
import { ValueType } from '../SFChipsListInput';
import { SFChip } from '../../SFChip/SFChip';
import { EditChipValue } from '../SFChipListModal/SFChipListModal';

export interface SFChipListRenderProps {
  values: ValueType[];
  isChipFullWidth: boolean;
  chipSize: 'small' | 'medium';
  onDelete: (deleteValue: ValueType, index: number) => void;
  onEdit: (editValue: EditChipValue) => void;
}

export const SFChipListRender = ({
  values,
  isChipFullWidth,
  chipSize,
  onDelete,
  onEdit
}: SFChipListRenderProps): React.ReactElement<SFChipListRenderProps> => {
  return (
    <Fragment>
      {values.map((input: ValueType, index: number) => (
        <SFChip
          key={index}
          fullWidth={isChipFullWidth}
          deleteable
          clickable
          sfColor='default'
          variant='outlined'
          size={input.isNew ? 'small' : chipSize}
          label={input.value}
          onDelete={(): void => onDelete(input, index)}
          onClick={(): void =>
            onEdit({
              type: `${input.isNew ? 'Input' : 'Item'} value`,
              input: {
                value: input.value,
                isNew: input.isNew ? input.isNew : false
              },
              index: index
            })
          }
        />
      ))}
    </Fragment>
  );
};
