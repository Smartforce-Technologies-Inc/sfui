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
  },
  argTypes: {
    ref: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof SFPaper>;

// TODO see why ref argtypes doesnt work.

const Template: Story = (args) => (
  <SFPaper {...args}>
    <p>All Stories are wrapped into a SFPaper component</p>
  </SFPaper>
);

export const Default = Template.bind({});
