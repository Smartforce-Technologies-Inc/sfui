import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFIcon, SFIconProps } from './SFIcon';

export default {
  title: 'Components/SFIcon',
  component: SFIcon
} as Meta;

const Template: Story<SFIconProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <SFIcon {...args} icon='Bell' />
      <div style={{ marginTop: '2px' }}>Bell</div>
    </div>
    <div>
      <SFIcon {...args} icon='Down-2' />
      <div style={{ marginTop: '2px' }}>Down-2</div>
    </div>
    <div>
      <SFIcon {...args} icon='Gear-2' />
      <div style={{ marginTop: '2px' }}>Gear-2</div>
    </div>
    <div>
      <SFIcon {...args} icon='Left-2' />
      <div style={{ marginTop: '2px' }}>Left-2</div>
    </div>
    <div>
      <SFIcon {...args} icon='Right-2' />
      <div style={{ marginTop: '2px' }}>Right-2</div>
    </div>
    <div>
      <SFIcon {...args} icon='Up-2' />
      <div style={{ marginTop: '2px' }}>Up-2</div>
    </div>
  </div>
);

export const Default = Template.bind({});
