import React from 'react';
import { SFAlert } from '../../SFAlert/SFAlert';
import { SFTextField } from '../../SFTextField/SFTextField';
import { ChipFieldValueType } from '../SFChipsListField';

export interface SFChipListModalProps {
  value: ChipFieldValueType | undefined;
  open: boolean;
  label?: string;
  onEdit: (
    prevoiusValue: ChipFieldValueType,
    value: ChipFieldValueType
  ) => void;
  onClose: () => void;
}

export const SFChipListModal = ({
  value,
  label,
  open,
  onEdit,
  onClose
}: SFChipListModalProps): React.ReactElement<SFChipListModalProps> => {
  const [editedValue, setEditedValue] = React.useState<
    ChipFieldValueType | undefined
  >(value);

  const onInputChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    setEditedValue({
      value: input.target.value,
      isNew: (value as ChipFieldValueType).isNew,
      hasChanged: true
    });
  };

  const onFinishEdition = (): void => {
    onEdit(value as ChipFieldValueType, editedValue as ChipFieldValueType);
    onClose();
  };

  React.useEffect(() => {
    setEditedValue(value);
  }, [value]);

  return (
    <SFAlert
      title={`Edit ${label}`}
      rightAction={{
        label: 'Done',
        buttonProps: {
          disabled: value === editedValue,
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
      content={`To edit this ${label}, please enter the new one here.`}
    >
      <SFTextField
        label={label}
        value={editedValue && editedValue.value}
        onChange={(input: React.ChangeEvent<HTMLInputElement>): void =>
          onInputChange(input)
        }
      />
    </SFAlert>
  );
};
