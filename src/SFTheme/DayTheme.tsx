import { createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const DayTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: purple[200],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: red[200],
      main: red[500],
      dark: red[700]
    }
  }
});

export { DayTheme };
