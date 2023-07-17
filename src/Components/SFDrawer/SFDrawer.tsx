import React from 'react';
import { Drawer, DrawerProps, styled } from '@mui/material';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

export interface SFDrawerProps extends DrawerProps {}

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  root: {
    backgroundColor: `${
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, 0.3)'
        : hexToRgba(SFGrey.A400 as string, 0.8)
    }`
  }
}));

export const SFDrawer = ({
  transitionDuration = 360,
  ...props
}: SFDrawerProps): React.ReactElement<SFDrawerProps> => (
  <StyledDrawer {...props} transitionDuration={transitionDuration} />
);
