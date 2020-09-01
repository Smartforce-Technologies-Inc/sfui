import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFSwitch, SFSwitchProps } from './SFSwitch';

export default {
  title: 'Components/SFSwitch',
  component: SFSwitch
} as Meta;

const Template: Story<SFSwitchProps> = (args) => <SFSwitch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Switch',
  onChangeonChange: (): void => {
    console.log('Switched');
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'Secondary',
  onChange: (): void => {
    console.log('Switched');
  }
};

export const Default = Template.bind({});
Default.args = {
  color: 'default',
  onChange: (): void => {
    console.log('Switched');
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
