import { AxiosError, AxiosResponse } from 'axios';

export interface IApiTabs {
  [key: string]: ITab;
}

export interface ITab {
  id: string;
  collection: string;
  title: string;
  value: string;
  url: string;
  method: string;
  data: IApiData;
  res: IResponse;
}

export interface IResponse {
  time: number | null;
  size: string | null;
  response: AxiosResponse<any> | null;
  error?: AxiosError<any> | null;
  errorMessage?: string | null;
}

export interface IApiData {
  queryParams: IParams;
  headers: IParams;
  body: string;
}

export interface IParams {
  [key: string]: {
    key: string;
    value: string;
    checked: boolean;
  };
}
export const getDefaultTab = (id: string, collection: string): ITab => {
  return {
    id: id,
    collection: collection,
    title: 'New Tab',
    value: id,
    url: 'https://jsonplaceholder.typicode.com/todos/',
    method: 'GET',
    data: {
      queryParams: {
        '0': {
          key: '',
          value: '',
          checked: false,
        },
      },
      headers: {
        '0': {
          key: 'Content-Type',
          value: 'application/json',
          checked: true,
        },
        '1': {
          key: 'Accept',
          value: '*/*',
          checked: true,
        },
        '2': {
          key: 'Cache-Control',
          value: 'no-cache',
          checked: true,
        },

      },
      body: "",
    },
    res: {
      time: null,
      size: null,
      response: null,
      error: null,
      errorMessage: null,
    },
  };
};

export const apiTabs: IApiTabs = {
  '1': {
    id: '1',
    collection: 'example collection',

    title: 'Tab 1',
    value: '1',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      queryParams: {
        '0': {
          key: '',
          value: '',
          checked: false,
        },
      },
      headers: {
        '0': {
          key: 'Content-Type',
          value: 'application/json',
          checked: true,
        },
      },
      body: "",
    },
    res: {
      time: 0,
      size: '',
      response: null,
      error: null,
    },
    method: 'GET',
  },
  '2': {
    id: '2',
    collection: 'collection1',

    title: 'Tab 2',
    value: '2',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      queryParams: {
        '0': {
          key: '',
          value: '',
          checked: false,
        },
      },
      headers: {
        '0': {
          key: 'Content-Type',
          value: 'application/json',
          checked: true,
        },
      },
      body: "",
    },
    res: {
      time: 0,
      size: '',
      response: null,
      error: null,
    },
    method: 'POST',
  },
};
