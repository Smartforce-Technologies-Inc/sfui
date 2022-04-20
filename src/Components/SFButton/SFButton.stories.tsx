import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFButton } from './SFButton';

export default {
  title: 'Components/SFButton',
  component: SFButton,
  parameters: {
    controls: {
      sort: 'alpha',
      include: [
        'disabled',
        'fullWidth',
        'isLoading',
        'sfColor',
        'size',
        'text',
        'variant'
      ]
    }
  },
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
      description: 'If true, displays a spinner inside the button.'
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
    onClick: {
      action: 'onClick'
    }
  }
} as Meta;

export const Default: Story = ({ text, ...args }) => {
  return <SFButton {...args}>{text}</SFButton>;
};
