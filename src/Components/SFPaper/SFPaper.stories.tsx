import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFPaper, SFPaperProps } from './SFPaper';

export default {
  title: 'Components/SFPaper',
  component: SFPaper
} as Meta;

const Template: Story<SFPaperProps> = (args) => <SFPaper {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const Default = Template.bind({});

export const Disabled = Template.bind({});
