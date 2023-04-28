import React from 'react';
import { Menu, MenuProps, styled } from '@mui/material';

const StyledMenu = styled(Menu)({
  paper: {
    '& *:focus': {
      'outline-style': 'none'
    }
  }
});

export interface SFMenuProps extends MenuProps {}

export const SFMenu = (props: SFMenuProps): React.ReactElement<SFMenuProps> => {
  return <StyledMenu {...props} />;
};
