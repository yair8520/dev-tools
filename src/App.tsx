import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ModalProvider } from './Components/ModalContext/ModalContext';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './Theme';
import { AppRouter } from './Routing';
import { AppContext } from './Components/ThemeContext/ThemeContext';
import firebaseReference from './Config/Firebase';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
function App() {
  const { isDark } = useContext(AppContext);
  const [numOfUsers, setNumOfUsers] = useState<number>(0);
  // useEffect(() => {
  //   // Sign in anonymously
  //   firebaseReference.auth().signInAnonymously()
  //     .then((userCredential) => {
  //       // Anonymous user is signed in
  //       const user = userCredential.user;
  //       console.log('Anonymous user:', user?.uid);

  //       // Store user UID in Firestore
  //       const firestore = firebaseReference.firestore();
  //       firestore.collection('users').doc(user?.uid).set({
  //         uid: user?.uid,
  //       });

  //       // Retrieve number of users
  //       firestore.collection('users').get()
  //         .then((querySnapshot) => {
  //           const numUsers = querySnapshot.size;
  //           setNumOfUsers(numUsers)
  //         })
  //         .catch((error) => {
  //           console.error('Error retrieving users:', error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error('Error signing in anonymously:', error);
  //     });
  // }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ModalProvider>
        <CssBaseline />
        <AppRouter numOfUsers={numOfUsers} />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
