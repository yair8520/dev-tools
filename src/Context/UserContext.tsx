import React, { createContext, useEffect, useState } from 'react';
import { User } from '../Types/User';

type UserContextType = {
  user: User | null;
  saveUser?: any;
};

export const UserContext = createContext<UserContextType>({
  user: null,
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const saveUser = (data: User) => {
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  return (
    <UserContext.Provider value={{ user, saveUser }}>
      {children}
    </UserContext.Provider>
  );
};
