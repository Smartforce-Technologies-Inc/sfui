import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { hexToRgba } from '../../../Helpers';
import { SFGrey } from '../../../SFColors/SFColors';
import { SFIcon } from '../../SFIcon/SFIcon';

export interface SFCounterButtonProps {
  disabled: boolean;
  icon: string;
  onClick: () => void;
}

const counterButtonStyles = makeStyles((theme: Theme) => ({
  button: {
    border: `1px solid ${
      theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
    }`,
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey[200], 0.3)
          : hexToRgba(SFGrey[500], 0.3)
    },
    '&:active': {
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey[200], 0.3)
          : hexToRgba(SFGrey[500], 0.3),

      '& svg path': {
        fill: `${
          theme.palette.type === 'light' ? SFGrey[800] : SFGrey[200]
        } !important`
      }
    },

    '& svg path': {
      fill: `${
        theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]
      } !important`
    }
  },
  buttonDisabled: {
    border: `1px solid ${
      theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
    }`,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg path': {
      fill: `${
        theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
      } !important`
    }
  },
  right: {
    borderLeft: 'none',
    borderRadius: '0 2px 2px 0'
  },
  left: {
    borderRight: 'none',
    borderRadius: '2px 0 0 2px'
  }
}));

export const SFCounterButton = ({
  disabled,
  icon,
  onClick
}: SFCounterButtonProps): React.ReactElement<SFCounterButtonProps> => {
  const classes = counterButtonStyles();

  return (
    <div
      className={`${disabled ? classes.buttonDisabled : classes.button} ${
        icon === 'Add' ? classes.right : classes.left
      }`}
      onClick={disabled ? undefined : onClick}
    >
      <SFIcon icon={icon} />
    </div>
  );
};
