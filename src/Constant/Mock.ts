export interface IApiTabs {
  [key: string]: ITab;
}

export interface ITab {
  title: string;
  value: string;
  url: string;
  data: IApiData;
  method: string;
}
export interface IParams {
  [key: string]: {
    key: string;
    value: string;
  }
}

export interface IApiData {
  queryParams: IParams;
  headers: IParams;
  body: string
}

export const apiTabs: IApiTabs = {
  tab1: {
    title: "Tab 1",
    value: "tab1",
    url: "https://example.com/api/tab1",
    data: {
      queryParams: {
        param1: {
          key: "param1",
          value: "value1"
        },
        param2: {
          key: "param2",
          value: "value2"
        }
      },
      headers: {
        header1: {
          key: "header1",
          value: "value1"
        },
        header2: {
          key: "header2",
          value: "value2"
        }
      },
      body: "Request body for Tab 1"
    },
    method: "GET"
  },
  tab2: {
    title: "Tab 2",
    value: "tab2",
    url: "https://example.com/api/tab2",
    data: {
      queryParams: {
        param3: {
          key: "param3",
          value: "value3"
        }
      },
      headers: {
        header3: {
          key: "header3",
          value: "value3"
        }
      },
      body: "Request body for Tab 2"
    },
    method: "POST"
  },
  tab3: {
    title: "Tab 3",
    value: "tab3",
    url: "https://example.com/api/tab3",
    data: {
      queryParams: {},
      headers: {},
      body: "Request body for Tab 3"
    },
    method: "PUT"
  }
};
