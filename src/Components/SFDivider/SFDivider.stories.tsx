import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFDivider, SFDividerProps } from './SFDivider';

export default {
  title: 'Components/SFDivider',
  component: SFDivider,
  parameters: { controls: { sort: 'alpha' } },
  argTypes: {
    size: {
      defaultValue: 2,
      type: 'number'
    },
    className: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFDividerProps> = (args) => <SFDivider {...args} />;
export const Default = Template.bind({});
