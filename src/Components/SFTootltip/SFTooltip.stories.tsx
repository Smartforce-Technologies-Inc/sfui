import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFTooltip, SFTooltipProps } from './SFTooltip';

export default {
  title: 'Components/SFTooltip',
  component: SFTooltip,
  args: {
    title: 'Title',
    open: true,
    arrow: true
  },
  argTypes: {
    placement: {
      defaultValue: 'bottom-end',
      control: {
        type: 'select',
        options: [
          'bottom-end',
          'bottom-start',
          'bottom',
          'left-end',
          'left-start',
          'left',
          'right-end',
          'right-start',
          'right',
          'top-end',
          'top-start',
          'top'
        ]
      }
    },
    content: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFTooltipProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px'
    }}
  >
    <SFTooltip {...args}>
      <span>Tooltip Ref</span>
    </SFTooltip>
  </div>
);

export const Default = Template.bind({});

export const WithContent = Template.bind({});
WithContent.args = {
  content: (
    <p style={{ margin: 0 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
      sollicitudin nulla dui.
    </p>
  )
};
