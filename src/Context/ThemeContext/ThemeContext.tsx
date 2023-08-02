import React, { useState } from 'react';
import { ThemeContextProps } from './ThemeContextProps';
import { useLocalStorage } from '../../Hooks/useLocalStorage';

interface AppContextInterface {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppContextInterface>({
  isDark: false,
  setIsDark: () => {},
});

export const ThemeContext = ({ children }: ThemeContextProps) => {
  const [isDark, setIsDark] = useLocalStorage('darkMode', true);
  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  );
};
