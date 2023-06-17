import React, { createContext, useState, useContext } from 'react';

interface DrawerContextProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerContext = createContext<DrawerContextProps>({
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
});

export const DrawerProvider = ({ children }: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const contextValue: DrawerContextProps = {
    isDrawerOpen,
    setIsDrawerOpen,
  };

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};
