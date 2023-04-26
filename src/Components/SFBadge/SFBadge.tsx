import React from 'react';
import { Badge, BadgeProps, styled } from '@mui/material';
import {
  SFCommonBlack,
  SFCommonWhite,
  SFRedMainDark,
  SFRedMainLight
} from '../../SFColors/SFColors';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '&.SFBadge-small': {
    '.MuiBadge-badge': {
      minWidth: 'unset',
      width: '17px',
      height: '17px'
    }
  },

  '&.SFBadge-medium': {
    '.MuiBadge-badge': {
      width: '21px',
      height: '21px'
    }
  },

  '.MuiBadge-badge': {
    backgroundColor:
      theme.palette.mode === 'light' ? SFRedMainLight : SFRedMainDark,
    color: theme.palette.mode === 'light' ? SFCommonWhite : SFCommonBlack,
    padding: 0,
    fontWeight: 900,
    fontSize: '12px',
    lineHeight: '14px',
    boxShadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.02), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',

    '.badgeDot': {
      fill: theme.palette.mode === 'light' ? SFCommonWhite : SFCommonBlack
    }
  }
}));

export type SFBadgeSize = 'small' | 'medium';

export interface SFBadgeProps extends BadgeProps {
  value: number;
  size?: SFBadgeSize;
}

export const SFBadge = ({
  value,
  size = 'small',
  overlap = 'circular',
  className = '',
  anchorOrigin = { vertical: 'top', horizontal: 'left' },
  children,
  ...props
}: SFBadgeProps): React.ReactElement<SFBadgeProps> => {
  const badgeContent: React.ReactNode =
    value > 0 ? (
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
          <circle className='badgeDot' cx='2.5' cy='2.5' r='2.5' fill='white' />
        </svg>
      )
    ) : undefined;

  return (
    <StyledBadge
      {...props}
      className={`${className} SFBadge-${size}`}
      badgeContent={badgeContent}
      anchorOrigin={anchorOrigin}
      overlap={overlap}
    >
      {children}
    </StyledBadge>
  );
};
