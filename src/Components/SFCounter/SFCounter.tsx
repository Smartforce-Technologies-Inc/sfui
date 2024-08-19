import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  SFNumericField,
  SFNumericFieldProps
} from '../SFNumericField/SFNumericField';
import {
  SFCounterButton,
  SFCounterButtonProps
} from './SFCounterButton/SFCounterButton';

const counterStyles = makeStyles({
  counter: {
    display: 'grid',
    gridTemplateColumns: '42px 108px 42px',
    gridTemplateRows: '42px',
    width: 'fit-content'
  },
  input: {
    '& .MuiInputBase-root': {
      height: '42px',

      '& .MuiInputBase-input': {
        padding: '12px 12px 11px',
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
      },

      '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: 0
      }
    }
  }
});

export interface SFCounterProps {
  disabled?: boolean;
  value: number;
  decrementButtonProps?: Partial<
    Omit<SFCounterButtonProps, 'icon' | 'disabled' | 'onClick'>
  >;
  incrementButtonProps?: Partial<
    Omit<SFCounterButtonProps, 'icon' | 'disabled' | 'onClick'>
  >;
  numericFieldProps?: Partial<
    Omit<SFNumericFieldProps, 'onChange' | 'disabled' | 'value'>
  >;
  onChange: (value: number) => void;
}

export const SFCounter = ({
  disabled = false,
  decrementButtonProps,
  incrementButtonProps,
  numericFieldProps,
  value,
  onChange
}: SFCounterProps): React.ReactElement<SFCounterProps> => {
  const classes = counterStyles();
  const isRemoveDisabled: boolean = disabled || value === 0;

  const onIncrement = (): void => {
    onChange(value + 1);
  };

  const onDecrement = (): void => {
    onChange(Math.max(value - 1, 0));
  };

  return (
    <div className={classes.counter}>
      <SFCounterButton
        {...incrementButtonProps}
        aria-label={incrementButtonProps?.['aria-label'] || 'Add'}
        icon='Remove'
        disabled={isRemoveDisabled}
        onClick={onDecrement}
      />
      <SFNumericField
        {...numericFieldProps}
        aria-label={numericFieldProps?.['aria-label'] || 'Counter display'}
        className={classes.input}
        disabled={disabled}
        value={value}
        onChange={(event): void => onChange(+event.target.value)}
      />
      <SFCounterButton
        {...decrementButtonProps}
        aria-label={decrementButtonProps?.['aria-label'] || 'Remove'}
        icon='Add'
        disabled={disabled}
        onClick={onIncrement}
      />
    </div>
  );
};
