import React, { Fragment } from 'react';
import { Story, ComponentMeta } from '@storybook/react';

import { SFButton } from './SFButton';
import { SFSurfaceDark, SFSurfaceLight } from '../../SFColors/SFColors';
import { useTheme } from '@mui/material';

export default {
  title: 'Components/SFButton',
  component: SFButton,
  parameters: {
    controls: {
      sort: 'alpha',
      include: [
        'sfColor',
        'text',
        'isLoading',
        'fullWidth',
        'disabled',
        'variant',
        'size'
      ]
    }
  },
  args: {
    variant: 'outlined',
    sfColor: 'blue',
    size: 'medium',
    text: 'Click here'
  },
  argTypes: {
    sfColor: {
      description: 'The color of the button.'
    },
    text: {
      description: 'The text inside the button.',
      table: {
        type: {
          summary: 'string'
        }
      },
      control: { type: 'text' }
    },
    isLoading: {
      description: 'If true, displays a spinner inside the button.'
    },
    fullWidth: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    disabled: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    onClick: {
      action: 'onClick'
    }
  }
} as ComponentMeta<typeof SFButton>;

export const Default: Story = ({ text, sfColor, ...args }) => {
  const themeMode = useTheme().palette.mode;

  return (
    <Fragment>
      {sfColor === 'invertedGrey' && (
        <div
          style={{
            padding: '20px',
            backgroundColor:
              themeMode === 'light' ? SFSurfaceDark : SFSurfaceLight
          }}
        >
          <SFButton sfColor={sfColor} {...args}>
            {text}
          </SFButton>
        </div>
      )}
      {sfColor !== 'invertedGrey' && (
        <SFButton sfColor={sfColor} {...args}>
          {text}
        </SFButton>
      )}
    </Fragment>
  );
};
