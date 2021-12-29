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
  args: {
    items,
    size: 'medium',
    selectedIndex: 0
  },
  argTypes: {
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
