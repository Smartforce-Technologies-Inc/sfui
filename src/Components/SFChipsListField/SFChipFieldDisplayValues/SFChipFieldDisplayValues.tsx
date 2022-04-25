import React from 'react';
import { styled } from '@mui/material/styles';
import { SFChipListRender } from '../SFChipFieldRender/SFChipFieldRender';
import { ChipFieldValueType } from '../SFChipsListField';

interface SFChipFieldDisplayValuesProps {
  className?: string;
  values: ChipFieldValueType[];
  chipSize: 'small' | 'medium';
  disabled: boolean;
  onDelete: (input: ChipFieldValueType) => void;
  onEdit?: (value: ChipFieldValueType) => void;
  isValid?: (value: string) => boolean;
  itemChipDisplay: string;
  emptyMessage?: string;
}

const DisplayValuesBase = (
  props: SFChipFieldDisplayValuesProps
): React.ReactElement<SFChipFieldDisplayValuesProps> => {
  return (
    <div className={props.className}>
      {props.values.length !== 0 && (
        <SFChipListRender
          values={props.values}
          isChipFullWidth={props.itemChipDisplay === 'block'}
          chipSize={props.chipSize}
          disabled={props.disabled}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
          isValid={props.isValid}
        />
      )}
      {props.emptyMessage && (!props.values || props.values.length === 0) && (
        <p>{props.emptyMessage}</p>
      )}
    </div>
  );
};

export const SFChipListDisplayValues = styled(DisplayValuesBase)(
  ({ itemChipDisplay }) => ({
    display: 'flex',
    gap: '8px',
    marginTop: '14px',
    flexWrap: 'wrap',
    flexDirection: itemChipDisplay === 'block' ? 'column' : 'row'
  })
);
