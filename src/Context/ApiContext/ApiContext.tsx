import React, { useState } from 'react';
import { ApiContextProps } from './ApiContextProps';
import { IApiTabs, IParams, apiTabs } from '../../Constant/Mock';
import { v4 as uuid } from 'uuid';
import { useAxios } from '../../Hooks/useAxios';

interface AppContextInterface {
  tabs: IApiTabs;
  setTabs: React.Dispatch<React.SetStateAction<IApiTabs>>;
  addTab: Function;
  removeTab: Function;
  addData: ({ itemId, key, value, tabId, type }: any) => void;
  addSubTab: ({ tabId, type }: any) => void;
  removeSubTab: ({ tabId, type, itemId }: any) => void;
}

export const TabsContext = React.createContext<AppContextInterface>({
  tabs: {},
  setTabs: () => {},
  addTab: () => {},
  removeTab: () => {},
  addData: () => {},
  addSubTab: () => {},
  removeSubTab: () => {},
});

export const ApiContext = ({ children }: ApiContextProps) => {
  const [tabs, setTabs] = useState<IApiTabs>(apiTabs);

  const addTab = () => {};
  const removeTab = () => {};
  const addSubTab = ({ tabId, type }: any) => {
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      const tabToUpdate = newTabs[tabId];
      const updatedTab = {
        ...tabToUpdate,
        data: {
          ...tabToUpdate.data,
          [type]: {
            ...(tabToUpdate.data[
              type as keyof typeof tabToUpdate.data
            ] as IParams),
            [uuid()]: { key: '', value: '' },
          },
        },
      };
      console.log(updatedTab)
      newTabs[tabId] = updatedTab;
      return newTabs;
    });
  };
  const removeSubTab = ({ tabId, type, itemId }: any) => {
    console.log({ tabId, type, itemId });
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      delete newTabs[tabId].data[type as keyof object][itemId];
      return newTabs;
    });
  };

  const addData = ({ itemId, key, value, tabId, type }: any) => {
    console.log('itemId', itemId, key, value, tabId, type);
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      const tabToUpdate = newTabs[tabId];
      const updatedTab = {
        ...tabToUpdate,
        data: {
          ...tabToUpdate.data,
          [type]: {
            ...(tabToUpdate.data[
              type as keyof typeof tabToUpdate.data
            ] as IParams),
            [itemId]: { key, value },
          },
        },
      };
      newTabs[tabId] = updatedTab;
      return newTabs;
    });
  };

  // const { error, fetchData, loading, response } = useAxios();
  // const sendReq = () => {
  //   fetchData({});
  // };
  return (
    <TabsContext.Provider
      value={{
        tabs,
        setTabs,
        addTab,
        removeTab,
        addData,
        removeSubTab,
        addSubTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
