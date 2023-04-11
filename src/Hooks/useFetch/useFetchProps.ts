export type FetchState = {
  error: string;
  isLoading: boolean;
  fetchData: ({ url }: FetchProps) => Promise<any>;
};

export type FetchProps = {
  url: string;
};
