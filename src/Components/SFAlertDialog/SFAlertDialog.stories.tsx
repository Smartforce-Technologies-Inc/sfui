import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFAlertDialog, SFAlertDialogProps } from './SFAlertDialog';
import { SFTextField } from '../SFTextField/SFTextField';

export default {
  title: 'Components/SFAlertDialog',
  component: SFAlertDialog,
  args: {
    title: 'Alert dialog title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      ' Mauris lobortis a erat eu mattis.',
    open: true
  },
  argTypes: {
    onClose: {
      table: {
        disable: true
      },
      action: 'onClose'
    },
    onClick: {
      action: 'onClick',
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    leftAction: {
      table: {
        disable: true
      }
    },
    rightAction: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const AlertDialog = (args: SFAlertDialogProps): JSX.Element => (
  <SFAlertDialog
    leftAction={{ label: 'Medium' }}
    rightAction={{ label: 'Medium' }}
    {...args}
  />
);

export const FormDialog = (args: SFAlertDialogProps): JSX.Element => {
  const [disabled, setDisabled] = React.useState<boolean>(true);

  return (
    <SFAlertDialog
      {...args}
      title='Form dialog title'
      rightAction={{ label: 'Medium', buttonProps: { disabled } }}
    >
      <SFTextField
        style={{ marginTop: 20 }}
        label='Bagel'
        placeholder='Please write something to enable button'
        onChange={(event): void => setDisabled(event.target.value.length === 0)}
      />
    </SFAlertDialog>
  );
};
