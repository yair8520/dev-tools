import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { ThemeContext } from './Context/ThemeContext';
import { toastConfig } from './Config/Toast';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <ToastContainer {...toastConfig} />
    <ThemeContext>
      <App />
    </ThemeContext>
  </>
);
serviceWorkerRegistration.register();

