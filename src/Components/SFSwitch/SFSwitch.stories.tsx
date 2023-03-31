import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';

import { SFSwitch, SFSwitchProps } from './SFSwitch';

export default {
  title: 'Components/SFSwitch',
  component: SFSwitch,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['label', 'checked', 'disabled', 'size']
    }
  },
  args: {
    label: 'Off / On',
    checked: false,
    disabled: false,
    size: 'medium'
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    checked: {
      description: 'If true, the component is checked.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      description: 'If true, the component is disabled.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    size: {
      description: 'The size of the switch.',
      table: {
        type: {
          summary: 'small | medium'
        },
        defaultValue: {
          summary: 'medium'
        }
      },
      options: ['small', 'medium'],
      control: {
        type: 'radio'
      }
    },
    label: {
      description: 'The label asociated to the input value meaning.',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
} as ComponentMeta<typeof SFSwitch>;

const Template: Story<SFSwitchProps> = (args) => <SFSwitch {...args} />;

export const Default = Template.bind({});
