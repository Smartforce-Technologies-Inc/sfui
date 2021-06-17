import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFNumericField, SFNumericFieldProps } from './SFNumericField';

export default {
  title: 'Components/SFNumericField',
  component: SFNumericField,
  args: {
    label: 'Bagel'
  },
  argTypes: {
    prefix: {
      control: {
        type: 'text'
      }
    },
    suffix: {
      control: {
        type: 'text'
      }
    },
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    numberFormatProps: {
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

const Template: Story = ({ prefix, suffix, ...args }) => (
  <SFNumericField {...args} numberFormatProps={{ prefix, suffix }} />
);

export const Default = Template.bind({});
