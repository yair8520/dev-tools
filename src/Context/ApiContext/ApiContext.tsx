import React, { useState } from 'react';
import { ApiContextProps } from './ApiContextProps';
import { IApiTabs, IParams, apiTabs } from '../../Constant/Mock';
import { v4 as uuid } from 'uuid';
import { useAxios } from '../../Hooks/useAxios';
import {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

interface AppContextInterface {
  tabs: IApiTabs;
  setTabs: React.Dispatch<React.SetStateAction<IApiTabs>>;
  addTab: Function;
  removeTab: Function;
  error: AxiosError<any> | null;
  loading: boolean;
  response: AxiosResponse<any> | undefined;
  time: string | undefined;
  size: number | undefined;
  addData: ({ itemId, key, value, tabId, type }: any) => void;
  addTabData: ({ tabId, type, value }: any) => void;
  addSubTab: ({ tabId, type }: any) => void;
  sendReq: ({ tabId }: any) => void;
  removeSubTab: ({ tabId, type, itemId }: any) => void;
}

export const TabsContext = React.createContext<AppContextInterface>({
  tabs: {},
  setTabs: () => {},
  addTab: () => {},
  removeTab: () => {},
  addData: () => {},
  addSubTab: () => {},
  sendReq: () => {},
  removeSubTab: () => {},
  addTabData: () => {},
  error: null,
  response: undefined,
  time: undefined,
  size: 0,
  loading: false,
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
      newTabs[tabId] = updatedTab;
      return newTabs;
    });
  };
  const removeSubTab = ({ tabId, type, itemId }: any) => {
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      delete newTabs[tabId].data[type as keyof object][itemId];
      return newTabs;
    });
  };

  const addData = ({ itemId, key, value, tabId, type }: any) => {
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
  const addTabData = ({ tabId, type, value }: any) => {
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      const tabToUpdate = newTabs[tabId];
      const updatedTab = {
        ...tabToUpdate,
        [type]: value,
      };
      newTabs[tabId] = updatedTab;
      return newTabs;
    });
  };

  const { error, fetchData, loading, response, time, size } = useAxios();
  const sendReq = ({ tabId }: any) => {
    const tab = tabs[tabId];
    const axiosParams: AxiosRequestConfig = {
      url: tab.url,
      method: tab.method,
      params: tab.data.queryParams,
      headers: tab.data.headers as AxiosHeaders,
      data: tab.data.body,
    };
    fetchData(axiosParams);
  };
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
        sendReq,
        error,
        loading,
        addTabData,
        response,
        time,
        size,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
