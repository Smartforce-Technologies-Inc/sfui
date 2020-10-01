import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFTextField, SFTextFieldProps } from './SFTextField';

export default {
  title: 'Components/SFTextField',
  component: SFTextField
} as Meta;

const Template: Story<SFTextFieldProps> = (args) => <SFTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Bagel',
  defaultValue: 'Text Value'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Bagel',
  error: true,
  defaultValue: 'Wrong Value',
  helperText: 'Incorrect value'
};

export const Password = Template.bind({});
Password.args = {
  label: 'Bagel',
  defaultValue: 'Text Value',
  type: 'password'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Bagel',
  defaultValue: 'Text Value',
  disabled: true
};

const AllTemplate: Story<SFTextFieldProps> = (args) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
    <div>
      <SFTextField {...args} />
    </div>
    <div>
      <SFTextField error helperText='Incorrect value' {...args} />
    </div>
    <div>
      <SFTextField disabled {...args} />
    </div>
  </div>
);

export const AllTogether = AllTemplate.bind({});
AllTogether.args = {
  label: 'Bagel',
  defaultValue: 'Text Value'
};
