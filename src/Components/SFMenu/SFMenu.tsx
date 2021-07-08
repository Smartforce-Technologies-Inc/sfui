import React from 'react';
import { Menu, MenuProps } from '@material-ui/core';

export interface SFMenuProps extends MenuProps {}

export const SFMenu = (props: SFMenuProps): React.ReactElement<SFMenuProps> => {
  return <Menu {...props} />;
};
