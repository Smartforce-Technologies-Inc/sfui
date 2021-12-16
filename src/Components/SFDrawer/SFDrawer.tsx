import React from 'react';
import { Drawer, DrawerProps } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

export interface SFDrawerProps extends DrawerProps {}

export const StyledDrawer = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: `${
      theme.palette.type === 'light'
        ? 'rgba(0, 0, 0, 0.3)'
        : hexToRgba(SFGrey.A400 as string, 0.8)
    }`
  }
}))(Drawer);

export const SFDrawer = ({
  transitionDuration = 360,
  ...props
}: SFDrawerProps): React.ReactElement<SFDrawerProps> => (
  <StyledDrawer {...props} transitionDuration={transitionDuration} />
);
