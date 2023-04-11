import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MuiTheme } from './Theme';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import i18n from './I18n';
import 'react-toastify/dist/ReactToastify.css';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import { ModalProvider } from './Components/ModalContext/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={MuiTheme}>
      <ModalProvider>
        <App />
      </ModalProvider>
      <ToastContainer position="top-center" />
    </ThemeProvider>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
