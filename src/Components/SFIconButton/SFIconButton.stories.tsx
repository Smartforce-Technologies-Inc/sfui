import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFIconButton, SFIconButtonProps } from './SFIconButton';

export default {
  title: 'Components/SFIconButton',
  component: SFIconButton
} as Meta;

const Template: Story<SFIconButtonProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      justifyItems: 'center',
      alignItems: 'center'
    }}
  >
    <div>
      <SFIconButton {...args} sfSize='tiny' />
    </div>
    <div>
      <SFIconButton {...args} sfSize='small' />
    </div>
    <div>
      <SFIconButton {...args} sfSize='medium' />
    </div>
    <div>
      <SFIconButton {...args} sfSize='large' />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.argTypes = {
  onClick: { action: 'clicked' }
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
