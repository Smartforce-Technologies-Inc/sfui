import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFCard, SFCardProps } from './SFCard';

export default {
  title: 'Components/SFCard',
  component: SFCard
} as Meta;

const Template: Story<SFCardProps> = (args) => <SFCard {...args} />;

const Elevations: Story<SFCardProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      justifyItems: 'center',
      alignItems: 'center'
    }}
  >
    <div>
      <SFCard {...args} sfElevation={4} />
    </div>
    <div>
      <SFCard {...args} sfElevation={6} />
    </div>
    <div>
      <SFCard {...args} sfElevation={12} />
    </div>
    <div>
      <SFCard {...args} sfElevation={24} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: [<p>A children</p>, <p>Another children</p>]
};

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
  isLoading: true
};

export const TopLoading = Template.bind({});
TopLoading.args = {
  isLoading: true,
  loadingAtTop: true
};

export const Elevation = Elevations.bind({});
Elevation.args = {
  children: [<p>A children</p>, <p>Another children</p>]
};
