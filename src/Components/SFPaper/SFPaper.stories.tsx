import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFPaper, SFPaperProps } from './SFPaper';

export default {
  title: 'Components/SFPaper',
  component: SFPaper,
  argTypes: {
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFPaperProps> = (args) => (
  <SFPaper {...args}>
    <p>All Stories are wrapped into a SFPaper component</p>
  </SFPaper>
);

export const Default = Template.bind({});
Default.parameters = {
  controls: {
    disable: true
  }
};
