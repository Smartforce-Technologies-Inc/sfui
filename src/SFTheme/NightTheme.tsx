import { createMuiTheme } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

const NightTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: green[200],
      main: green[500],
      dark: green[700]
    },
    secondary: {
      light: blue[200],
      main: blue[500],
      dark: blue[700]
    }
  }
});

export { NightTheme };
