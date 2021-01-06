import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFDrawer, SFDrawerProps } from './SFDrawer';
import { SFTextField } from '../SFTextField/SFTextField';

export default {
  title: 'Components/SFDrawer',
  component: SFDrawer,
  args: {
    open: true
  },
  argTypes: {
    onClose: {
      action: 'onClose',
      table: {
        disable: true
      }
    },
    anchor: {
      defaultValue: 'right',
      control: {
        type: 'radio',
        options: ['left', 'right', 'bottom', 'top']
      }
    },
    elevation: {
      defaultValue: 16,
      control: {
        type: 'number'
      }
    }
  }
} as Meta;

export const Drawer = (args: SFDrawerProps): JSX.Element => (
  <SFDrawer {...args}>contenido</SFDrawer>
);
