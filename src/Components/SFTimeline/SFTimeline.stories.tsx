import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFTimeline, SFTimelineItem, SFTimelineProps } from './SFTimeline';

const items: SFTimelineItem[] = [
  {
    title: 'Title',
    subtitle: 'Subtitle'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle'
  }
];

export default {
  title: 'Components/SFTimeline',
  component: SFTimeline,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    items,
    size: 'medium',
    selectedIndex: 0
  },
  argTypes: {
    size: {
      description: 'The size of the timeline.'
    },
    selectedIndex: {
      description: 'The item index in the timeline to be selected.'
    },
    onItemClick: {
      table: {
        disable: true
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    style: {
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

const Template: Story<SFTimelineProps> = (args) => <SFTimeline {...args} />;

export const Default = Template.bind({});
