import React from 'react';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';

const StyledMenu = styled(Menu)({
  '&.MuiMenu-paper': {
    '& *:focus': {
      'outline-style': 'none'
    }
  }
});

export interface SFMenuProps extends MenuProps {}

export const SFMenu = (props: SFMenuProps): React.ReactElement<SFMenuProps> => {
  return <StyledMenu {...props} />;
};
