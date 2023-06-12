import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from '../../Config/Firebase';

export const useGoogleLogin = () => {
  useEffect(() => {
    const handleGoogleLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then((result) => {
        })
        .catch((error) => {
          console.error('Login error:', error);
        });
    };
    const loginButton = document.getElementById('google-login-button');
    if (loginButton) {
      loginButton.addEventListener('click', handleGoogleLogin);
    }
    return () => {
      if (loginButton) {
        loginButton.removeEventListener('click', handleGoogleLogin);
      }
    };
  }, []);

  return null;
};
