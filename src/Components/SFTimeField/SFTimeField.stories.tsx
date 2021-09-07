import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFTimeField, SFTimeFieldProps } from './SFTimeField';

export default {
  title: 'Components/SFTimeField',
  component: SFTimeField,
  args: {
    label: 'Bagel'
  },
  argTypes: {
    onChange: { action: 'onChange', table: { disable: true } },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    value: {
      table: {
        disable: true
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

const Template: Story<SFTimeFieldProps> = (args) => <SFTimeField {...args} />;

export const Default = Template.bind({});
