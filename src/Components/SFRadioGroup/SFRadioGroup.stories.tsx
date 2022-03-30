import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  SFRadioGroup,
  SFRadioGroupProps,
  SFRadioOptionsProps
} from './SFRadioGroup';

const options: SFRadioOptionsProps[] = [
  { value: 'Bagel 1', label: 'Bagel 1', disabled: false },
  { value: 'Bagel 2', label: 'Bagel 2', disabled: false },
  { value: 'Bagel 3', label: 'Bagel 3', disabled: false },
  { value: 'Others', label: 'Others', disabled: true }
];

export default {
  title: 'Components/SFRadioGroup',
  component: SFRadioGroup,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    options,
    label: 'Bagel'
  },
  argTypes: {
    label: {
      description: 'The label asociated to the input value meaning.'
    },
    color: {
      table: {
        disable: true
      }
    },
    options: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFRadioGroupProps> = (args) => <SFRadioGroup {...args} />;

export const Default = Template.bind({});
