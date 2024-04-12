import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SFMenuOption } from '../SFSelect/SFSelect';
import { SFAutocomplete } from './SFAutocomplete';

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
  parameters: {
    controls: { sort: 'alpha', exclude: ['inputValue', 'options'] }
  },
  args: {
    label: 'Bagel',
    options: getOptions()
  },
  argTypes: {
    allowEmpty: {
      description: 'Determinates if the input could be empty.'
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    error: {
      description: 'If true, the component is in error state.'
    },
    helperText: {
      description: 'Text to help understand input values.'
    },
    freeSolo: {
      description:
        'If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options.',
      control: {
        type: 'boolean'
      },
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    popupIconType: {
      description:
        "Type of popup icon to show. One of these: 'default' | 'search' | 'none' ",
      control: {
        type: 'radio',
        options: ['default', 'search', 'none']
      },
      defaultValue: 'default'
    },
    inputValue: {
      description: 'The value of the autocomplete input.',
      control: {
        type: 'text'
      },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    label: {
      description: 'The label asociated to the input value meaning.'
    },
    options: {},
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
    required: {
      description: 'Indicates whether the input is required or not.'
    },
    ref: {
      table: {
        disable: true
      }
    },
    value: {}
  }
} as ComponentMeta<typeof SFAutocomplete>;

const Template: ComponentStory<typeof SFAutocomplete> = ({ ref, ...args }) => (
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
Disabled.args = {
  inputValue: 'Bagel number one',
  disabled: true
};

export const ClearOnBlur: ComponentStory<typeof SFAutocomplete> = ({
  ref,
  ...args
}) => {
  const [value, setValue] = React.useState<string>('');

  return (
    <SFAutocomplete
      {...args}
      clearOnBlur
      options={getOptions()}
      label='Bagel'
      value={value}
      onChange={(value): void =>
        setValue(typeof value === 'string' ? value : value.value)
      }
    />
  );
};

ClearOnBlur.argTypes = {
  freeSolo: {
    table: {
      disable: true
    }
  },
  value: {
    table: {
      disable: true
    }
  }
};
