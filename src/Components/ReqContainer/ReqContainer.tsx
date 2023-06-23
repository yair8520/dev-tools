import React, { useState } from 'react';
import styles from './ReqContainer.module.css';
import { ReqContainerProps } from './ReqContainerProps';
import { MultiLineInput } from '../MultiLineInput';
import { Button, MenuItem, Select } from '@mui/material';
import { methods } from '../../Constant/DropDown';
import { ParamsContainer } from '../ParamsContainer';

export const ReqContainer = ({ item }: ReqContainerProps) => {
  const [url, setUrl] = useState<string>(item.url);
  const [method, setMethod] = useState<string>(item.method);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Select
          value={method}
          onChange={(e) => {
            setMethod(e.target.value);
          }}
        >
          {methods.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <MultiLineInput
          className={styles.input}
          value={url}
          label={'url'}
          onChange={setUrl}
        />
        <Button>Send</Button>
      </div>
      <ParamsContainer data={item.data} />
    </div>
  );
};
