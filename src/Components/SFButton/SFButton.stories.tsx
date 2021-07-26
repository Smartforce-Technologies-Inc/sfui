import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFButton } from './SFButton';

export default {
  title: 'Components/SFButton',
  component: SFButton,
  argTypes: {
    onClick: {
      action: 'onClick',
      table: {
        disable: true
      }
    },
    onFocusVisible: {
      table: {
        disable: true
      }
    },
    variant: {
      defaultValue: 'outlined'
    },
    sfColor: {
      defaultValue: 'blue'
    },
    size: {
      defaultValue: 'medium'
    },
    text: {
      defaultValue: 'Click here',
      control: { type: 'text' }
    },
    color: {
      table: { disable: true }
    },
    children: {
      table: { disable: true }
    },
    endIcon: {
      table: { disable: true }
    },
    startIcon: {
      table: { disable: true }
    },
    href: {
      table: { disable: true }
    },
    tabIndex: {
      table: { disable: true }
    },
    TouchRippleProps: {
      table: { disable: true }
    },
    ref: {
      table: { disable: true }
    },
    focusVisibleClassName: {
      table: { disable: true }
    },
    centerRipple: {
      table: { disable: true }
    },
    action: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story = ({ text, ...args }) => {
  return <SFButton {...args}>{text}</SFButton>;
};
