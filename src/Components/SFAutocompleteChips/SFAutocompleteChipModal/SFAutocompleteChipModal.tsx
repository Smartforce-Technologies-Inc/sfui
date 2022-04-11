import React from 'react';
import { SFAlertDialog } from '../../SFAlertDialog/SFAlertDialog';
import { SFTextField } from '../../SFTextField/SFTextField';

export interface SFAutoCompleteChipModalProps {
  value: string | undefined;
  open: boolean;
  onEdit: (value: string) => void;
  onClose: () => void;
}

export const SFAutocompleteChipModal = ({
  value,
  open,
  onEdit,
  onClose
}: SFAutoCompleteChipModalProps): React.ReactElement<SFAutoCompleteChipModalProps> => {
  const [editedValue, setEditedValue] = React.useState<string>(value || '');

  const onInputChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    setEditedValue(input.target.value);
  };

  const onFinishEdition = (): void => {
    onEdit(editedValue);
    onClose();
  };

  React.useEffect(() => {
    setEditedValue(!value ? '' : value);
  }, [value]);

  return (
    <SFAlertDialog
      title='Edit item'
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
