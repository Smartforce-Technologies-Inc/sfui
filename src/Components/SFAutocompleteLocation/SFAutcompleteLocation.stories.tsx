import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SFAutcompleteLocation,
  SFAutcompleteLocationProps
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

const Template: Story<SFAutcompleteLocationProps> = (args) => (
  <SFAutcompleteLocation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'Leloir 949'
};

export const CurrentLocation: Story<SFAutcompleteLocationProps> = (args) => {
  const [value, setValue] = React.useState<string>('');

  return (
    <SFAutcompleteLocation
      {...args}
      currentLocation
      value={value}
      onChange={(newValue: string): void => setValue(newValue)}
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
