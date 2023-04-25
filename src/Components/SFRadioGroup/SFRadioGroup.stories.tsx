import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
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
  parameters: { controls: { sort: 'alpha', include: ['label', 'options'] } },
  args: {
    options,
    label: 'Bagel'
  },
  argTypes: {
    label: {
      description: 'The label asociated to the input value meaning.'
    }
  }
} as ComponentMeta<typeof SFRadioGroup>;

const Template: Story<SFRadioGroupProps> = (args) => <SFRadioGroup {...args} />;

export const Default = Template.bind({});
