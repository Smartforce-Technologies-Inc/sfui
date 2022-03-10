import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFCard, SFCardProps, sfElevations } from './SFCard';

export default {
  title: 'Components/SFCard',
  component: SFCard,
  parameters: { controls: { sort: 'alpha' } },
  argTypes: {
    isLoading: {
      description: 'If true, displays a spinner inside the card.'
    },
    loadingAtTop: {
      description:
        'If true, displays the loading spinner at the top of the card.'
    },
    sfElevation: {
      description:
        'Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.'
    },
    className: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFCardProps> = (args) => (
  <SFCard {...args}>
    <p>A children</p>
    <p>Another children</p>
  </SFCard>
);

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

export const Elevation = Elevations.bind({});
Elevation.parameters = {
  controls: {
    disable: true
  }
};
