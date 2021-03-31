import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Meta } from '@storybook/react/types-6-0';
import { SFDrawer, SFDrawerProps } from './SFDrawer';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { SFGrey } from '../../SFColors/SFColors';

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
      defaultValue: 'left',
      control: {
        type: 'radio',
        options: ['left', 'right', 'bottom', 'top']
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: 396,
      font: 'Roboto',
      color: `${theme.palette.type === 'light' ? SFGrey[700] : SFGrey[400]}`
    },
    topBar: {
      margin: '20px 20px 8px 20px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    btnRight: { alignSelf: 'flex-end' },
    content: {
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
  })
);

export const Drawer = (args: SFDrawerProps): JSX.Element => {
  const classes = useStyles();

  return (
    <SFDrawer {...args}>
      <div className={classes.container}>
        <div className={classes.topBar}>
          <SFIconButton sfSize='medium' sfIcon='Left-7' />
          <SFIconButton
            className={classes.btnRight}
            sfSize='medium'
            sfIcon='Close'
          />
        </div>

        <div className={classes.content}>
          <h2>Title</h2>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
      </div>
    </SFDrawer>
  );
};
