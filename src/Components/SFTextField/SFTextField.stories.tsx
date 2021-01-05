import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFTextField, SFTextFieldProps } from './SFTextField';

export default {
  title: 'Components/SFTextField',
  component: SFTextField,
  args: {
    label: 'Bagel'
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    value: {
      defaultValue: 'Some text',
      control: {
        type: 'text'
      }
    },
    type: {
      defaultValue: 'text',
      control: {
        type: 'select',
        options: ['text', 'password']
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    error: {
      control: {
        type: 'boolean'
      }
    },
    helperText: {
      control: {
        type: 'text'
      }
    },
    multiline: {
      control: {
        type: 'boolean'
      }
    },
    defaultValue: {
      table: {
        disable: true
      }
    },
    variant: {
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

const Template: Story<SFTextFieldProps> = (args) => <SFTextField {...args} />;

export const Default = Template.bind({});

const AllTemplate: Story<SFTextFieldProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      columnGap: '16px'
    }}
  >
    <SFTextField {...args} />
    <SFTextField {...args} error helperText='Incorrect value' />
    <SFTextField {...args} disabled />
    <SFTextField {...args} value='' helperText='Helper message' />
  </div>
);

export const AllTogether = AllTemplate.bind({});
AllTogether.parameters = {
  controls: {
    disable: true
  }
};
