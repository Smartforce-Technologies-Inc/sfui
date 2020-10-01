import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFButton, SFButtonProps } from './SFButton';

export default {
  title: 'Components/SFButton',
  component: SFButton
} as Meta;

const Template: Story<SFButtonProps> = (args) => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
      <div>
        <SFButton sfColor='blue' size='small' {...args}>
          Click Me
        </SFButton>
      </div>
      <div>
        <SFButton sfColor='red' size='small' {...args}>
          Click Me
        </SFButton>
      </div>
      <div>
        <SFButton sfColor='grey' size='small' {...args}>
          Click Me
        </SFButton>
      </div>
      <div>
        <SFButton sfColor='blue' size='small' disabled {...args}>
          Click Me
        </SFButton>
      </div>
    </div>
    <br />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
      <div>
        <SFButton sfColor='blue' {...args}>
          Click Me
        </SFButton>
      </div>
      <div>
        <SFButton sfColor='red' {...args}>
          Click Me
        </SFButton>
      </div>
      <div>
        <SFButton sfColor='grey' {...args}>
          Click Me
        </SFButton>
      </div>
      <div>
        <SFButton sfColor='blue' disabled {...args}>
          Click Me
        </SFButton>
      </div>
    </div>
    <br />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
      <div>
        <SFButton sfColor='blue' size='large' {...args}>
          Click Me
        </SFButton>
      </div>
      <div>
        <SFButton sfColor='red' size='large' {...args}>
          Click Me
        </SFButton>
      </div>
      <div>
        <SFButton sfColor='grey' size='large' {...args}>
          Click Me
        </SFButton>
      </div>
      <div>
        <SFButton sfColor='blue' size='large' disabled {...args}>
          Click Me
        </SFButton>
      </div>
    </div>
  </div>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  onClick: (): void => {
    console.log('Clicked');
  }
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  onClick: (): void => {
    console.log('Clicked');
  }
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  onClick: (): void => {
    console.log('Clicked');
  }
};
