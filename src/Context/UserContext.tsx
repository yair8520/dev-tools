import React, { createContext, useEffect, useState } from 'react';
import { User } from '../Types/User';
import useFirebaseAuth from '../Hooks/useFirebaseAuth/useFirebaseAuth';
import { GoogleOneTap } from '../Components/GoogleOneTap';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Config/Firebase';

type UserContextType = {
  user: User | null;
};

export const UserContext = createContext<UserContextType>({
  user: null,
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useFirebaseAuth({ setUser });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const handleAnonymousSignIn = (credential: string) => {
    return auth
      .signInWithCredential(GoogleAuthProvider.credential(credential))
      .catch((error) => {
        console.log('Sign-in error:', error);
      });
  };

  return (
    <UserContext.Provider value={{ user }}>
      {
        <>
          {!user && !loading && (
            <GoogleOneTap handleAnonymousSignIn={handleAnonymousSignIn} />
          )}
          {children}
        </>
      }
    </UserContext.Provider>
  );
};
