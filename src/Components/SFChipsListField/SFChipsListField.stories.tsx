import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ChipListOptions } from '../../storybook/constants';
import {
  ChipFieldValueType,
  SFChipsListField,
  SFChipsListFieldProps
} from './SFChipsListField';

export default {
  title: 'Components/SFChipListField',
  component: SFChipsListField,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel'
  },
  argTypes: {
    delimiters: {
      description: 'The delimiter used to separate the values provided.',
      control: false
    },
    disabled: {
      description: 'If true, the chip should be displayed in a disabled state.'
    },
    emptyMessage: {
      description: 'Message displayed when the input is empty.'
    },
    freeSolo: {
      description:
        'If true, the component is free solo, meaning that the user input is not bound to provided options.'
    },
    helperText: {
      description: 'Text to help understand input values.'
    },
    inputMinWidth: {
      description: 'Minimum width for the inner input field.'
    },
    inputType: {
      description: 'The type of the inner input component field.'
    },
    isEditable: {
      description: 'If true, the content of the chip is able to be edited.'
    },
    itemChipDisplay: {
      description: 'How the loaded chip items should be displayed.'
    },
    itemChipSize: {
      description: 'The size of the loaded chip items.'
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
    isValid: {
      table: { disable: true }
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

const ChipListItems = [
  { value: 'This War of Mine' },
  { value: 'Back to the Future' },
  { value: 'Toy Story', isNew: true, hasChanged: true },
  { value: 'Pulp Fiction' },
  { value: 'WALL·E', isNew: true },
  { value: 'The Godfather', isNew: true }
];

const Template: Story<SFChipsListFieldProps> = (args) => {
  const [items, setItems] = React.useState<ChipFieldValueType[]>(args.items);

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px 15px',
        flexWrap: 'wrap',
        width: '100%'
      }}
    >
      <SFChipsListField
        {...args}
        items={items}
        onChange={(newItems: ChipFieldValueType[]): void => setItems(newItems)}
      />
    </div>
  );
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
  items: ChipListItems
};

WithOptionsAndItems.args = {
  label: 'Movies',
  emptyMessage: 'No movies saved...',
  items: ChipListItems,
  options: ChipListOptions
};
