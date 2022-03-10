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
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel'
  },
  argTypes: {
    currentLocation: {
      description: `If true, the component gets the device's current location coordinates.`
    },
    disabled: {
      description: 'If true, the component is disabled.',
      control: {
        type: 'boolean'
      }
    },
    label: {
      description: 'The label asociated to the input value meaning.'
    },
    minChar: {
      description:
        'The minimun number of characters required for the input value to do the search.'
    },
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    required: {
      table: { disable: true }
    },
    value: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const AutocompleteLocationTemplate: Story<SFAutocompleteLocationProps> = (
  args
) => {
  const [value, setValue] = React.useState<SFAutocompleteLocationResult>({
    text: ''
  });

  const onChange = (newValue: SFAutocompleteLocationResult): void => {
    setValue(newValue);
    args.onChange(newValue);
  };

  return <SFAutocompleteLocation {...args} value={value} onChange={onChange} />;
};

export const Default = AutocompleteLocationTemplate.bind({});
Default.argTypes = {
  currentLocation: {
    table: {
      disable: true
    }
  },
  currentLocationType: {
    table: {
      disable: true
    }
  }
};

export const CurrentLocation = AutocompleteLocationTemplate.bind({});
CurrentLocation.args = {
  currentLocation: true,
  currentLocationType: 'address'
};
