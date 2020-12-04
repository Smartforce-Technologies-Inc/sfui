import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  SFMultiSelect,
  SFMultiSelectProps,
  SFMultiSelectOption
} from './SFMultiSelect';

const getOptions = (): SFMultiSelectOption[] => {
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
  args: {
    label: 'Bagel',
    options: getOptions()
  },
  argTypes: { onChange: { action: 'onChange event' } }
} as Meta;

const Template: Story<SFMultiSelectProps> = (args) => (
  <SFMultiSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: ['Bagel number one']
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  defaultValue: [],
  helperText: 'Incorrect value'
};
export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: ['Bagel number one'],
  disabled: true
};

export const Empty = Template.bind({});
Empty.args = {
  defaultValue: []
};

export const AllTogether = (args: SFMultiSelectProps): JSX.Element => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      columnGap: '16px'
    }}
  >
    <SFMultiSelect {...Default.args} {...args} />
    <SFMultiSelect {...Error.args} {...args} />
    <SFMultiSelect {...Disabled.args} {...args} />
    <SFMultiSelect {...Empty.args} {...args} />
  </div>
);
