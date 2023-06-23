import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from '../../Config/Firebase';
import { GoogleAuthProvider } from 'firebase/auth';

export const handleGoogleLogin = () => {
  return new Promise((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result: { user: any }) => {
        const user = result.user;
        resolve(user);
      })
      .catch((error: any) => {
        // Handle login error
        console.error('Login error:', error);
        reject(error);
      });
  });
};
export const googleLogOut = () => {
  return new Promise<void>((resolve, reject) => {
    auth
      .signOut()
      .then((r) => {
        resolve();
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

