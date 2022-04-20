import React from 'react';
import { styled } from '@mui/material/styles';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';

export interface SFDrawerProps extends DrawerProps {}

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  backgroundColor: `${
    theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.3)'
      : hexToRgba(SFGrey.A400 as string, 0.8)
  }`,

  '& .MuiPaper-root': {
    backgroundImage: 'unset'
  }
}));

export const SFDrawer = ({
  transitionDuration = 360,
  ...props
}: SFDrawerProps): React.ReactElement<SFDrawerProps> => (
  <StyledDrawer {...props} transitionDuration={transitionDuration} />
);
