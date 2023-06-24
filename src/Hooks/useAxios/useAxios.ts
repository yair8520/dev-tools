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
    let end;
    setLoading(true);
    return new Promise((res, rej) => {
      axios
        .request(axiosParams)
        .then((response) => {
          end = performance.now();
          res({
            response,
            size: calculateSize(response.data),
            time: formatTime(end - start),
          });
        })
        .catch((error: AxiosError) => {
          end = performance.now();
          const errorMessage = errorMessages[error.code as keyof object] || error.message || 'An error occurred';
          rej({ error, time: formatTime(end - start), errorMessage });
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  return { loading, fetchData };
};
