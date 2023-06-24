import React, { useContext } from 'react';
import styles from './ReqContainer.module.css';
import { ReqContainerProps } from './ReqContainerProps';
import { MultiLineInput } from '../MultiLineInput';
import { MenuItem, Select } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { methods } from '../../Constant/DropDown';
import { ParamsContainer } from '../ParamsContainer';
import { TabsContext } from '../../Context/ApiContext/ApiContext';

export const ReqContainer = ({ item }: ReqContainerProps) => {
  const { sendReq, addTabData } = useContext(TabsContext);
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Select
          value={item.method}
          onChange={(e) => {
            addTabData({
              tabId: item.id,
              type: 'method',
              value: e.target.value,
            });
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
          value={item.url}
          label={'url'}
          onChange={(url) =>
            addTabData({ tabId: item.id, type: 'url', value: url })
          }
        />
        <LoadingButton
          loading={false}
          onClick={() => sendReq({ tabId: item.id })}
        >
          Send
        </LoadingButton>
      </div>
      <ParamsContainer id={item.id} data={item.data} />
    </div>
  );
};
