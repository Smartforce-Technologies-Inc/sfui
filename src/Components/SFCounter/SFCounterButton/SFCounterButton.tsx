import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { hexToRgba } from '../../../Helpers';
import { SFGrey } from '../../../SFColors/SFColors';
import { SFIcon } from '../../SFIcon/SFIcon';

export interface SFCounterButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  icon: 'Add' | 'Remove';
}

const counterButtonStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: 'transparent',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
    padding: 0,
    border: `1px solid ${
      theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
    }`,
    boxSizing: 'border-box',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      '@media (hover: hover)': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey[200], 0.3)
            : hexToRgba(SFGrey[500], 0.3)
      }
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
    pointerEvents: 'none',
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
  icon,
  disabled,
  onClick,
  ...props
}: SFCounterButtonProps): React.ReactElement<SFCounterButtonProps> => {
  const classes = counterButtonStyles();

  return (
    <button
      {...props}
      type='button'
      className={`${classes.button} ${disabled ? classes.buttonDisabled : ''} ${
        icon === 'Add' ? classes.right : classes.left
      }`}
      onClick={onClick}
    >
      <SFIcon icon={icon} size={26} />
    </button>
  );
};
