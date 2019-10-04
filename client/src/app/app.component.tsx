import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { useLocalStorage } from './hooks/local-storage.hook';
import { theme } from './theme/theme.config';
import { Bar } from './components/bar/bar.component';
import { PlayersPage } from './pages/players/players.page';

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);

  return (
    <ThemeProvider theme={theme({ darkMode: darkMode })}>
      <CssBaseline />
      <Bar enabled={darkMode} onSwitch={setDarkMode} />
      <PlayersPage />
    </ThemeProvider>
  );
};

export { App };
