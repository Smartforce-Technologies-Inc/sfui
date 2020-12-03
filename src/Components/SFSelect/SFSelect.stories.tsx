import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFSelect, SFSelectProps, SFOption } from './SFSelect';

const getOptions = (): SFOption[] => {
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
  title: 'Components/SFSelect',
  component: SFSelect,
  args: {
    label: 'Bagel',
    options: getOptions()
  },
  argTypes: { onChange: { action: 'onChange event' } }
} as Meta;

const Template: Story<SFSelectProps> = (args) => <SFSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'Bagel number one'
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  defaultValue: 'Bagel number one',
  helperText: 'Incorrect value'
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: 'Bagel number one',
  disabled: true
};

export const Empty = Template.bind({});

export const AllTogether = (args: SFSelectProps): JSX.Element => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      columnGap: '16px'
    }}
  >
    <SFSelect {...Default.args} {...args} />
    <SFSelect {...Error.args} {...args} />
    <SFSelect {...Disabled.args} {...args} />
    <SFSelect {...args} />
  </div>
);
