import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFIcon, SFIconProps } from './SFIcon';
import SFIconSet from './icons/selection.json';

export default {
  title: 'Components/SFIcon',
  component: SFIcon,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    size: 24,
    rotate: 'none',
    icon: 'Bell'
  },
  argTypes: {
    icon: {
      description: 'The icon name to be used.',
      options: SFIconSet.icons.map((icon) => icon.properties.name),
      control: {
        type: 'select'
      }
    },
    color: {
      control: 'color',
      description: 'The color of the icon.'
    },
    rotate: {
      description: 'The rotation of the icon.'
    },
    size: {
      description: 'The size of the icon.',
      control: {
        type: 'number'
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    style: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Default: Story<SFIconProps> = (args) => <SFIcon {...args} />;

export const AllTogether: Story<SFIconProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '15px'
    }}
  >
    {SFIconSet.icons.map((icon) => (
      <div
        key={icon.properties.name}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          alignItems: 'center'
        }}
      >
        <SFIcon {...args} icon={icon.properties.name} />
        <p style={{ margin: '0px' }}>{icon.properties.name}</p>
      </div>
    ))}
  </div>
);
AllTogether.parameters = {
  controls: {
    disable: true
  }
};
