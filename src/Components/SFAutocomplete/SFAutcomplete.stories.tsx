import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFMenuOption } from '../SFSelect/SFSelect';
import { SFAutocomplete, SFAutocompleteProps } from './SFAutocomplete';

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
  title: 'Components/SFAutocomplete',
  component: SFAutocomplete,
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
    onInputChange: {
      action: 'onInputChange',
      table: {
        disable: true
      }
    },
    freeSolo: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    options: {
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

const Template: Story<SFAutocompleteProps> = (args) => (
  <SFAutocomplete {...args} />
);

export const Default = Template.bind({});
Default.argTypes = {
  disabled: {
    table: {
      disable: true
    }
  }
};

export const Disabled = Template.bind({});
Disabled.argTypes = {
  inputValue: {
    defaultValue: 'Bagel number one',
    control: {
      type: 'text'
    }
  },
  disabled: {
    defaultValue: true,
    control: {
      type: 'boolean'
    }
  }
};
