import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SFIconButton, SFIconButtonProps } from './SFIconButton';
import SFIconSet from '../SFIcon/icons/selection.json';

export default {
  title: 'Components/SFIconButton',
  component: SFIconButton,
  parameters: {
    controls: {
      sort: 'alpha',
      include: [
        'disabled',
        'sfColor',
        'sfColorDarkMode',
        'sfSize',
        'sfIcon',
        'rotate'
      ]
    }
  },
  args: {
    sfIcon: 'Bell',
    rotate: 'none'
  },
  argTypes: {
    onClick: { action: 'onClick', table: { disable: true } },
    sfColor: {
      control: 'color',
      description: 'The color of the icon.'
    },
    sfColorDarkMode: {
      control: 'color',
      description: 'The color of the icon in dark mode'
    },
    sfSize: {
      description: 'The size of the component.'
    },
    sfIcon: {
      description: 'The icon name to be used.',
      options: SFIconSet.icons.map((icon) => icon.properties.name),
      control: {
        type: 'select'
      }
    },
    rotate: {
      description: 'The rotation of the icon.'
    }
  }
} as ComponentMeta<typeof SFIconButton>;

export const Default: Story<SFIconButtonProps> = (args) => (
  <SFIconButton {...args} />
);
Default.argTypes = {
  sfSize: {
    defaultValue: 'medium',
    type: 'string',
    options: ['tiny', 'small', 'medium', 'large'],
    control: {
      type: 'radio'
    }
  }
};

export const CustomSize: Story<SFIconButtonProps> = (args) => (
  <SFIconButton {...args} />
);
CustomSize.argTypes = {
  buttonSize: {
    defaultValue: 42,
    type: 'number'
  },
  iconSize: {
    defaultValue: 20,
    type: 'number'
  }
};
CustomSize.parameters = { controls: { exclude: ['sfSize'] } };

export const AllSizes: Story<SFIconButtonProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      justifyItems: 'center'
    }}
  >
    <div>
      <SFIconButton {...args} sfSize='tiny' />
    </div>
    <div>
      <SFIconButton {...args} sfSize='small' />
    </div>
    <div>
      <SFIconButton {...args} sfSize='medium' />
    </div>
    <div>
      <SFIconButton {...args} sfSize='large' />
    </div>
  </div>
);
AllSizes.parameters = {
  controls: {
    disable: true
  }
};
