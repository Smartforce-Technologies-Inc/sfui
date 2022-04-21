import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFRadio, SFRadioProps } from './SFRadio';

export default {
  title: 'Components/SFRadio',
  component: SFRadio,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['checked', 'disabled', 'isGroup', 'label']
    }
  },
  args: {
    label: 'Bagel'
  },
  argTypes: {
    checked: {
      description: 'If true, the component is checked.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    isGroup: {
      description: 'If true, the component will show the radio group layout.'
    },
    label: {
      description: 'The label asociated to the input value meaning.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    disabled: {
      description: 'If true, the component is disabled.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      },
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta;

const Template: Story<SFRadioProps> = (args) => <SFRadio {...args} />;

export const Default = Template.bind({});
