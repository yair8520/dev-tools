import { AxiosError, AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';

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
    checked: boolean
  };
}
export const getDefaultTab = (): ITab => {
  const id = uuidv4()
  return {
    id: id,
    title: 'New Tab',
    value: id,
    url: '',
    method: 'GET',
    data: {
      queryParams: {},
      headers: {},
      body: '',
    },
    res: {
      time: 0,
      size: '',
      response: undefined,
      error: null,
      errorMessage: null,
    },
  };


};

export const apiTabs: IApiTabs = {
  '1': {
    id: '1',
    title: 'Tab 1',
    value: '1',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      queryParams: {
        '0': {
          key: '',
          value: '',
          checked: false
        },

      },
      headers: {
        '0': {
          key: 'Content-Type',
          value: 'application/json',
          checked: true
        },
      },
      body:
        `{
  
}`,
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
    value: '2',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      queryParams: {
        '0': {
          key: '',
          value: '',
          checked: false

        },
      },
      headers: {
        '0': {
          key: 'Content-Type',
          value: 'application/json',
          checked: true
        },
      },
      body:
        `{
  
}`,
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
    value: '3',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      queryParams: {},
      headers: {
        '0': {
          key: 'Content-Type',
          value: 'application/json',
          checked: true
        },
      },
      body:
        `{

}`,
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
