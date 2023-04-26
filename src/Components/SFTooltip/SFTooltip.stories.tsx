import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SFTooltip, SFTooltipProps } from './SFTooltip';

export default {
  title: 'Components/SFTooltip',
  component: SFTooltip,
  parameters: { controls: { sort: 'alpha', exclude: ['content', 'ref'] } },
  args: {
    title: 'Title',
    open: true,
    arrow: true,
    sfColor: 'default',
    placement: 'bottom-end'
  },
  argTypes: {
    placement: {
      description: 'The placement of the tooltip.',
      table: {
        type: {
          summary: `'bottom-end'
          | 'bottom-start'
          | 'bottom'
          | 'left-end'
          | 'left-start'
          | 'left'
          | 'right-end'
          | 'right-start'
          | 'right'
          | 'top-end'
          | 'top-start'
          | 'top'`
        },
        defaultValue: {
          summary: 'bottom'
        }
      },
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
      ],
      control: {
        type: 'select'
      }
    },
    sfColor: {
      description: 'The color of the tooltip.'
    },
    open: {
      description: 'If true, tooltip will be open.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: true
        }
      }
    },
    arrow: {
      description: 'If true, tooltip will show an arrow in the border.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: true
        }
      }
    }
  }
} as ComponentMeta<typeof SFTooltip>;

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
