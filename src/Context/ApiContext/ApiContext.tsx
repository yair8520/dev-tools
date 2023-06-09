import React, { useContext, useEffect, useState } from 'react';
import { ApiContextProps } from './ApiContextProps';
import {
  IApiTabs,
  IParams,
  ITab,
  apiTabs,
  getDefaultTab,
} from '../../Constant/Mock';
import { v4 as uuid } from 'uuid';
import { useAxios } from '../../Hooks/useAxios';
import { AxiosRequestConfig } from 'axios';
import { objectToPairs } from '../../Helpers/Json';
import { addParamsToURL } from '../../Helpers/Url';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../UserContext';
import { deleteTabFB, getAllTabs, saveTab } from '../../Helpers/FireBase/Api';

interface AppContextInterface {
  tabs: IApiTabs;
  setTabs: React.Dispatch<React.SetStateAction<IApiTabs>>;
  addTab: Function;
  removeTab: Function;
  editTabTitle: Function;
  removeCollection: Function;
  loading: boolean;
  selectedCollection: { collection: string; id: string };
  collections: { collection: string; id: string }[];
  setCollections: Function;
  createCollection: Function;
  editCollection: Function;
  setSelectedCollection: Function;
  addData: ({ itemId, key, value, tabId, type }: any) => void;
  toggleQuary: ({ itemId, key, value, tabId, type }: any) => void;
  addTabData: ({ tabId, type, value }: any) => void;
  updateBody: ({ tabId, type, value }: any) => void;
  addSubTab: ({ tabId, type }: any) => void;
  sendReq: ({ tabId }: any) => void;
  removeSubTab: ({ tabId, type, itemId }: any) => void;
}

export const TabsContext = React.createContext<AppContextInterface>({
  tabs: {},
  selectedCollection: {
    collection: '',
    id: '',
  },
  collections: [],
  setCollections: () => {},
  editCollection: () => {},
  createCollection: () => {},
  removeCollection: () => {},
  setSelectedCollection: () => {},
  setTabs: () => {},
  editTabTitle: () => {},
  addTab: () => {},
  removeTab: () => {},
  addData: () => {},
  toggleQuary: () => {},
  addSubTab: () => {},
  sendReq: () => {},
  removeSubTab: () => {},
  updateBody: () => {},
  addTabData: () => {},
  loading: false,
});

