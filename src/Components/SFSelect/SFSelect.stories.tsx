import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFSelect, SFSelectProps } from './SFSelect';
import { SFMenuOption } from '../SFMenuOption';

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
  args: {
    label: 'Bagel',
    options: getOptions()
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    value: {
      defaultValue: 'Bagel number one',
      control: {
        type: 'select',
        options: getOptions().map((o: SFMenuOption) => o.value)
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
