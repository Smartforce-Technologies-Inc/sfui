import React from 'react';
import { styled } from '@mui/material/styles';
import { Meta } from '@storybook/react/types-6-0';
import { SFDrawer, SFDrawerProps } from './SFDrawer';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { SFGrey } from '../../SFColors/SFColors';

export default {
  title: 'Components/SFDrawer',
  component: SFDrawer,
  parameters: { controls: { sort: 'alpha', include: ['anchor', 'open'] } },
  args: {
    open: false,
    anchor: 'left'
  },
  argTypes: {
    onClose: {
      action: 'onClose'
    },
    open: {
      description: 'If true, the drawer is open.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    anchor: {
      description: 'Side from which the drawer will appear.',
      table: {
        type: {
          summary: `'bottom' | 'left' | 'right' | 'top'`
        },
        defaultValue: {
          summary: 'left'
        }
      },
      options: ['left', 'right', 'bottom', 'top'],
      control: {
        type: 'radio',
        labels: {
          left: 'Left',
          right: 'Right',
          bottom: 'Bottom',
          top: 'Top'
        }
      }
    }
  }
} as Meta;

interface DrawerContentProps {
  className?: string;
}

const DrawerContent = ({ className }: DrawerContentProps): JSX.Element => (
  <div className={className}>
    <div className='topBar'>
      <SFIconButton sfSize='medium' sfIcon='Left-7' />
      <SFIconButton className='btnRight' sfSize='medium' sfIcon='Close' />
    </div>

    <div className='content'>
      <h2>Title</h2>
      <ul>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
      </ul>
    </div>
  </div>
);

const StyledDrawerContent = styled(DrawerContent)(({ theme }) => ({
  minWidth: 396,
  font: 'Roboto',
  color: `${theme.palette.mode === 'light' ? SFGrey[700] : SFGrey[400]}`,

  '.topBar': {
    margin: '20px 20px 8px 20px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  '.btnRight': { alignSelf: 'flex-end' },
  '.content': {
    margin: 24,

    '& h2': { marginBottom: 24, padding: 0 },
    '& ul': {
      padding: 0,

      '& li': {
        listStyle: 'none',
        marginBottom: 24,

        '&:first-child': {
          fontWeight: 700
        }
      }
    }
  }
}));

export const Drawer = (args: SFDrawerProps): JSX.Element => {
  return (
    <SFDrawer {...args}>
      <StyledDrawerContent />
    </SFDrawer>
  );
};
