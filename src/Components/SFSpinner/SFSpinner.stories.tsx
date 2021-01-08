import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFSpinner, SFSpinnerProps } from './SFSpinner';

export default {
  title: 'Components/SFSpinner',
  component: SFSpinner,
  argTypes: {
    size: {
      defaultValue: 40,
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
