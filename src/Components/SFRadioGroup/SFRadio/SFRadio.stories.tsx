import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFRadio, SFRadioProps } from './SFRadio';

export default {
  title: 'Components/SFRadio',
  component: SFRadio
} as Meta;

const Template: Story<SFRadioProps> = (args) => <SFRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Bagel'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Bagel',
  disabled: true
};
