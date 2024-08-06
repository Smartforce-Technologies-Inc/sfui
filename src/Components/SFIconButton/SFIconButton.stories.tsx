import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SFIconButton, SFIconButtonProps } from './SFIconButton';
import SFIconSet from '../SFIcon/icons/selection.json';

export default {
  title: 'Components/SFIconButton',
  component: SFIconButton,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    sfColor: 'grey',
    sfIcon: 'Bell',
    rotate: 'none',
    'aria-label': 'Icon button'
  },
  argTypes: {
    onClick: { action: 'onClick', table: { disable: true } },
    sfColor: {
      description: 'The color of the component.',
      table: {
        defaultValue: {
          summary: `"grey"`
        }
      },
      options: ['blue', 'red', 'grey'],
      control: {
        type: 'radio'
      }
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
    edge: {
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
    disableFocusRipple: {
      table: {
        disable: true
      }
    },
    disableRipple: {
      table: {
        disable: true
      }
    },
    focusRipple: {
      table: {
        disable: true
      }
    },
    disableTouchRipple: {
      table: {
        disable: true
      }
    },
    centerRipple: {
      table: {
        disable: true
      }
    },
    children: {
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
