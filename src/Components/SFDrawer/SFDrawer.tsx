import { Drawer, DrawerProps } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../helpers';

export interface SFDrawerProps extends DrawerProps {}

export const SFDrawer = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: `${
      theme.palette.type === 'light'
        ? 'rgba(0, 0, 0, 0.3)'
        : hexToRgba(SFGrey.A400 as string, 0.8)
    }`
  }
}))(Drawer);
