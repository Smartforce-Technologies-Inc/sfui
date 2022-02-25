import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SFAlert } from './SFAlert';

export default {
  title: 'Components/SFAlert',
  component: SFAlert,
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    type: 'error'
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
  />
);

export const WithContent = ({
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
      <strong>Lorem ipsum dolor sit amet</strong>, consect adipiscing elit.
    </p>
  </SFAlert>
);
