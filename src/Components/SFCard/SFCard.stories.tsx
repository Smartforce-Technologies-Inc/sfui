import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFCard, SFCardProps, sfElevations } from './SFCard';

export default {
  title: 'Components/SFCard',
  component: SFCard
} as Meta;

const Template: Story<SFCardProps> = (args) => <SFCard {...args} />;

const ElevationNums: sfElevations[] = [0, 1, 2, 3, 4, 6, 8, 9, 12, 16, 24];

const Elevations: Story<SFCardProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      columnGap: '10px',
      rowGap: '15px',
      justifyItems: 'center',
      alignItems: 'center'
    }}
  >
    {ElevationNums.map((value, index) => {
      return (
        <SFCard {...args} sfElevation={value} key={`${value}${index}`}>
          <p>Elevation {value}</p>
        </SFCard>
      );
    })}
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
