import { Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import { MultiLineInput } from '../../../Components';
import { DropZone } from '../../../Components/DropZone';
import { FetchModal } from '../../../Components/FetchModal';
import { ModalContext } from '../../../Components/ModalContext/ModalContext';
import { jsonExample } from '../../../Constant/DropDown';
import styles from './FormatterBody.module.css';
import { FormatterBodyProps } from './FormatterBodyProps';

export const FormatterBody = ({ setRes, setError }: FormatterBodyProps) => {
  const [raw, setRaw] = useState<string>(JSON.stringify(jsonExample));
  const [fileName, setFileName] = useState<string>('');
  const { handleModal } = useContext(ModalContext);
  const resetFields = () => {
    setRaw('');
    setFileName('');
    setError('');
    setRes('');
  };
  const setExample = () => {
    setRaw(JSON.stringify(jsonExample));
  };
  const formatCode = () => {
    try {
      const formattedData = JSON.stringify(JSON.parse(raw), null, 5);
      setRes(JSON.parse(formattedData));
      setRaw(formattedData);
      setError('');
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div className={styles.inputs}>
      <div className={styles.input}>
        <MultiLineInput
          minRows={15}
          placeholder={'{ Paste / Write Your json here... }'}
          id="resInput"
          onChange={setRaw}
          value={raw}
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
