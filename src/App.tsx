import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ModalProvider } from './Components/ModalContext/ModalContext';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './Theme';
import { AppRouter } from './Routing';
import { AppContext } from './Components/ThemeContext/ThemeContext';
import { UserProvider } from './Context/UserContext';
import './GlobalStyle.module.css';
function App() {
  const { isDark } = useContext(AppContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ModalProvider>
        <CssBaseline />
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
