import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SFSearch } from './SFSearch';

export default {
  title: 'Components/SFSearch',
  component: SFSearch,
  parameters: {
    controls: { sort: 'alpha', include: ['label', 'value', 'onChange'] }
  },
  args: {
    label: 'Search',
    value: ''
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    label: {
      description: 'The label asociated to the input value meaning.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    value: {
      description: 'The value of the input element.',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
} as ComponentMeta<typeof SFSearch>;

const Template: ComponentStory<typeof SFSearch> = (args) => (
  <SFSearch {...args} />
);

export const Default = Template.bind({});
