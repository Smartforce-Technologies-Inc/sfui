import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SFAutcompleteLocation,
  SFAutcompleteLocationProps
} from './SFAutcompleteLocation';

export default {
  title: 'Components/SFAutcompleteLocation',
  component: SFAutcompleteLocation,
  args: {
    label: 'Bagel',
    value: 'Leloir 949'
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta;

const Template: Story<SFAutcompleteLocationProps> = (args) => (
  <SFAutcompleteLocation {...args} />
);

export const Default = Template.bind({});
