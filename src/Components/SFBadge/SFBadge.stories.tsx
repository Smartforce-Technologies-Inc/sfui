import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFBadge } from './SFBadge';
import { SFIcon, SFIconButton, SFLink } from '../..';

const AnchorOrigins = {
  topLeft: { vertical: 'top', horizontal: 'left' },
  topRight: { vertical: 'top', horizontal: 'right' },
  bottomLeft: { vertical: 'bottom', horizontal: 'left' },
  bottomRight: { vertical: 'bottom', horizontal: 'right' }
};

export default {
  title: 'Components/SFBadge',
  component: SFBadge,
  argTypes: {
    value: {
      defaultValue: 0
    },
    size: {
      defaultValue: 'small'
    },
    type: {
      defaultValue: 'numeric'
    },
    overlap: {
      table: {
        disable: true
      }
    },
    invisible: {
      table: {
        disable: true
      }
    },
    max: {
      table: {
        disable: true
      }
    },
    showZero: {
      table: {
        disable: true
      }
    },
    variant: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    badgeContent: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    anchorOrigin: {
      options: Object.keys(AnchorOrigins),
      mapping: AnchorOrigins,
      control: {
        type: 'select',
        labels: {
          topLeft: 'Top Left',
          topRight: 'Top Right',
          botttmLeft: 'Bottom Left',
          bottomRight: 'Bottom Right'
        }
      }
    }
  }
} as Meta;

export const BadgeCircular = (args): JSX.Element => (
  <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
    <SFBadge {...args}>
      <SFIcon icon='Bell' />
    </SFBadge>
    <SFBadge {...args}>
      <SFIconButton sfSize='medium' sfIcon='Bell' />
    </SFBadge>
  </div>
);

export const BadgeRectangular = (args): JSX.Element => (
  <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
    <SFBadge {...args}>
      <p style={{ margin: 0, padding: 0 }}>Text</p>
    </SFBadge>
    <SFBadge {...args}>
      <SFLink sfSize='medium'>Some Link</SFLink>
    </SFBadge>
  </div>
);

BadgeCircular.args = {
  ...BadgeCircular.args,
  overlap: 'circle'
};

BadgeRectangular.args = {
  ...BadgeRectangular.args,
  overlap: 'rectangle'
};
