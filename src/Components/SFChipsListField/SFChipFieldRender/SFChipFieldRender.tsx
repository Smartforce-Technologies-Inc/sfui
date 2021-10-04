import React, { Fragment } from 'react';
import { ChipFieldValueType } from '../SFChipsListField';
import { SFChip } from '../../SFChip/SFChip';

export interface SFChipListRenderProps {
  values: ChipFieldValueType[];
  isChipFullWidth: boolean;
  chipSize: 'small' | 'medium';
  disabled: boolean;
  isValid?: (value: string) => boolean;
  onDelete: (input: ChipFieldValueType) => void;
  onEdit?: (value: ChipFieldValueType) => void;
}

export const SFChipListRender = ({
  values,
  isChipFullWidth,
  chipSize,
  disabled,
  isValid,
  onDelete,
  onEdit
}: SFChipListRenderProps): React.ReactElement<SFChipListRenderProps> => {
  return (
    <Fragment>
      {values.map((input: ChipFieldValueType, index: number) => (
        <SFChip
          key={`${input.value}-${index}`}
          fullWidth={isChipFullWidth}
          deleteable
          clickable
          sfColor='default'
          variant='outlined'
          size={input.isNew ? 'small' : chipSize}
          label={input.value}
          disabled={disabled}
          hasError={input.isValid !== undefined && !input.isValid}
          onDelete={(): void => onDelete(input)}
          onClick={(): void => {
            if (onEdit) {
              onEdit({
                value: input.value,
                isNew: input.isNew ? input.isNew : false,
                isValid: isValid ? isValid(input.value) : true
              });
            }
          }}
        />
      ))}
    </Fragment>
  );
};
