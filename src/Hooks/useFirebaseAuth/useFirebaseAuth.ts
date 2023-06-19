import { useEffect } from 'react';
import 'firebase/auth';
import { auth } from '../../Config/Firebase';

const useFirebaseAuth = ({ setUser }: any): void => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser ? authUser.toJSON() : null);
    });

    return () => {
      unsubscribe();
    };
  }, [setUser]);
};

export default useFirebaseAuth;
