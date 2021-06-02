import { withStyles, Theme } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';
import { hexToRgba } from '../../Helpers';
import { SFGrey } from '../../SFColors/SFColors';

export const SFMenuItem = withStyles((theme: Theme) => ({
  root: {
    padding: '6px 24px',
    height: 36,
    '&:hover': {
      background:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey[200], 0.3)
          : hexToRgba(SFGrey[500], 0.3)
    },
    '&:active': {
      background:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey[200], 0.5)
          : hexToRgba(SFGrey[500], 0.2)
    },
    '&.Mui-selected': {
      background:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey[200], 0.5)
          : hexToRgba(SFGrey[500], 0.2),
      '&:hover': {
        background:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey[200], 0.3)
            : hexToRgba(SFGrey[500], 0.3)
      }
    }
  }
}))(MenuItem);
