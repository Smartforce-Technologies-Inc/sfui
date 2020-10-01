import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  SFRadioGroup,
  SFRadioGroupProps,
  SFRadioOptionsProps
} from './SFRadioGroup';

export default {
  title: 'Components/SFRadioGroup',
  component: SFRadioGroup
} as Meta;

const options: SFRadioOptionsProps[] = [
  { value: 'Bagel 1', label: 'Bagel 1', disabled: false },
  { value: 'Bagel 2', label: 'Bagel 2', disabled: false },
  { value: 'Bagel 3', label: 'Bagel 3', disabled: false },
  { value: 'Others', label: 'Others', disabled: true }
];

const Template: Story<SFRadioGroupProps> = (args) => <SFRadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Bagel',
  options: options
};
