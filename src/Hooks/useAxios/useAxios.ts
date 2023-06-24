import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

export const useAxios = (
) => {
  const [response, setResponse] = useState<AxiosResponse<any> | undefined>(undefined);
  const [error, setError] = useState<AxiosError<any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [size, setSize] = useState<number | undefined>(0);

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const millisecondsRemainder = Math.floor(milliseconds % 1000);
    setTime(`${seconds}.${millisecondsRemainder}ms`);
  };
  const calculateSize = (data: any) => {
    const encoder = new TextEncoder();
    const text = JSON.stringify(data);
    const encodedData = encoder.encode(text);
    setSize(parseFloat((encodedData.length / 1024).toFixed(4)))
  };
  const fetchData = (axiosParams: AxiosRequestConfig) => {
    const start = performance.now();
    let end;
    setLoading(true);
    axios.request(axiosParams)
      .then((result) => {
        calculateSize(result.data)
        setResponse(result);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        console.log("catch", error)
        setError(error);
        setLoading(false);
      }).finally(() => {
        end = performance.now();
        formatTime(end - start);

      })
  };

  return { response, error, loading, fetchData, time, size };
};
