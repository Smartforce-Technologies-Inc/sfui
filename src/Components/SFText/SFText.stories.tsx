import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SFText, SFTextProps } from './SFText';

export default {
  title: 'Components/SFText',
  component: SFText,
  parameters: { controls: { sort: 'alpha', exclude: ['className'] } },
  args: {
    type: 'component-title-number',
    sfColor: 'default'
  },
  argTypes: {
    type: {
      description: 'The text type',
      table: {
        type: {
          summary: `'component-title-number'
          | 'component-title'
          | 'component-1-extraBold'
          | 'component-1-medium'
          | 'component-1'
          | 'component-button-L'
          | 'component-button-M'
          | 'component-2-medium'
          | 'component-2'
          | 'component-3'
          | 'component-button-S'
          | 'component-tooltip-title'
          | 'component-chip-S-M'
          | 'component-tooltip-text'
          | 'component-notification-label'
          | 'component-calendar-label'
          | 'component-messages'`
        },
        defaultValue: {
          summary: 'bottom'
        }
      },
      options: [
        'component-title-number',
        'component-title',
        'component-1-extraBold',
        'component-1-medium',
        'component-1',
        'component-button-L',
        'component-button-M',
        'component-2-medium',
        'component-2',
        'component-3',
        'component-button-S',
        'component-tooltip-title',
        'component-chip-S-M',
        'component-tooltip-text',
        'component-notification-label',
        'component-calendar-label',
        'component-messages'
      ],
      control: {
        type: 'select'
      }
    },
    sfColor: {
      description: 'The color of the text.'
    }
  }
} as ComponentMeta<typeof SFText>;

const Template: Story<SFTextProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px'
    }}
  >
    <SFText {...args}>Lorem ipsum dolor</SFText>
  </div>
);

export const Default = Template.bind({});
