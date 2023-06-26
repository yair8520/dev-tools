import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { errorMessages } from '../../Constant/Errors';

export const useAxios = () => {
  const [loading, setLoading] = useState(true);
  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const millisecondsRemainder = Math.floor(milliseconds % 1000);
    return `${seconds}.${millisecondsRemainder}ms`;
  };
  const calculateSize = (data: any) => {
    const encoder = new TextEncoder();
    const text = JSON.stringify(data);
    const encodedData = encoder.encode(text);
    return parseFloat((encodedData.length / 1024).toFixed(4));
  };
  const fetchData = (
    axiosParams: AxiosRequestConfig
  ): Promise<{
    response?: AxiosResponse<any>;
    error?: AxiosError<any>;
    size?: number;
    time: string;
  }> => {
    const start = performance.now();
    setLoading(true);
    return new Promise((res, rej) => {
      axios
        .request(axiosParams)
        .then((response) => {
          res({
            response,
            size: calculateSize(response.data),
            time: formatTime(performance.now() - start),
          });
        })
        .catch((error: AxiosError) => {
          const errorMessage =
            errorMessages[error.code as keyof object] ||
            error.message ||
            'An error occurred';
          rej({
            ...error,
            size: calculateSize(error.response),
            time: formatTime(performance.now() - start),
            errorMessage,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  return { loading, fetchData };
};
