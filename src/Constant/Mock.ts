import { AxiosError, AxiosResponse } from 'axios';

export interface IApiTabs {
  [key: string]: ITab;
}

export interface ITab {
  id: string;
  title: string;
  value: string;
  url: string;
  method: string;
  data: IApiData;
  res: IResponse;
}

export interface IResponse {
  time: number;
  size: string;
  response: AxiosResponse<any> | undefined;
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
  };
}

export const apiTabs: IApiTabs = {
  '1': {
    id: '1',
    title: 'Tab 1',
    value: 'tab1',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      queryParams: {
        '0': {
          key: 'param1',
          value: 'value1',
        },
        '1': {
          key: 'param2',
          value: 'value2',
        },
      },
      headers: {
        '0': {
          key: 'header1',
          value: 'value1',
        },
        '1': {
          key: 'header2',
          value: 'value2',
        },
      },
      body: 'Request body for Tab 1',
    },
    res: {
      time: 0,
      size: '',
      response: undefined,
      error: null,
    },
    method: 'GET',
  },
  '2': {
    id: '2',
    title: 'Tab 2',
    value: 'tab2',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      queryParams: {
        '0': {
          key: 'param3',
          value: 'value3',
        },
      },
      headers: {
        '0': {
          key: 'header3',
          value: 'value3',
        },
      },
      body: 'Request body for Tab 2',
    },
    res: {
      time: 0,
      size: '',
      response: undefined,
      error: null,
    },
    method: 'POST',
  },
  '3': {
    id: '3',
    title: 'Tab 3',
    value: 'tab3',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      queryParams: {},
      headers: {},
      body: 'Request body for Tab 3',
    },
    res: {
      time: 0,
      size: '',
      response: undefined,
      error: null,
    },
    method: 'PUT',
  },
};
