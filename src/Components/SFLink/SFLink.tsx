import * as React from 'react';
import { styled, Link, LinkProps } from '@mui/material';
import { SFGrey } from '../../SFColors/SFColors';

type SFSize = 'small' | 'medium';

const StyledLink = styled(Link)(({ theme }) => ({
  '&.MuiTypography-colorInherit': {
    color: `${theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]}`
  },
  '&.MuiLink-root': {
    cursor: 'pointer',
    fontWeight: 500
  }
}));

export interface SFLinkProps extends LinkProps {
  sfSize: SFSize;
}

const SFLinkBase = ({
  sfSize = 'medium',
  color,
  ...props
}: SFLinkProps): React.ReactElement<SFLinkProps> => {
  const sfColor = color !== 'primary' ? 'inherit' : 'primary';
  return <StyledLink {...props} color={sfColor} />;
};

export const SFLink = styled(SFLinkBase)(({ sfSize }) => ({
  fontSize: sfSize === 'small' ? '14px' : '16px',
  lineHeight: sfSize === 'small' ? '20px' : '24px'
}));
