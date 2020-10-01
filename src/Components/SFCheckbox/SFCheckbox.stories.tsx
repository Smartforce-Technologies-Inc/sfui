import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFCheckbox, SFCheckboxProps } from './SFCheckbox';

export default {
  title: 'Components/SFCheckbox',
  component: SFCheckbox
} as Meta;

const Template: Story<SFCheckboxProps> = (args) => <SFCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Bagel'
};

export const Desabled = Template.bind({});
Desabled.args = {
  label: 'Bagel',
  disabled: true
};

export const DesabledChecked = Template.bind({});
DesabledChecked.args = {
  label: 'Bagel',
  disabled: true,
  checked: true
};
