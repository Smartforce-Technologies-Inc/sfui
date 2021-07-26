import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFIconButton, SFIconButtonProps } from './SFIconButton';
import SFIconSet from '../SFIcon/icons/selection.json';

export default {
  title: 'Components/SFIconButton',
  component: SFIconButton,
  argTypes: {
    onClick: { action: 'onClick', table: { disable: true } },
    sfColor: {
      defaultValue: 'grey',
      control: {
        type: 'radio',
        options: ['blue', 'red', 'grey']
      }
    },
    sfIcon: {
      control: {
        type: 'select',
        options: SFIconSet.icons.map((icon) => icon.properties.name)
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    action: {
      table: {
        disable: true
      }
    },
    focusVisibleClassName: {
      table: {
        disable: true
      }
    },
    onFocusVisible: {
      table: {
        disable: true
      }
    },
    tabIndex: {
      table: {
        disable: true
      }
    },
    TouchRippleProps: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Default: Story<SFIconButtonProps> = (args) => (
  <SFIconButton {...args} />
);

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
    disabled: true
  }
};
