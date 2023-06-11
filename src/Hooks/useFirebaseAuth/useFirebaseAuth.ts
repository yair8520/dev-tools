import { useEffect, useState } from 'react';
import 'firebase/auth';
import { auth } from '../../Config/Firebase';

const useFirebaseAuth = ({ setUser }: any): void => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser?.toJSON());
    });

    return () => {
      unsubscribe();
    };
  }, []);
};

export default useFirebaseAuth;
