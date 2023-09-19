import React from 'react';
import { hexToRgba } from '../../../Helpers';
import { SFGrey } from '../../../SFColors/SFColors';
import { SFIcon } from '../../SFIcon/SFIcon';
import { styled } from '@mui/material';

export interface SFCounterButtonProps {
  disabled: boolean;
  icon: 'Add' | 'Remove';
  onClick: () => void;
}

const StyledCounterButton = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  padding: 0,
  border: `1px solid ${
    theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
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
        theme.palette.mode === 'light'
          ? hexToRgba(SFGrey[200], 0.3)
          : hexToRgba(SFGrey[500], 0.3)
    }
  },
  '&:active': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? hexToRgba(SFGrey[200], 0.3)
        : hexToRgba(SFGrey[500], 0.3),

    '& svg path': {
      fill: `${
        theme.palette.mode === 'light' ? SFGrey[800] : SFGrey[200]
      } !important`
    }
  },

  '& svg path': {
    fill: `${
      theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400]
    } !important`
  },
  '&.right': {
    borderLeft: 'none',
    borderRadius: '0 2px 2px 0'
  },
  '&.left': {
    borderRight: 'none',
    borderRadius: '2px 0 0 2px'
  },

  '&.buttonDisabled': {
    pointerEvents: 'none',
    '& svg path': {
      fill: `${
        theme.palette.mode === 'light' ? SFGrey[200] : SFGrey[700]
      } !important`
    }
  }
}));

export const SFCounterButton = ({
  disabled,
  icon,
  onClick
}: SFCounterButtonProps): React.ReactElement<SFCounterButtonProps> => {
  return (
    <StyledCounterButton
      className={`${disabled ? 'buttonDisabled' : ''} ${
        icon === 'Add' ? 'right' : 'left'
      }`}
      onClick={onClick}
    >
      <SFIcon icon={icon} size={26} />
    </StyledCounterButton>
  );
};
