import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFPanel, SFPanelProps } from './SFPanel';
import { SFTextField } from '../SFTextField/SFTextField';

export default {
  title: 'Components/SFPanel',
  component: SFPanel,
  args: {
    title: 'Drawer title',
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
      defaultValue: 24,
      control: {
        type: 'number'
      }
    },
    maxWidth: {
      defaultValue: 450,
      control: {
        type: 'number'
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    leftAction: {
      table: {
        disable: true
      }
    },
    rightAction: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Panel = (args: SFPanelProps): JSX.Element => (
  <SFPanel
    {...args}
    leftAction={{ label: 'Medium' }}
    rightAction={{ label: 'Medium' }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
    Mauris lobortis a erat eu mattis.
    <SFTextField style={{ marginTop: 24 }} label='Bagel' />
    <SFTextField style={{ marginTop: 12 }} label='Bagel' />
    <SFTextField style={{ marginTop: 12 }} label='Bagel' />
    <SFTextField style={{ marginTop: 12 }} label='Bagel' />
  </SFPanel>
);
