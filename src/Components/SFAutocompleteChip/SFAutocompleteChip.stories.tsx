import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SFAutocompleteChip } from './SFAutocompleteChip';
import { ChipListOptions } from '../../Storybook/constants';

export default {
  title: 'Components/SFAutocompleteChip',
  component: SFAutocompleteChip,
  parameters: { controls: { sort: 'alpha', exclude: ['options', 'value'] } },
  args: {
    label: 'Bagel',
    value: []
  },
  argTypes: {
    disabled: {
      description:
        'If true, the component should be displayed in a disabled state.'
    },
    required: {
      description: 'If true, the field is required.'
    },
    error: {
      description: 'If true, the component is in error state.'
    },
    helperText: {
      description: 'Text to help understand input values.'
    },
    inputMinWidth: {
      description: 'Minimum width for the inner input field.'
    },
    value: {
      description: 'List of chip values loaded.',
      control: false
    },
    label: {
      description: 'The label asociated to the input value meaning.'
    },
    options: {
      description: 'List of options.',
      control: false
    },
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof SFAutocompleteChip>;

const Template: ComponentStory<typeof SFAutocompleteChip> = (args) => {
  const [values, setValues] = React.useState<string[]>(args.value);

  return <SFAutocompleteChip {...args} value={values} onChange={setValues} />;
};
export const Default = Template.bind({});

Default.args = {
  label: 'Movies',
  options: ChipListOptions
};
