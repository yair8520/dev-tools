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
          // Handle successful login
          console.log('User logged in:', result.user);
        })
        .catch((error) => {
          // Handle login error
          console.error('Login error:', error);
        });
    };

    // Attach the event listener to the button or component triggering the login
    const loginButton = document.getElementById('google-login-button');
    if (loginButton) {
      loginButton.addEventListener('click', handleGoogleLogin);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (loginButton) {
        loginButton.removeEventListener('click', handleGoogleLogin);
      }
    };
  }, []);

  return null; // You can return any necessary data or components here
};
