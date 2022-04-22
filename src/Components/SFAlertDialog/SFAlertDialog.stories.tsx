import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFAlertDialog, SFAlertDialogProps } from './SFAlertDialog';
import { SFTextField } from '../SFTextField/SFTextField';

export default {
  title: 'Components/SFAlertDialog',
  component: SFAlertDialog,
  parameters: { controls: { sort: 'alpha', include: ['open'] } },
  args: {
    title: 'Alert dialog title',
    contentText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      ' Mauris lobortis a erat eu mattis.',
    disableBackdropClick: true,
    open: false,
    leftAction: undefined,
    rightAction: undefined
  },
  argTypes: {
    contentText: {
      description: 'The content to display.'
    },
    disableBackdropClick: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    open: {
      description: 'If true, the component is shown.',
      control: {
        type: 'boolean'
      },
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    title: {
      description: 'The title of the alert to display.'
    },
    leftAction: {
      description: `Adds a button on the bottom right of the dialog with props to handle it's change. When paired with the right
        action button, this button aligns to the left of the other button.`,
      control: false
    },
    onClose: {
      action: 'onClose'
    },
    onClick: {
      action: 'onClick'
    },
    rightAction: {
      description: `Adds a button on the bottom right of the dialog with props to handle it's change.  
       When paired with the left action button, this button aligns to the right of the other button.`,
      control: false
    }
  }
} as Meta;

const Template: Story<SFAlertDialogProps> = (args) => (
  <SFAlertDialog {...args} />
);

export const AlertDialog = Template.bind({});
AlertDialog.args = {
  leftAction: { label: 'Medium' },
  rightAction: { label: 'Medium' }
};

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
