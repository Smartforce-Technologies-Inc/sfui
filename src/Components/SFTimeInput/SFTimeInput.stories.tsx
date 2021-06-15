import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFTimeInput, SFTimeInputProps } from './SFTimeInput';

export default {
  title: 'Components/SFTimeInput',
  component: SFTimeInput,
  args: {
    label: 'Bagel',
    value: '12:00 AM'
  },
  argTypes: {
    onChange: { action: 'onChange', table: { disable: true } },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    focused: {
      table: {
        disable: true
      }
    },
    hiddenLabel: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFTimeInputProps> = (args) => <SFTimeInput {...args} />;

export const Default = Template.bind({});
