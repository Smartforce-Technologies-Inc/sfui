import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SFSpinner, SFSpinnerProps } from './SFSpinner';

export default {
  title: 'Components/SFSpinner',
  component: SFSpinner,
  parameters: { controls: { sort: 'alpha', include: ['size'] } },
  args: {
    size: 40
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
    }
  }
} as ComponentMeta<typeof SFSpinner>;

const Template: Story<SFSpinnerProps> = (args) => <SFSpinner {...args} />;

export const Default = Template.bind({});
