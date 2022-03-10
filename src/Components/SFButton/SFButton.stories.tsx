import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFButton } from './SFButton';

export default {
  title: 'Components/SFButton',
  component: SFButton,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    variant: 'outlined',
    sfColor: 'blue',
    size: 'medium',
    text: 'Click here'
  },
  argTypes: {
    sfColor: {
      description: 'The color of the button.'
    },
    text: {
      description: 'The text inside the button.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: { type: 'text' }
    },
    isLoading: {
      description: 'Tells whether the component finished loading.'
    },
    fullWidth: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    disabled: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
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
    },
    disableElevation: {
      table: { disable: true }
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
    focusRipple: {
      table: { disable: true }
    },
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
    }
  }
} as Meta;

export const Default: Story = ({ text, ...args }) => {
  return <SFButton {...args}>{text}</SFButton>;
};
