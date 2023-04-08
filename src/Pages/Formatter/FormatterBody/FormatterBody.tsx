import { Button } from '@mui/material';
import React, { useState } from 'react';
import { MultiLineInput } from '../../../Components';
import { DropZone } from '../../../Components/DropZone';
import { jsonExample } from '../../../Constant/DropDown';
import styles from './FormatterBody.module.css';
import { FormatterBodyProps } from './FormatterBodyProps';

export const FormatterBody = ({ setRes, setError }: FormatterBodyProps) => {
  const [raw, setRaw] = useState<string>('');
  const setExample = () => {
    setRaw(JSON.stringify(jsonExample));
  };
  const formatCode = () => {
    try {
      const parsedData = JSON.parse(raw);
      const formattedData = JSON.stringify(parsedData, null, 2);
      setRes(JSON.parse(formattedData));
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
        <DropZone onChange={setRaw} />
        <Button onClick={setExample}>Example Json</Button>
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
