import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFPanel, SFPanelProps } from './SFPanel';
import { SFTextField } from '../SFTextField/SFTextField';

export default {
  title: 'Components/SFPanel',
  component: SFPanel,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    title: 'Drawer title',
    open: false,
    anchor: 'right',
    elevation: 24,
    maxWidth: 450
  },
  argTypes: {
    onClose: {
      action: 'onClose',
      table: {
        disable: true
      }
    },
    anchor: {
      description: 'Side from which the panel will appear.',
      table: {
        defaultValue: {
          summary: 'left'
        },
        type: {
          summary: `'left' | 'right' | 'bottom' | 'top'`
        }
      },
      options: ['left', 'right', 'bottom', 'top'],
      control: {
        type: 'radio'
      }
    },
    elevation: {
      description: 'The elevation of the panel.',
      table: {
        defaultValue: {
          summary: '16'
        },
        type: {
          summary: 'number'
        }
      },
      control: {
        type: 'number'
      }
    },
    open: {
      description: 'If true, the panel will be open.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    title: {
      description: 'The title of the panel to display.'
    },
    maxWidth: {
      description:
        'If set, determinates the maximum width of the panel when open.',
      table: {
        defaultValue: {
          summary: 'auto'
        }
      },
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
