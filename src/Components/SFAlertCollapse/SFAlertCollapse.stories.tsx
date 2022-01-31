import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFAlertCollapse } from './SFAlertCollapse';

export default {
  title: 'Components/SFAlertCollapse',
  component: SFAlertCollapse,
  args: {
    title: 'Lorem ipsum dolor sit amet.'
  },
  argTypes: {
    isOpen: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
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
      defaultValue: true,
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const AlertCollpase = ({
  isOpen,
  title,
  type,
  onClose,
  ...args
}): JSX.Element => (
  <SFAlertCollapse
    {...args}
    isOpen={isOpen}
    title={title}
    type={type}
    onClose={(): void => onClose()}
  >
    <p style={{ padding: '0px', margin: '0px' }}>
      Lorem ipsum dolor sit amet, consect adipiscing elit.
    </p>
  </SFAlertCollapse>
);
