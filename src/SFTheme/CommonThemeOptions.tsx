import { ThemeOptions } from '@material-ui/core/styles';

const CommonThemeOptions: ThemeOptions = {
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  shape: {
    borderRadius: 2
  },
  overrides: {
    MuiFormControlLabel: {
      root: {
        marginRight: 0
      }
    },
    MuiIconButton: {
      colorPrimary: {
        '&:hover': {
          borderRadius: '50%'
        },
        '&:active': {
          borderRadius: '50%'
        }
      }
    },
    MuiButton: {
      root: {
        padding: '4px 10px',
        height: '30px',
        boxSizing: 'border-box'
      },
      label: {
        textTransform: 'none'
      }
    }
  }
};

export { CommonThemeOptions };
