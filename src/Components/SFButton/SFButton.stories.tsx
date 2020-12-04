import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFButton, SFButtonProps } from './SFButton';

export default {
  title: 'Components/SFButton',
  component: SFButton,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;

const Template: Story<SFButtonProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr',
      rowGap: '16px',
      columnGap: '20px'
    }}
  >
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='blue'>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='red'>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='grey'>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='blue' disabled>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='blue' sfSize='medium'>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='red' sfSize='medium'>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='grey' sfSize='medium'>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='blue' disabled>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='blue' sfSize='large'>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='red' sfSize='large'>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='grey' sfSize='large'>
        Click Me
      </SFButton>
    </div>
    <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
      <SFButton {...args} sfColor='blue' sfSize='large' disabled>
        Click Me
      </SFButton>
    </div>
  </div>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained'
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined'
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text'
};
