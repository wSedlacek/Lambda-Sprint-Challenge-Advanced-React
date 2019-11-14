import { createMuiTheme } from '@material-ui/core';
import { indigo, pink, deepPurple, green } from '@material-ui/core/colors';

const theme = ({ darkMode }: { darkMode: boolean }) =>
  createMuiTheme({
    palette: {
      primary: darkMode ? deepPurple : indigo,
      secondary: darkMode ? green : pink,
      type: darkMode ? 'dark' : 'light',
    },
  });

export { theme };
