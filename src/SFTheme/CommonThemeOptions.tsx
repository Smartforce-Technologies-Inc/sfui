import { SFThemeOptions } from './SFTheme';

const CommonThemeOptions: SFThemeOptions = {
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiDrawer: {
      elevation: 24
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
        // Needed for color transitions between enabled and disabled
        transition: 'color .01s',
        '&.Mui-disabled span': { transition: '.01s' },
        padding: '4px 10px',
        height: '30px',
        boxSizing: 'border-box'
      },
      label: {
        textTransform: 'none'
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.02), 0px 1px 1px rgba(0,0,0,0.14), 0px 1px 3px rgba(0,0,0,0.12)'
      },
      elevation2: {
        boxShadow:
          '0px 3px 1px -2px rgba(0, 0, 0, 0.02), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'
      },
      elevation3: {
        boxShadow:
          '0px 3px 3px -2px rgba(0, 0, 0, 0.02), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)'
      },
      elevation4: {
        boxShadow:
          '0px 2px 4px -1px rgba(0, 0, 0, 0.02), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)'
      },
      elevation6: {
        boxShadow:
          '0px 3px 5px -1px rgba(0, 0, 0, 0.02), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)'
      },
      elevation8: {
        boxShadow:
          '0px 5px 5px -3px rgba(0, 0, 0, 0.02), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)'
      },
      elevation9: {
        boxShadow:
          '0px 5px 6px -3px rgba(0, 0, 0, 0.02), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)'
      },
      elevation12: {
        boxShadow:
          '0px 7px 8px -4px rgba(0, 0, 0, 0.02), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)'
      },
      elevation16: {
        boxShadow:
          '0px 8px 10px -5px rgba(0, 0, 0, 0.02), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)'
      },
      elevation24: {
        boxShadow:
          '0px 11px 15px -7px rgba(0, 0, 0, 0.02), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)'
      }
    }
  }
};

export { CommonThemeOptions };
