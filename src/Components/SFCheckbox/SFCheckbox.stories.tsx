import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFCheckbox, SFCheckboxProps } from './SFCheckbox';

export default {
  title: 'Components/SFCheckbox',
  component: SFCheckbox,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel',
    checked: true,
    disabled: false
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    label: {
      description: 'The text to be used in an enclosing label element.'
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
      description: 'If true, the checkbox will be disabled.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    disableRipple: {
      table: { disable: true }
    },
    disableFocusRipple: {
      table: { disable: true }
    },
    disableTouchRipple: {
      table: { disable: true }
    },
    centerRipple: {
      table: { disable: true }
    },
    edge: {
      table: { disable: true }
    },
    focusRipple: {
      table: { disable: true }
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

const Template: Story<SFCheckboxProps> = (args) => <SFCheckbox {...args} />;

export const Default = Template.bind({});
