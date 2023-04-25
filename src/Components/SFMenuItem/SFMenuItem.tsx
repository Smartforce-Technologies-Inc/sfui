import { MenuItem, styled } from '@mui/material';
import { hexToRgba } from '../../Helpers';
import { SFGrey } from '../../SFColors/SFColors';

export const SFMenuItem = styled(MenuItem)(({ theme }) => ({
  root: {
    padding: '6px 24px',
    height: 36,
    '&:hover': {
      '@media (hover: hover)': {
        background:
          theme.palette.mode === 'light'
            ? hexToRgba(SFGrey[200], 0.3)
            : hexToRgba(SFGrey[500], 0.3)
      }
    },
    '&:active': {
      background:
        theme.palette.mode === 'light'
          ? hexToRgba(SFGrey[200], 0.5)
          : hexToRgba(SFGrey[500], 0.2)
    },
    '&.Mui-selected': {
      background:
        theme.palette.mode === 'light'
          ? hexToRgba(SFGrey[200], 0.5)
          : hexToRgba(SFGrey[500], 0.2),
      '&:hover': {
        '@media (hover: hover)': {
          background:
            theme.palette.mode === 'light'
              ? hexToRgba(SFGrey[200], 0.3)
              : hexToRgba(SFGrey[500], 0.3)
        }
      }
    }
  }
}));
