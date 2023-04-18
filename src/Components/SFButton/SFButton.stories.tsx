import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';

import { SFButton } from './SFButton';

export default {
  title: 'Components/SFButton',
  component: SFButton,
  parameters: {
    controls: {
      sort: 'alpha',
      include: [
        'sfColor',
        'text',
        'isLoading',
        'fullWidth',
        'disabled',
        'variant',
        'size'
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
} as ComponentMeta<typeof SFButton>;

export const Default: Story = ({ text, ...args }) => {
  return <SFButton {...args}>{text}</SFButton>;
};
