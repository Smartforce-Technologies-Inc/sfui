import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFSwitch, SFSwitchProps } from './SFSwitch';

export default {
  title: 'Components/SFSwitch',
  component: SFSwitch,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['checked', 'disabled', 'edge', 'label', 'sfColor', 'size']
    }
  },
  args: {
    label: 'Off / On',
    checked: false,
    disabled: false,
    size: 'medium',
    sfColor: 'primary',
    edge: false
  },
  argTypes: {
    onChange: {
      action: 'onChange'
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
    },
    sfColor: {
      description: 'The color of the switch.'
    },
    edge: {
      options: [false, 'start', 'end'],
      control: {
        type: 'radio'
      },
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    }
  }
} as Meta;

const Template: Story<SFSwitchProps> = (args) => <SFSwitch {...args} />;

export const Default = Template.bind({});
