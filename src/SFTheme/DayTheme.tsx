import { createMuiTheme } from '@material-ui/core/styles';
import { CommonThemeOptions } from './CommonThemeOptions';
import {
  SFGrey,
  SFBlue,
  SFBlueMainLight,
  SFRedMainLight,
  SFBackgroundLight,
  SFSurfaceLight,
  SFTextBlack
} from '../SFColors/SFColors';

CommonThemeOptions.palette = {
  type: 'light',
  text: {
    primary: SFTextBlack
  },
  primary: {
    main: SFBlueMainLight
  },
  secondary: {
    main: SFRedMainLight
  },
  background: {
    default: SFBackgroundLight,
    paper: SFSurfaceLight
  },
  grey: SFGrey,
  // TODO - action prop is work in progress
  action: {
    active: SFGrey[200],
    activatedOpacity: 0.3,
    hover: SFBlue[100],
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledOpacity: 0.38,
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12
  }
};

const DayTheme = createMuiTheme(CommonThemeOptions);

export { DayTheme };
