import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFRadio, SFRadioProps } from './SFRadio';

export default {
  title: 'Components/SFRadio',
  component: SFRadio,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel'
  },
  argTypes: {
    checked: {
      description: 'If true, the component is checked.',
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
    isGroup: {
      description: 'If true, the component will show the radio group layout.'
    },
    label: {
      description: 'The label asociated to the input value meaning.',
      table: {
        type: {
          summary: 'string'
        }
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
    edge: {
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
