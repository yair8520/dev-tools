import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

export const useAxios = (
) => {
  const [response, setResponse] = useState<AxiosResponse<any> | undefined>(undefined);
  const [error, setError] = useState<AxiosError<any> | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = (axiosParams: AxiosRequestConfig) => {
    setLoading(true);
    axios.request(axiosParams)
      .then((result) => {
        setResponse(result.data);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        setError(error);
        setLoading(false);
      });
  };

  return { response, error, loading, fetchData };
};
