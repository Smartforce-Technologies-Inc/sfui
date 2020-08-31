import { ThemeOptions } from '@material-ui/core/styles';

/**
 *  Code Example of how we can modify global theme options
 */

const CommonThemeOptions: ThemeOptions = {
  // Override component classes
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
      },
      label: {
        textTransform: 'uppercase'
      }
    }
  },
  // Set components default props values
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
      disableRipple: true
    }
  }
};

export { CommonThemeOptions };
