import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SFAutocompleteChip,
  SFAutocompleteChipProps
} from './SFAutocompleteChip';
import { ChipListOptions } from '../../storybook/constants';

export default {
  title: 'Components/SFAutocompleteChip',
  component: SFAutocompleteChip,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel',
    items: []
  },
  argTypes: {
    disabled: {
      description: 'If true, the chip should be displayed in a disabled state.'
    },
    emptyMessage: {
      description: 'Message displayed when the input is empty.'
    },
    helperText: {
      description: 'Text to help understand input values.'
    },
    inputMinWidth: {
      description: 'Minimum width for the inner input field.'
    },
    items: {
      description: 'List of chip items loaded.',
      control: false
    },
    label: {
      description: 'The label asociated to the input value meaning.'
    },
    options: {
      description: 'List of options.',
      control: false
    },
    required: {
      table: { disable: true }
    },
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const AutocompleteChipItems = [
  'This War of Mine',
  'Back to the Future',
  'Toy Story',
  'Pulp Fiction',
  'WALL·E',
  'The Godfather'
];

const Template: Story<SFAutocompleteChipProps> = (args) => {
  const [values, setValues] = React.useState<string[]>(args.value);

  return <SFAutocompleteChip {...args} value={values} onChange={setValues} />;
};

export const Empty = Template.bind({});

export const WithValidation = Template.bind({});

export const WithOptions = Template.bind({});

export const WithItems = Template.bind({});

export const WithOptionsAndItems = Template.bind({});

WithValidation.args = {
  isValid: (value: string): boolean => value.length > 5,
  helperText: 'Value lenght should be > 5 chars'
};

WithOptions.args = {
  label: 'Movies',
  emptyMessage: 'No movies saved...',
  options: ChipListOptions
};

WithItems.args = {
  label: 'Movies',
  emptyMessage: 'No movies saved...',
  items: AutocompleteChipItems
};

WithOptionsAndItems.args = {
  label: 'Movies',
  emptyMessage: 'No movies saved...',
  items: AutocompleteChipItems,
  options: ChipListOptions
};
