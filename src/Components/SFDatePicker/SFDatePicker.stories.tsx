import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFDatePicker, SFDatePickerProps } from './SFDatePicker';

export default {
  title: 'Components/SFDatePicker',
  component: SFDatePicker,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;

const Template: Story<SFDatePickerProps> = (args) => <SFDatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: Date.now()
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  helperText: 'Error Message',
  value: Date.now()
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  helperText: 'Helper message',
  value: Date.now()
};

export const Empty = Default.bind({});

const AllTemplate: Story<SFDatePickerProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      columnGap: '16px',
      rowGap: '10px'
    }}
  >
    <SFDatePicker {...args} />
    <SFDatePicker error {...args} />
    <SFDatePicker disabled {...args} />
    <SFDatePicker value={Date.now()} {...args} />
    <SFDatePicker
      value={Date.now()}
      helperText='Error message'
      error
      {...args}
    />
    <SFDatePicker
      value={Date.now()}
      helperText='Helper message'
      disabled
      {...args}
    />
  </div>
);

export const AllTogether = AllTemplate.bind({});
