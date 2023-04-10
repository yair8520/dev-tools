import { Button } from '@mui/material';
import React, { useState } from 'react';
import { MultiLineInput } from '../../../Components';
import { DropZone } from '../../../Components/DropZone';
import { jsonExample } from '../../../Constant/DropDown';
import styles from './FormatterBody.module.css';
import { FormatterBodyProps } from './FormatterBodyProps';

export const FormatterBody = ({ setRes, setError }: FormatterBodyProps) => {
  const [raw, setRaw] = useState<string>(JSON.stringify(jsonExample));
  const [fileName, setFileName] = useState<string>('');
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
        <MultiLineInput id="resInput" onChange={setRaw} value={raw} />
      </div>
      <div className={styles.buttonContainer}>
        <DropZone
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
        </div>
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
  );
};
