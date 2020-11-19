import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFIconButton, SFIconButtonProps } from './SFIconButton';

export default {
  title: 'Components/SFIconButton',
  component: SFIconButton
} as Meta;

const Template: Story<SFIconButtonProps> = (args) => <SFIconButton {...args} />;

export const Default = Template.bind({});
