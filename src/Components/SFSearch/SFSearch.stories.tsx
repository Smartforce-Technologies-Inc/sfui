import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFSearch, SFSearchProps } from './SFSearch';

export default {
  title: 'Components/SFSearch',
  component: SFSearch,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Search',
    value: '',
    clearButtonProps: { 'aria-label': 'Clear search value' }
  },
  argTypes: {
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
      },
      control: false
    },
    disabled: {
      table: {
        disable: true
      }
    },
    error: {
      table: {
        disable: true
      }
    },
    hiddenLabel: {
      table: {
        disable: true
      }
    },
    margin: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    variant: {
      table: {
        disable: true
      }
    },
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    }
  }
};

const Template: Story<SFSearchProps> = (args) => <SFSearch {...args} />;

export const Default = Template.bind({});
