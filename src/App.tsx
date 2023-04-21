import React, { useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ModalProvider } from './Components/ModalContext/ModalContext';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './Theme';
import { AppRouter } from './Routing';
import { AppContext } from './Components/ThemeContext/ThemeContext';
function App() {
  const { isDark } = useContext(AppContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ModalProvider>
        <CssBaseline />
        <AppRouter />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
