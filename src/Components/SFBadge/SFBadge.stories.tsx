import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFBadge } from './SFBadge';

export default {
  title: 'Components/SFBadge',
  component: SFBadge,
  args: {
    icon: 'Bell'
  },
  argTypes: {
    count: {
      defaultValue: 0
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
    children: {
      table: {
        disable: true
      }
    },
    badgeContent: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Badge = (args): JSX.Element => <SFBadge {...args} />;
