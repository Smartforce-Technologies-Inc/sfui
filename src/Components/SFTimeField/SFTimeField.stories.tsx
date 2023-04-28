import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SFTimeField } from './SFTimeField';

export default {
  title: 'Components/SFTimeField',
  component: SFTimeField,
  parameters: {
    controls: { sort: 'alpha', include: ['onChange', 'disabled', 'label'] }
  },
  args: {
    label: 'Bagel'
  },
  argTypes: {
    onChange: { action: 'onChange', table: { disable: true } },
    disabled: {
      description: 'If true, the component will be disabled.',
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
    label: {
      description: 'The label asociated to the input value meaning.',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
    // mask: {
    //   description: 'Custom mask. Can be used to override generate from format.',
    //   table: {
    //     type: {
    //       summary: 'string'
    //     },
    //     defaultValue: {
    //       summary: '__:__ _M'
    //     }
    //   }
    // }
  }
} as ComponentMeta<typeof SFTimeField>;

const Template: ComponentStory<typeof SFTimeField> = (args) => (
  <SFTimeField {...args} />
);

export const Default = Template.bind({});

export const Mask = Template.bind({});

// Mask.args = {
//   mask: '__:__',
//   format: 'HH:mm'
// };
