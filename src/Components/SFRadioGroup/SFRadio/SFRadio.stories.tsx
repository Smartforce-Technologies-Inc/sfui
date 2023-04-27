import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SFRadio } from './SFRadio';

export default {
  title: 'Components/SFRadio',
  component: SFRadio,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['onChange', 'checked', 'isGroup', 'label', 'disabled']
    }
  },
  args: {
    label: 'Bagel',
    checked: false
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
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
} as ComponentMeta<typeof SFRadio>;

const Template: ComponentStory<typeof SFRadio> = (args) => (
  <SFRadio {...args} />
);

export const Default = Template.bind({});
