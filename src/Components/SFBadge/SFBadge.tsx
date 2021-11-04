import React from 'react';

import { Badge, BadgeProps } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import {
  SFCommonBlack,
  SFCommonWhite,
  SFIcon,
  SFRedMainDark,
  SFRedMainLight
} from '../..';

const StyledBadge = withStyles((theme: Theme) => ({
  badge: {
    backgroundColor:
      theme.palette.type === 'light' ? SFRedMainLight : SFRedMainDark,
    padding: 0,
    transform: 'scale(1) translate(-55%, -55%)',

    '& .badgeContent': {
      fontWeight: '900',
      fontSize: '12px',
      lineHeight: '14px',
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.type === 'light' ? SFCommonWhite : SFCommonBlack,

      '& .badgeDot': {
        fill: theme.palette.type === 'light' ? SFCommonWhite : SFCommonBlack
      }
    }
  }
}))(Badge);

export interface SFBadgeProps extends BadgeProps {
  icon: string;
  count: number;
}

export const SFBadge = ({
  icon,
  count,
  ...props
}: SFBadgeProps): React.ReactElement<SFBadgeProps> => {
  const BadgeContent = (): JSX.Element => {
    return (
      <p className='badgeContent'>
        {count <= 99 ? (
          count
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
        )}
      </p>
    );
  };

  return (
    <StyledBadge
      {...props}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      overlap='circle'
      color='error'
      variant='standard'
      badgeContent={count > 0 ? BadgeContent() : undefined}
    >
      <SFIcon icon={icon} />
    </StyledBadge>
  );
};
