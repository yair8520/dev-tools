import React, { useState } from 'react';
import { ThemeContextProps } from './ThemeContextProps';

interface AppContextInterface {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppContextInterface>({
  isDark: true,
  setIsDark: () => {},
});

export const ThemeContext = ({ children }: ThemeContextProps) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  );
};
