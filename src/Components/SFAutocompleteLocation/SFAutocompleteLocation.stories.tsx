import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SFAutocompleteLocation,
  SFAutocompleteLocationProps,
  SFAutocompleteLocationResult
} from './SFAutocompleteLocation';

export default {
  title: 'Components/SFAutcompleteLocation',
  component: SFAutocompleteLocation,
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
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    currentLocation: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story = ({ text, ...args }) => (
  <SFAutocompleteLocation
    {...(args as SFAutocompleteLocationProps)}
    value={{
      text
    }}
  />
);

export const Default = Template.bind({});
Default.argTypes = {
  text: {
    defaultValue: 'Leloir',
    control: {
      type: 'text'
    }
  },
  currentLocationType: {
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

export const CurrentLocation: Story<SFAutocompleteLocationProps> = (args) => {
  const [value, setValue] = React.useState<SFAutocompleteLocationResult>({
    text: ''
  });

  const onChange = (newValue: SFAutocompleteLocationResult): void => {
    setValue(newValue);
    args.onChange(newValue);
  };

  return (
    <SFAutocompleteLocation
      {...args}
      currentLocation
      value={value}
      onChange={onChange}
    />
  );
};

CurrentLocation.argTypes = {
  value: {
    table: {
      disable: true
    }
  }
};
