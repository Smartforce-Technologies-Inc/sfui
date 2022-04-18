import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFSelect, SFSelectProps, SFMenuOption } from './SFSelect';

const getOptions = (): SFMenuOption[] => {
  return [
    {
      label: 'Bagel number one',
      value: 'Bagel number one'
    },
    {
      label: 'Bagel number two',
      value: 'Bagel number two'
    },
    {
      label: 'Bagel number three',
      value: 'Bagel number three'
    }
  ];
};

export default {
  title: 'Components/SFSelect',
  component: SFSelect,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel',
    options: getOptions(),
    value: 'Bagel number one'
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    value: {
      options: getOptions().map((o: SFMenuOption) => o.value),
      control: {
        type: 'select'
      }
    },
    disabled: {
      description: 'If true, the component is disabled.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    error: {
      description: 'If true, the component is in error state.',
      table: {
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    helperText: {
      description: 'Text to help understand input values.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'text'
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
    options: {
      table: {
        disable: true
      }
    },
    defaultValue: {
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

const Template: Story<SFSelectProps> = (args) => <SFSelect {...args} />;

export const Default = Template.bind({});

export const Empty = Template.bind({});
Empty.args = {
  value: ''
};
Empty.argTypes = {
  value: {
    table: {
      disable: true
    }
  }
};

export const AllTogether = (args: SFSelectProps): JSX.Element => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      columnGap: '16px'
    }}
  >
    <SFSelect {...args} />
    <SFSelect {...args} error helperText='Incorrect value' />
    <SFSelect {...args} disabled />
    <SFSelect {...args} value='' />
  </div>
);
AllTogether.parameters = {
  controls: {
    disable: true
  }
};
