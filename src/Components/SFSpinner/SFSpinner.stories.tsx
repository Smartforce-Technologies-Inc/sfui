import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFSpinner, SFSpinnerProps } from './SFSpinner';

export default {
  title: 'Components/SFSpinner',
  component: SFSpinner,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    size: 40,
    'aria-label': 'Spinner'
  },
  argTypes: {
    size: {
      description: `The size of the circle. If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g '3rem'.`,
      table: {
        type: {
          summary: 'number | string'
        }
      },
      control: {
        type: 'number'
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFSpinnerProps> = (args) => <SFSpinner {...args} />;

export const Default = Template.bind({});
