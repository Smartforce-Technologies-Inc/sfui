import React from 'react';
import { SFNumericField } from '../SFNumericField/SFNumericField';
import { SFCounterButton } from './SFCounterButton/SFCounterButton';
import { styled } from '@mui/material';

const StyledCounter = styled('div')({
  display: 'grid',
  gridTemplateColumns: '42px 108px 42px',
  gridTemplateRows: '42px',
  width: 'fit-content',

  '& .input': {
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
  onChange: (value: number) => void;
}

export const SFCounter = ({
  disabled = false,
  value,
  onChange
}: SFCounterProps): React.ReactElement<SFCounterProps> => {
  const isRemoveDisabled: boolean = disabled || value === 0;

  const onIncrement = (): void => {
    onChange(value + 1);
  };

  const onDecrement = (): void => {
    onChange(Math.max(value - 1, 0));
  };

  return (
    <StyledCounter>
      <SFCounterButton
        icon='Remove'
        disabled={isRemoveDisabled}
        onClick={onDecrement}
      />
      <SFNumericField
        className='input'
        disabled={disabled}
        value={value}
        onChange={(event): void => onChange(+event.target.value)}
      />
      <SFCounterButton icon='Add' disabled={disabled} onClick={onIncrement} />
    </StyledCounter>
  );
};
