import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, ComponentMeta } from '@storybook/react';

import { SFCheckbox, SFCheckboxProps } from './SFCheckbox';

export default {
  title: 'Components/SFCheckbox',
  component: SFCheckbox,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['label', 'onChange', 'checked', 'disabled']
    }
  },
  args: {
    label: 'Bagel',
    checked: true,
    disabled: false
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    label: {
      description: 'The label asociated to the input value meaning.'
    },
    checked: {
      description: 'If true, the component is checked.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      description: 'If true, the checkbox will be disabled.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    }
  }
} as ComponentMeta<typeof SFCheckbox>;

const Template: Story<SFCheckboxProps> = (args) => <SFCheckbox {...args} />;

export const Default = Template.bind({});
