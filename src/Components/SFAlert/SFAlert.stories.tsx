import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFAlert, SFAlertProps } from './SFAlert';

export default {
  title: 'Components/SFAlert',
  component: SFAlert,
  args: {
    title: 'Lorem ipsum dolor sit amet.'
  },
  argTypes: {
    onClose: {
      action: 'onClose',
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    showCloseButton: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta;

export const Alert = ({
  showCloseButton,
  title,
  type,
  onClose,
  ...args
}): JSX.Element => (
  <SFAlert
    {...args}
    title={title}
    type={type}
    onClose={showCloseButton ? (): void => onClose() : undefined}
  >
    <p style={{ padding: '0px', margin: '0px' }}>
      Lorem ipsum dolor sit amet, consect adipiscing elit.
    </p>
  </SFAlert>
);
