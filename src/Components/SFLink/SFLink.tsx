import * as React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Link, { LinkProps } from '@material-ui/core/Link';
import { SFGrey } from '../../SFColors/SFColors';

type SFSize = 'small' | 'medium';
const StyledLink = withStyles((theme: Theme) => ({
  root: {
    '&.MuiTypography-colorInherit': {
      color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`
    }
  }
}))(Link);

const getLinkSize = (size?: SFSize): string => {
  let fontSize: string;
  switch (size) {
    case 'small':
      fontSize = '14px';
      break;
    default:
      fontSize = '16px';
      break;
  }
  return fontSize;
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
  return (
    <StyledLink
      {...props}
      style={{
        fontSize: getLinkSize(sfSize),
        cursor: 'pointer'
      }}
      color={sfColor}
    />
  );
};
