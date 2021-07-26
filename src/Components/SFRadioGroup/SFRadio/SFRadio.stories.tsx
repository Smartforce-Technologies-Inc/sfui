import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFRadio, SFRadioProps } from './SFRadio';

export default {
  title: 'Components/SFRadio',
  component: SFRadio,
  args: {
    label: 'Bagel'
  },
  argTypes: {
    checked: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    action: {
      table: {
        disable: true
      }
    },
    focusVisibleClassName: {
      table: {
        disable: true
      }
    },
    onFocusVisible: {
      table: {
        disable: true
      }
    },
    TouchRippleProps: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFRadioProps> = (args) => <SFRadio {...args} />;

export const Default = Template.bind({});
