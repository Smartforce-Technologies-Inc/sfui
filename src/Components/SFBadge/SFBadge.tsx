import React from 'react';
import { styled, Badge, BadgeProps } from '@mui/material';
import {
  SFCommonBlack,
  SFCommonWhite,
  SFRedMainDark,
  SFRedMainLight
} from '../../SFColors/SFColors';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '&.small': {
    '& .MuiBadge-badge': {
      minWidth: 'unset',
      width: '17px',
      height: '17px'
    }
  },

  '&.medium': {
    '& .MuiBadge-badge': {
      width: '21px',
      height: '21px'
    }
  },

  '& .MuiBadge-badge': {
    backgroundColor:
      theme.palette.mode === 'light' ? SFRedMainLight : SFRedMainDark,
    padding: 0,
    fontWeight: 900,
    fontSize: '12px',
    lineHeight: '14px',
    color: theme.palette.mode === 'light' ? SFCommonWhite : SFCommonBlack,
    boxShadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.02), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',

    '& .badgeDot': {
      fill: theme.palette.mode === 'light' ? SFCommonWhite : SFCommonBlack
    }
  }
}));

export interface SFBadgeProps extends BadgeProps {
  value: number;
  type?: 'numeric';
  size?: 'small' | 'medium';
}

export const SFBadge = ({
  value,
  size = 'small',
  type = 'numeric',
  overlap = 'circular',
  className = '',
  anchorOrigin = { vertical: 'top', horizontal: 'left' },
  children,
  ...props
}: SFBadgeProps): React.ReactElement<SFBadgeProps> => {
  const BadgeContent = (): React.ReactNode => {
    if (type === 'numeric') {
      return value > 0 ? (
        value <= 99 ? (
          value
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='5'
            height='5'
            viewBox='0 0 5 5'
            fill='none'
          >
            <circle
              className='badgeDot'
              cx='2.5'
              cy='2.5'
              r='2.5'
              fill='white'
            />
          </svg>
        )
      ) : undefined;
    } else return undefined;
  };

  return (
    <StyledBadge
      {...props}
      className={`${className} ${size}`}
      badgeContent={BadgeContent()}
      anchorOrigin={anchorOrigin}
      overlap={overlap}
    >
      {children}
    </StyledBadge>
  );
};
