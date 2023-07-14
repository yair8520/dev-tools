import { IApiTabs } from "../../Constant/Mock";

export interface ApiContextProps {
  [key: string]: any;
}
export const initialTabContext = {
  tabs: {},
  selectedCollection: {
    collection: '',
    id: '',
  },
  collections: [],
  loading: false,
  tabIndex: '',
  setCollections: () => { },
  editCollection: () => { },
  createCollection: () => { },
  removeCollection: () => { },
  setSelectedCollection: () => { },
  setTabs: () => { },
  editTabTitle: () => { },
  addTab: () => { },
  removeTab: () => { },
  addData: () => { },
  toggleQuary: () => { },
  addSubTab: () => { },
  sendReq: () => { },
  removeSubTab: () => { },
  updateBody: () => { },
  addTabData: () => { },
  setTabIndex: () => { },
}
export interface AppContextInterface {
  tabIndex: string;
  setTabIndex: React.Dispatch<React.SetStateAction<string>>;
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