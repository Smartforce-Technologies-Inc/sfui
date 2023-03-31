import * as React from 'react';
import { styled, Link, LinkProps } from '@mui/material';
import {
  SFBlueMainDark,
  SFBlueMainLight,
  SFGrey
} from '../../SFColors/SFColors';
import { SFTheme } from '../../SFTheme/SFTheme';

function getColor(sfColor: SFLinkColor, theme: SFTheme): string {
  if (theme.palette.mode === 'light') {
    if (sfColor === 'primary') return SFBlueMainLight;
    else return SFGrey[900];
  } else {
    if (sfColor === 'primary') return SFBlueMainDark;
    else return SFGrey[50];
  }
}

export type SFLinkSize = 'small' | 'medium';
export type SFLinkColor = 'default' | 'primary';

export interface SFLinkProps extends LinkProps {
  sfSize?: SFLinkSize;
  sfColor?: SFLinkColor;
}

const SFLinkBase = ({
  sfSize = 'medium',
  sfColor = 'default',
  color,
  ...props
}: SFLinkProps): React.ReactElement<SFLinkProps> => {
  return <Link {...props} />;
};

export const SFLink = styled(SFLinkBase)(
  ({ sfSize, sfColor = 'default', theme }) => ({
    cursor: 'pointer',
    fontWeight: 500,
    textDecorationColor: 'unset',
    color: getColor(sfColor, theme),
    fontSize: sfSize === 'small' ? '14px' : '16px',
    lineHeight: sfSize === 'small' ? '20px' : '24px'
  })
);
