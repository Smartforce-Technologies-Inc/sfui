import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFSwitch, SFSwitchProps } from './SFSwitch';

export default {
  title: 'Components/SFSwitch',
  component: SFSwitch
} as Meta;

const Template: Story<SFSwitchProps> = (args) => <SFSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Off / On',
  onChange: (): void => {
    console.log('Switched');
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Off / On',
  disabled: true,
  onChange: (): void => {
    console.log('Switched');
  }
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: 'Off / On',
  disabled: true,
  checked: true,
  onChange: (): void => {
    console.log('Switched');
  }
};
