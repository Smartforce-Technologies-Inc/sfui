import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SFMultiSelect, SFMultiSelectProps } from './SFMultiSelect';
import { SFMenuOption } from '../SFSelect/SFSelect';

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
  title: 'Components/SFMultiSelect',
  component: SFMultiSelect,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['helperText', 'label', 'value']
    }
  },
  args: {
    label: 'Bagel',
    options: getOptions(),
    value: ['Bagel number one']
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      table: {
        disable: true
      }
    },
    label: {
      description: 'The label asociated to the input value meaning.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    value: {
      options: getOptions().map((o: SFMenuOption) => o.value),
      control: {
        type: 'multi-select'
      }
    },
    helperText: {
      description: 'Text to help understand input values.',
      control: {
        type: 'text'
      },
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
} as ComponentMeta<typeof SFMultiSelect>;

const Template: ComponentStory<typeof SFMultiSelect> = (args) => {
  return <SFMultiSelect {...args} />;
};

export const Default = Template.bind({});

export const AllTogether = (args: SFMultiSelectProps): JSX.Element => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      columnGap: '16px'
    }}
  >
    <SFMultiSelect {...args} />
    <SFMultiSelect {...args} error helperText='Incorrect value' />
    <SFMultiSelect {...args} disabled />
    <SFMultiSelect {...args} defaultValue={undefined} />
  </div>
);
AllTogether.args = {
  label: 'Bagel',
  options: getOptions(),
  value: undefined,
  defaultValue: ['Bagel number one']
};

AllTogether.parameters = {
  controls: {
    disable: true
  }
};
