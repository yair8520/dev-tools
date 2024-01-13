/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@mui/material';
import React, { useContext, useState, useRef, useEffect } from 'react';
import { MultiLineInput } from '../../../Components';
import { DropZone } from '../../../Components/DropZone';
import { FetchModal } from '../../../Components/FetchModal';
import { ModalContext } from '../../../Components/ModalContext/ModalContext';
import { jsonExample } from '../../../Constant/DropDown';
import { prettifyJSON } from '../../../Helpers/Json';
import styles from './FormatterBody.module.css';
import { FormatterBodyProps, TSearch } from './FormatterBodyProps';
import { InputButtons } from '../../../Components/DiffChecker/InputButtons';
import { useLocalStorage } from '../../../Hooks/useLocalStorage';
import { getTime } from '../../../Helpers/Time';

export const FormatterBody = ({
  setRes,
  setError,
  error,
  raw,
  setRaw,
}: FormatterBodyProps) => {
  const [fileName, setFileName] = useState<string>('');
  const { handleModal } = useContext(ModalContext);
  const countRef = useRef<number>(0);
  const resetFields = () => {
    setRaw('');
    setFileName('');
    setError('');
    setRes({ json: false, res: '' });
  };
  const [searches, setSearches] = useLocalStorage<TSearch[]>('searches', []);

  useEffect(() => {
    const storedSearches = localStorage.getItem('searches');
    if (storedSearches) {
      try {
        const parsedSearches = JSON.parse(storedSearches);
        const typedSearches: TSearch[] = parsedSearches.map((item: any) =>
          typeof item === 'string' ? { text: item, date: getTime() } : item
        );
        setSearches(typedSearches);
      } catch (error) {
        console.error('Error parsing stored searches:', error);
      }
    }
  }, [setSearches]);

  const handleSaveSearch = (search: string) => {
    if (!searches.find((savedSearch) => savedSearch.text === search)) {
      const currentTime = getTime();
      const searchObject: TSearch = { text: search, date: currentTime };
      const updatedSearches = [searchObject, ...searches];
      setSearches(updatedSearches);
    }
  };

  const setExample = () => {
    setRaw(JSON.stringify(jsonExample));
  };
  const formatCode = () => {
    try {
      const formattedData = JSON.stringify(JSON.parse(raw), null, 5);
      setRes({ json: true, res: JSON.parse(formattedData) });
      setRaw(formattedData);
      setError('');
      handleSaveSearch(formattedData);
    } catch (error: any) {
      if (countRef.current === 0) {
        countRef.current++;
        setRaw(prettifyJSON(raw));
      }
      setError(error.message);
    }
  };
  return (
    <div className={styles.inputs}>
      <div className={styles.input}>
        <MultiLineInput
          minRows={25}
          placeholder={'{ Paste / Write Your json here... }'}
          id="resInput"
          onChange={setRaw}
          value={raw}
          helperText={error}
          error={!!error}
          InputProps={{
            endAdornment: (
              <InputButtons
                withFile={false}
                type={'Changed'}
                value={raw}
                onChange={setRaw}
              />
            ),
          }}
        />
      </div>
      <div className={styles.buttonContainer}>
        <DropZone
          setError={setError}
          fileName={fileName}
          setFileName={setFileName}
          onChange={setRaw}
        />
        <div className={styles.reset}>
          <Button
            style={{ width: '50%' }}
            color={'error'}
            onClick={resetFields}
          >
            Reset
          </Button>

          <Button style={{ width: '50%' }} onClick={setExample}>
            Example
          </Button>
          <Button
            style={{ width: '100%' }}
            onClick={() => handleModal(<FetchModal onChange={setRaw} />)}
          >
            Load From Url
          </Button>
          <div className={styles.checkBox}></div>
          <Button
            className={styles.button}
            variant="contained"
            disabled={!raw}
            onClick={formatCode}
          >
            format
          </Button>
        </div>
      </div>
    </div>
  );
};
