import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFSwitch, SFSwitchProps } from './SFSwitch';

export default {
  title: 'Components/SFSwitch',
  component: SFSwitch,
  parameters: { controls: { sort: 'alpha' } },
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
    },
    sfColor: {
      description: 'The color of the switch.'
    },
    edge: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    centerRipple: {
      table: {
        disable: true
      }
    },
    disableFocusRipple: {
      table: {
        disable: true
      }
    },
    disableTouchRipple: {
      table: {
        disable: true
      }
    },
    focusRipple: {
      table: {
        disable: true
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

const Template: Story<SFSwitchProps> = (args) => <SFSwitch {...args} />;

export const Default = Template.bind({});
