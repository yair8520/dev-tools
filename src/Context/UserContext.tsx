import React, { createContext,  useState } from 'react';
import { User } from '../Types/User';
import useFirebaseAuth from '../Hooks/useFirebaseAuth/useFirebaseAuth';

type UserContextType = {
  user: User | null;
};

export const UserContext = createContext<UserContextType>({
  user: null,
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  useFirebaseAuth({ setUser });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
