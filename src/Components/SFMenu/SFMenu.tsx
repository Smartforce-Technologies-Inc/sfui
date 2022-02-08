import React from 'react';
import { Menu, MenuProps, withStyles } from '@material-ui/core';

const StyledMenu = withStyles(() => ({
  paper: {
    '& *:focus': {
      'outline-style': 'none'
    }
  }
}))(Menu);

export interface SFMenuProps extends MenuProps {}

export const SFMenu = (props: SFMenuProps): React.ReactElement<SFMenuProps> => {
  return <StyledMenu {...props} />;
};
