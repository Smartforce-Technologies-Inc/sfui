import React from 'react';
import { SFAlertDialog } from '../../SFAlertDialog/SFAlertDialog';
import { SFTextField } from '../../SFTextField/SFTextField';
import { ChipFieldValueType } from '../SFChipsListField';

export interface SFChipListModalProps {
  value: ChipFieldValueType | undefined;
  open: boolean;
  isValid?: (value: string) => boolean;
  onEdit: (
    prevoiusValue: ChipFieldValueType,
    value: ChipFieldValueType
  ) => void;
  onClose: () => void;
}

export const SFChipListModal = ({
  value,
  open,
  isValid,
  onEdit,
  onClose
}: SFChipListModalProps): React.ReactElement<SFChipListModalProps> => {
  const [editedValue, setEditedValue] = React.useState<string>(
    value?.value || ''
  );

  const onInputChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    setEditedValue(input.target.value);
  };

  const onFinishEdition = (): void => {
    onEdit(value as ChipFieldValueType, {
      value: editedValue,
      isNew: value?.isNew,
      isValid: isValid ? isValid(editedValue) : true,
      hasChanged: true
    });
    onClose();
  };

  React.useEffect(() => {
    setEditedValue(value ? value.value : '');
  }, [value]);

  return (
    <SFAlertDialog
      title='Edit item'
      rightAction={{
        label: 'Done',
        buttonProps: {
          disabled: value?.value === editedValue,
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
      contentText='To edit this item, please enter the new one here.'
    >
      <SFTextField
        label='Item'
        value={editedValue}
        onChange={(input: React.ChangeEvent<HTMLInputElement>): void =>
          onInputChange(input)
        }
      />
    </SFAlertDialog>
  );
};
