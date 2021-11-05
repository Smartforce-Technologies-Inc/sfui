import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFBadge } from './SFBadge';
import { SFIcon } from '../..';

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
    anchorOrigin: {
      table: {
        disable: true
      }
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
    }
  }
} as Meta;

export const Badge = (args): JSX.Element => (
  <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
    <SFBadge {...args}>
      <SFIcon icon='Bell' />
    </SFBadge>
    <SFBadge {...args}>
      <p style={{ margin: 0, padding: 0 }}>Text</p>
    </SFBadge>
    <SFBadge {...args}>Some text</SFBadge>
  </div>
);
