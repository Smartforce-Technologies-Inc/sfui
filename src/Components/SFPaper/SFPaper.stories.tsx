import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

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
} as Meta;

// TODO see why ref argtypes doesnt work.

const Template: Story = (args) => (
  <SFPaper {...args}>
    <p>All Stories are wrapped into a SFPaper component</p>
  </SFPaper>
);

export const Default = Template.bind({});