export const ApiContext = ({ children }: ApiContextProps) => {
  const [tabs, setTabs] = useState<IApiTabs>({});
  const [collections, setCollections] = useState<
    { collection: string; id: string }[]
  >([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user?.email) {
      getAllTabs(user.email)
        .then((res: any) => {
          setTabs(res);
          const firstItem: ITab = res[Object.keys(res)[0]];
          setSelectedCollection({
            collection: firstItem.collection,
            id: firstItem.id,
          });
        })
        .catch((s) => console.log({ s }));
    } else setTabs(apiTabs);
  }, [user]);
  const [selectedCollection, setSelectedCollection] = useState<{
    collection: string;
    id: string;
  }>({ collection: 'collection1', id: '1' });

  const removeCollection = (name: string) => {
    let firstCollection: ITab;
    setTabs((prevTabs: IApiTabs) => {
      const newTabs: IApiTabs = {};
      for (const tabId in prevTabs) {
        if (prevTabs.hasOwnProperty(tabId)) {
          const tab = prevTabs[tabId];
          if (tab.collection !== name) {
            newTabs[tabId] = tab;
            if (!firstCollection) {
              firstCollection = tab;
            }
          }
        }
      }
      setCollections((prevCollections) =>
        prevCollections.filter((collection) => collection.collection !== name)
      );
      setSelectedCollection({
        collection: firstCollection?.collection || '',
        id: firstCollection?.id || '',
      });
      return newTabs;
    });
  };

  useEffect(() => {
    const uniqueCollections: { collection: string; id: string }[] = [];
    for (const key in tabs) {
      const tab = tabs[key];
      const existingCollection = uniqueCollections.find(
        (item) => item.collection === tab.collection
      );
      if (!existingCollection) {
        uniqueCollections.push({ collection: tab.collection, id: tab.id });
      }
    }
    setCollections(uniqueCollections);
  }, [tabs]);
  const addTab = (id: string) => {
    const newTab = getDefaultTab(id, selectedCollection.collection);
    saveTab(id, newTab);
    setTabs((prevTabs: IApiTabs) => {
      const updatedTabs = { ...prevTabs };
      updatedTabs[newTab.id] = newTab;
      return updatedTabs;
    });
  };
  const createCollection = (newName = 'Example') => {
    const id = uuidv4();
    const newTab = getDefaultTab(id, newName);
    setTabs((prevTabs: IApiTabs) => {
      const updatedTabs = { ...prevTabs };
      updatedTabs[newTab.id] = newTab;
      return updatedTabs;
    });
    setSelectedCollection({ collection: newName, id });
  };
  const editCollection = (newName: string, prevName: string) => {
    setTabs((prevTabs: IApiTabs) => {
      const updatedTabs = { ...prevTabs };
      for (const key in updatedTabs) {
        if (updatedTabs.hasOwnProperty(key)) {
          const tab = updatedTabs[key];
          if (tab.collection === prevName) {
            updatedTabs[key] = { ...tab, collection: newName };
          }
        }
      }
      return updatedTabs;
    });
    setSelectedCollection({ collection: newName, id: '0' });
  };
  const removeTab = ({ id }: any) => {
    deleteTabFB(id);
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      delete newTabs[id];
      return newTabs;
    });
  };
  const editTabTitle = ({ id, newTitle }: any) => {
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      newTabs[id].title = newTitle;
      return newTabs;
    });
  };
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
      newTabs[tabId].url = addParamsToURL(
        newTabs[tabId].url,
        newTabs[tabId].data.queryParams
      );
      return newTabs;
    });
  };

  const addData = ({ itemId, key, value, tabId, type }: any) => {
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      const tabToUpdate = newTabs[tabId];
      const { checked } = tabToUpdate.data[type as keyof object][itemId];
      const updatedTab = {
        ...tabToUpdate,
        url:
          type === 'queryParams'
            ? addParamsToURL(tabToUpdate.url, tabToUpdate.data.queryParams)
            : tabToUpdate.url,
        data: {
          ...tabToUpdate.data,
          [type]: {
            ...(tabToUpdate.data[
              type as keyof typeof tabToUpdate.data
            ] as IParams),
            [itemId]: { key, value, checked },
          },
        },
      };
      newTabs[tabId] = updatedTab;
      return newTabs;
    });
  };

  const toggleQuary = ({ itemId, key, value, tabId, type }: any) => {
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      const tabToUpdate = newTabs[tabId];
      const prevItem: IParams = tabToUpdate.data[type as keyof object][itemId];
      const updatedTab = {
        ...tabToUpdate,
        data: {
          ...tabToUpdate.data,
          [type]: {
            ...(tabToUpdate.data[
              type as keyof typeof tabToUpdate.data
            ] as IParams),
            [itemId]: { ...prevItem, checked: !prevItem.checked },
          },
        },
      };
      newTabs[tabId] = updatedTab;
      newTabs[tabId].url = addParamsToURL(
        updatedTab.url,
        updatedTab.data.queryParams
      );
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
  const updateBody = ({ tabId, type, value }: any) => {
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      const tabToUpdate = newTabs[tabId];
      const updatedTab = {
        ...tabToUpdate,
        data: {
          ...tabToUpdate.data,
          [type]: value,
        },
      };
      newTabs[tabId] = updatedTab;
      return newTabs;
    });
  };

  const { fetchData, loading } = useAxios();
  const updateRes = ({ time, response, size, tabId }: any) => {
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      const tabToUpdate = newTabs[tabId];
      const updatedTab = {
        ...tabToUpdate,
        res: { time, response, size },
      };
      newTabs[tabId] = updatedTab;
      return newTabs;
    });
  };
  const updateResError = ({
    time,
    error,
    tabId,
    errorMessage,
    response,
    size,
  }: any) => {
    setTabs((prevTabs: IApiTabs) => {
      const newTabs = { ...prevTabs };
      const tabToUpdate = newTabs[tabId];
      const updatedTab = {
        ...tabToUpdate,
        res: { time, response: response, error, errorMessage, size },
      };
      newTabs[tabId] = updatedTab;
      return newTabs;
    });
  };

  const sendReq = ({ tabId }: any) => {
    const tab = tabs[tabId];
    console.log({ tab });
    const axiosParams: AxiosRequestConfig = {
      url: tab.url,
      method: tab.method,
      params: objectToPairs(tab.data.queryParams),
      headers: objectToPairs(tab.data.headers),
      data: tab.data.body,
    };
    fetchData(axiosParams)
      .then(({ time, response, size }) =>
        updateRes({ time, response, size, tabId })
      )
      .catch(({ error, time, errorMessage, response, size }) =>
        updateResError({ time, error, tabId, errorMessage, response, size })
      );
  };
  return (
    <TabsContext.Provider
      value={{
        editCollection,
        editTabTitle,
        createCollection,
        selectedCollection,
        tabs,
        setTabs,
        addTab,
        removeTab,
        addData,
        removeSubTab,
        addSubTab,
        sendReq,
        toggleQuary,
        loading,
        addTabData,
        updateBody,
        collections,
        setCollections,
        setSelectedCollection,
        removeCollection,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
