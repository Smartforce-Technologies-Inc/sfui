import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';

import { SFPaper, SFPaperProps } from './SFPaper';

export default {
  title: 'Components/SFPaper',
  component: SFPaper,
  parameters: {
    controls: {
      disable: true
    }
  }
} as ComponentMeta<typeof SFPaper>;

const Template: Story<SFPaperProps> = (args) => (
  <SFPaper {...args}>
    <p>All Stories are wrapped into a SFPaper component</p>
  </SFPaper>
);

export const Default = Template.bind({});
