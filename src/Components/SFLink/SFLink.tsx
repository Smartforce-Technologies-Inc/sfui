import * as React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Link, { LinkProps } from '@material-ui/core/Link';
import { SFGrey } from '../../SFColors/SFColors';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

type SFSize = 'small' | 'medium';
const StyledLink = withStyles((theme: Theme) => ({
  root: {
    '&.MuiTypography-colorInherit': {
      color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`
    },
    '&.MuiLink-root': {
      cursor: 'pointer'
    }
  }
}))(Link);

const getSizeStyle = (size?: SFSize): CSSProperties => {
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

export interface SFLinkProps extends LinkProps {
  sfSize: SFSize;
}

export const SFLink = ({
  sfSize = 'medium',
  color,
  ...props
}: SFLinkProps): React.ReactElement<SFLinkProps> => {
  const sfColor = color !== 'primary' ? 'inherit' : 'primary';
  return <StyledLink {...props} style={getSizeStyle(sfSize)} color={sfColor} />;
};
