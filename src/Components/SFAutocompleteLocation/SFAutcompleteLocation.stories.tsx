import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SFAutcompleteLocation,
  SFAutcompleteLocationProps,
  SFAutcompleteLocationResult
} from './SFAutcompleteLocation';

export default {
  title: 'Components/SFAutcompleteLocation',
  component: SFAutcompleteLocation,
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
  <SFAutcompleteLocation
    {...(args as SFAutcompleteLocationProps)}
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

export const CurrentLocation: Story<SFAutcompleteLocationProps> = (args) => {
  const [value, setValue] = React.useState<SFAutcompleteLocationResult>({
    text: ''
  });

  const onChange = (newValue: SFAutcompleteLocationResult): void => {
    setValue(newValue);
    args.onChange(newValue);
  };

  return (
    <SFAutcompleteLocation
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
