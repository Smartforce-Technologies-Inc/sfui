import React from 'react';
import { SFAlert } from '../../SFAlert/SFAlert';
import { SFTextField } from '../../SFTextField/SFTextField';
import { ChipListValueType } from '../SFChipsListInput';

export type EditChipListValue = {
  label: string;
  input: ChipListValueType;
  index: number;
};

export interface SFChipListModalProps {
  editValue: EditChipListValue;
  open: boolean;
  onEdit: (value: ChipListValueType, index: number) => void;
  onClose: () => void;
}

export const SFChipListModal = ({
  editValue,
  open,
  onEdit,
  onClose
}: SFChipListModalProps): React.ReactElement<SFChipListModalProps> => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [editedValue, setEditedValue] = React.useState<ChipListValueType>(
    editValue.input
  );

  React.useEffect(() => {
    setEditedValue(editValue.input);
  }, [editValue]);

  const onInputChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    setIsEditing(true);
    setEditedValue({
      value: input.target.value,
      isNew: editValue.input.isNew,
      hasChanged: true
    });
  };

  const onFinishEdition = (): void => {
    onEdit(editedValue, editValue.index);
    onClose();
  };

  return (
    <SFAlert
      title={`Edit ${editValue && editValue.label}`}
      rightAction={{
        label: 'Done',
        buttonProps: {
          disabled: !isEditing,
          onClick: (): void => onFinishEdition()
        }
      }}
      leftAction={{
        label: 'Cancel',
        buttonProps: {
          onClick: (): void => onClose()
        }
      }}
      open={open}
      content={`To edit this ${
        editValue && editValue.label
      }, please enter the new one here.`}
    >
      <SFTextField
        label={editValue && editValue.label}
        value={editedValue.value}
        onChange={(input: React.ChangeEvent<HTMLInputElement>): void =>
          onInputChange(input)
        }
      />
    </SFAlert>
  );
};
