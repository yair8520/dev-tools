import { useState } from 'react';
import { isUrlValid } from '../../Helpers/Url';
import { FetchProps, FetchState } from './useFetchProps';

export const useFetch = (): FetchState => {
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = ({ url }: FetchProps): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!isUrlValid(url)) {
        setError('Invalid Url');
        return;
      }
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setLoading(false));
    });
  };

  return {
    error,
    isLoading,
    setError,
    fetchData,
  };
};
