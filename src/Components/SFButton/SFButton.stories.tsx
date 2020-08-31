import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFButton, SFButtonProps } from './SFButton';

export default {
  title: 'Components/SFButton',
  component: SFButton
} as Meta;

const Template: Story<SFButtonProps> = (args) => (
  <SFButton {...args}>Click Me</SFButton>
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  color: 'Secondary',
  onClick: (): void => {
    console.log('Clicked');
  }
};

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
  color: 'default'
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  disabled: true
};
