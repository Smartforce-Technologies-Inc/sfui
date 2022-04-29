import * as React from 'react';
import { styled } from '@mui/material/styles';
import Link, { LinkProps } from '@mui/material/Link';
import { SFGrey } from '../../SFColors/SFColors';

type SFSize = 'small' | 'medium';

const StyledLink = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  fontWeight: 500,

  '&.MuiTypography-colorInherit': {
    color: `${theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]}`
  }
}));

const getSizeStyle = (size?: SFSize): React.CSSProperties => {
  switch (size) {
    case 'small':
      return {
        fontSize: '14px',
        lineHeight: '20px'
      };
    default:
      return {
        fontSize: '16px',
        lineHeight: '24px'
      };
  }
};

export type SFLinkColor = 'inherit' | 'primary';

export interface SFLinkProps extends LinkProps {
  sfSize: SFSize;
  color?: SFLinkColor;
}

export const SFLink = ({
  sfSize = 'medium',
  color = 'inherit',
  ...props
}: SFLinkProps): React.ReactElement<SFLinkProps> => {
  return (
    <StyledLink
      {...props}
      style={getSizeStyle(sfSize)}
      color={color}
      underline='none'
    />
  );
};
