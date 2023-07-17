import { createTheme } from '@mui/material/styles';
import { CommonThemeOptions } from './CommonThemeOptions';

import {
  SFGrey,
  SFBlue,
  SFBlueMainDark,
  SFRedMainDark,
  SFBackgroundDark,
  SFSurfaceDark,
  SFTextWhite
} from '../SFColors/SFColors';

const NightThemeOptions = { ...CommonThemeOptions };

NightThemeOptions.palette = {
  mode: 'dark',
  text: {
    primary: SFTextWhite
  },
  primary: {
    main: SFBlueMainDark
  },
  secondary: {
    main: SFRedMainDark
  },
  background: {
    default: SFBackgroundDark,
    paper: SFSurfaceDark
  },
  grey: SFGrey,
  // TODO - action prop is work in progress
  action: {
    active: SFGrey[500],
    activatedOpacity: 0.3,
    hover: SFBlue[200],
    hoverOpacity: 0.3,
    selected: SFBlue[200],
    selectedOpacity: 0.1,
    disabled: SFGrey[600],
    disabledBackground: SFGrey[800],
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12
  }
};

NightThemeOptions.components = {
  ...NightThemeOptions.components,
  MuiMenu: {
    styleOverrides: {
      paper: {
        backgroundImage: 'none',
        backgroundColor: SFGrey[800]
      }
    }
  }
};

const NightTheme = createTheme(NightThemeOptions);

export { NightTheme };
