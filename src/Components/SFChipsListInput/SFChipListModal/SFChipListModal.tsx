import React from 'react';
import { SFAlert } from '../../SFAlert/SFAlert';
import { SFTextField } from '../../SFTextField/SFTextField';
import { ValueType } from '../SFChipsListInput';

export type EditChipValue = {
  type: string;
  input: ValueType;
  index: number;
};

export const emptyEditValue = {
  type: '',
  input: {
    value: ''
  },
  index: -1
};

export interface SFChipListModalProps {
  editValue: ValueType;
  index: number;
  type: string;
  open: boolean;
  onEdit: (value: ValueType, index: number) => void;
  onClose: () => void;
}

export const SFChipListModal = ({
  editValue,
  index,
  type,
  open,
  onEdit,
  onClose
}: SFChipListModalProps): React.ReactElement<SFChipListModalProps> => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<ValueType>(editValue);

  React.useEffect(() => {
    setValue(editValue);
  }, [editValue]);

  return (
    <SFAlert
      title={`Edit ${type}`}
      rightAction={{
        label: 'Done',
        buttonProps: {
          disabled: !isEditing,
          onClick: (): void => {
            onEdit(value, index);
            onClose();
          }
        }
      }}
      leftAction={{
        label: 'Cancel',
        buttonProps: {
          onClick: (): void => {
            onClose();
            setValue(emptyEditValue.input);
          }
        }
      }}
      open={open}
      content={`To edit this ${type}, please enter the new one here.`}
    >
      <SFTextField
        label={type}
        value={value.value}
        onChange={(input: React.ChangeEvent<HTMLInputElement>): void => {
          setIsEditing(true);
          setValue({
            value: input.target.value,
            isNew: editValue.isNew,
            hasChanged: true
          });
        }}
      />
    </SFAlert>
  );
};
