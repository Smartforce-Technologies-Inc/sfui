import React, { Fragment } from 'react';
import { ChipFieldValueType } from '../SFChipsListField';
import { SFChip } from '../../SFChip/SFChip';

export interface SFChipListRenderProps {
  values: ChipFieldValueType[];
  valuesLabel: string;
  isChipFullWidth: boolean;
  chipSize: 'small' | 'medium';
  disabled: boolean;
  onDelete: (input: ChipFieldValueType) => void;
  onEdit: (value: ChipFieldValueType) => void;
}

export const SFChipListRender = ({
  values,
  isChipFullWidth,
  chipSize,
  disabled,
  onDelete,
  onEdit
}: SFChipListRenderProps): React.ReactElement<SFChipListRenderProps> => {
  return (
    <Fragment>
      {values.map((input: ChipFieldValueType, index: number) => (
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
          onDelete={(): void => onDelete(input)}
          onClick={(): void => {
            onEdit({
              value: input.value,
              isNew: input.isNew ? input.isNew : false
            });
          }}
        />
      ))}
    </Fragment>
  );
};
