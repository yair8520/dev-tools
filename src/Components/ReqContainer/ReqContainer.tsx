import React, { useContext } from 'react';
import styles from './ReqContainer.module.css';
import { ReqContainerProps } from './ReqContainerProps';
import { MultiLineInput } from '../MultiLineInput';
import { MenuItem, Select } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { methods } from '../../Constant/DropDown';
import { ParamsContainer } from '../ParamsContainer';
import { TabsContext } from '../../Context/ApiContext/ApiContext';
import { CIconButton } from '../CIconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ConfirmModal } from '../ConfirmModal';
import { ModalContext } from '../ModalContext/ModalContext';
import { Text } from '../Text';
export const ReqContainer = ({ item }: ReqContainerProps) => {
  const { sendReq, addTabData, loading, removeTab } = useContext(TabsContext);
  const { handleModal } = useContext(ModalContext);
  const deleteTab = () => {
    handleModal(
      <ConfirmModal title="Sure?" onNext={() => removeTab({ id: item.id })} />
    );
  };
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
              <Text className={`${styles[item]}`}> {item}</Text>
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
          loading={loading}
          disabled={!item.url}
          onClick={() => sendReq({ tabId: item.id })}
        >
          Send
        </LoadingButton>
        <CIconButton title={'Delete this Tab'} onClick={() => deleteTab()}>
          <DeleteIcon htmlColor="red" />
        </CIconButton>
      </div>
      <ParamsContainer id={item.id} data={item.data} />
    </div>
  );
};
