import React, { useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ModalProvider } from './Components/ModalContext/ModalContext';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './Theme';
import { AppRouter } from './Routing';
import { AppContext } from './Context/ThemeContext/ThemeContext';
import { UserProvider } from './Context/UserContext';
import './GlobalStyle.module.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TodoProvider } from './Context/TodoContext/TodoContext';
import { NotesProvider } from './Context/NotesContext/NotesContext';
import GoogleOneTapLogin from 'react-google-one-tap-login';
import { handleAnonymousSignIn } from './Helpers/FireBase/auth';
function App() {
  const { isDark } = useContext(AppContext);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <UserProvider>
        <TodoProvider>
          <NotesProvider>
            <ModalProvider>
              <CssBaseline />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <GoogleOneTapLogin
                  onError={(error) => console.log(error)}
                  googleAccountConfigs={{
                    callback: ({ credential }) =>
                      handleAnonymousSignIn(credential),
                    client_id: process.env.REACT_APP_CLIENT_ID!,
                    auto_select: false,
                  }}
                >
                  <AppRouter />
                </GoogleOneTapLogin>
              </LocalizationProvider>
            </ModalProvider>
          </NotesProvider>
        </TodoProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
