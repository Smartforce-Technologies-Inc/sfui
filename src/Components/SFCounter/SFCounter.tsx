import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';
import { SFNumericField } from '../SFNumericField/SFNumericField';

const counterStyles = makeStyles((theme: Theme) => ({
  counter: {
    display: 'grid',
    gridTemplateColumns: '42px 108px 42px',
    gridTemplateRows: '42px',
    width: 'fit-content'
  },
  input: {
    '& .MuiInputBase-root': {
      height: '46px',

      '& .MuiInputBase-input': {
        padding: '13px 12px 12px',
        textAlign: 'center',
        fontSize: '16px',
        lineHeight: '24px',
        MozAppearance: 'textfield',

        '&::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0
        },
        '&::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0
        }
      }
    }
  },
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

export interface SFCounterProps {
  disabled: boolean;
  value: number;
  onChange: (value: number) => void;
}

export const SFCounter = ({
  disabled = false,
  value,
  onChange
}: SFCounterProps): React.ReactElement<SFCounterProps> => {
  const classes = counterStyles();
  const isRemoveDisabled: boolean = disabled || value === 0;

  const onButtonClick = (isAdd: boolean): void => {
    const newValue = isAdd ? value + 1 : value - 1;
    if (newValue < 0) {
      onChange(0);
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className={classes.counter}>
      <div
        className={`${
          isRemoveDisabled ? classes.buttonDisabled : classes.button
        } ${classes.left}`}
        onClick={
          isRemoveDisabled ? undefined : (): void => onButtonClick(false)
        }
      >
        <SFIcon icon='Remove' />
      </div>
      <SFNumericField
        className={classes.input}
        disabled={disabled}
        value={value}
        allowNegative={false}
        onChange={(event): void => onChange(+event.target.value)}
      />
      <div
        className={`${disabled ? classes.buttonDisabled : classes.button} ${
          classes.right
        }`}
        onClick={disabled ? undefined : (): void => onButtonClick(true)}
      >
        <SFIcon icon='Add' />
      </div>
    </div>
  );
};
