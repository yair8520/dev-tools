import { Button } from '@mui/material';
import React, { useState } from 'react';
import { MultiLineInput, Text } from '../../../Components';
import { DropDown } from '../../../Components/DropDown';
import { jsonExample, jsonSpace } from '../../../Constant/DropDown';
import styles from './FormatterBody.module.css';
import { FormatterBodyProps } from './FormatterBodyProps';

export const FormatterBody = ({ setRes, setError }: FormatterBodyProps) => {
  const [raw, setRaw] = useState<string>('');
  const [space, setSpace] = useState<number>(2);
  const setExample = () => {
    setRaw(JSON.stringify(jsonExample));
  };
  const formatCode = () => {
    try {
      const parsedData = JSON.parse(raw);
      const formattedData = JSON.stringify(parsedData, null, space);
      setRes(formattedData);
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div className={styles.inputs}>
      <div className={styles.info}>
        <Text>paste in your json data</Text>
        <Button onClick={setExample}>Example</Button>
      </div>
      <div className={styles.input}>
        <MultiLineInput onChange={setRaw} value={raw} />
      </div>
      <div className={styles.buttonContainer}>
        <DropDown
          title="JSON Template"
          options={jsonSpace}
          handleChange={setSpace}
          value={space}
        />
        <Button variant="contained" disabled={!raw} onClick={formatCode}>
          format
        </Button>
      </div>
    </div>
  );
};
