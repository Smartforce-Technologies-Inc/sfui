import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFText, SFTextProps } from './SFText';

export default {
  title: 'Components/SFText',
  component: SFText,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    type: 'component-title-number',
    sfColor: 'default'
  },
  argTypes: {
    type: {
      description: 'The placement of the tooltip.',
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
    },
    className: {
      table: { disable: true }
    }
  }
} as Meta;

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
