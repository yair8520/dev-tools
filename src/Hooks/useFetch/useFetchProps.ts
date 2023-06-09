export type FetchState = {
  error: string;
  isLoading: boolean;
  fetchData: ({ url }: FetchProps) => Promise<any>;
  setError: (str: '') => void;
};

export type FetchProps = {
  url: string;
};
