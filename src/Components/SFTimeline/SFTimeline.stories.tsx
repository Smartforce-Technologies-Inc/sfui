import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';

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
  parameters: {
    controls: { sort: 'alpha', include: ['size', 'selectedIndex'] }
  },
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
    }
  }
} as ComponentMeta<typeof SFTimeline>;

const Template: Story<SFTimelineProps> = (args) => <SFTimeline {...args} />;

export const Default = Template.bind({});
export const WithChildren = Template.bind({});

WithChildren.args = {
  items: [
    ...items,
    {
      title: 'Title',
      subtitle: 'Subtitle',
      children: <p>This is a child</p>
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      children: <p>This is another child</p>
    }
  ]
};
