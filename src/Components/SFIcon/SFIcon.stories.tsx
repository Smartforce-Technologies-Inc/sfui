import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFFormControlLabel } from '../SFFormControlLabel/SFFormControlLabel';
import { SFIcon, SFIconProps } from './SFIcon';
import SFIconSet from './icons/selection.json';

export default {
  title: 'Components/SFIcon',
  component: SFIcon
} as Meta;

const Template: Story<SFIconProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      rowGap: '15px'
    }}
  >
    {SFIconSet.icons.map((icon) => (
      <SFFormControlLabel
        style={{ marginLeft: 0 }}
        key={icon.properties.name}
        value={icon.properties.name}
        control={
          <SFIcon
            {...args}
            icon={icon.properties.name}
            style={{ marginRight: '5px' }}
          />
        }
        label={icon.properties.name}
      />
    ))}
  </div>
);

export const Default = Template.bind({});
