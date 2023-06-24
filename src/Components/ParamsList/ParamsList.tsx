import React, { useContext } from 'react';
import styles from './ParamsList.module.css';
import { ParamsListProps } from './ParamsListProps';
import { MultiLineInput } from '../MultiLineInput';
import { CIconButton } from '../CIconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { TabsContext } from '../../Context/ApiContext/ApiContext';

export const ParamsList = ({ list, tabId, type }: ParamsListProps) => {
  const { addData, addSubTab, removeSubTab } = useContext(TabsContext);
  const handleChange = ({ itemId, key, value, tabId, type }: any) => {
    addData({ itemId, key, value, tabId, type });
  };
  console.log(Object.entries(list).length)
  return (
    <>
      {Object.entries(list).map(([k, v]) => (
        <div key={k} className={styles.container}>
          <MultiLineInput
            className={styles.input}
            value={v.key}
            label={'key'}
            onChange={(t) => {
              handleChange({ itemId: k, key: t, value: v.value, tabId, type });
            }}
          />
          <MultiLineInput
            className={styles.input}
            value={v.value}
            label={'value'}
            onChange={(text) =>
              handleChange({ itemId: k, key: v.key, value: text, tabId, type })
            }
          />
          <CIconButton
            onClick={() => removeSubTab({ tabId, type, itemId: k })}
            title={'Remove'}
            placement="right"
          >
            <RemoveCircleOutlineIcon />
          </CIconButton>
        </div>
      ))}
      <CIconButton
        onClick={() => {
          addSubTab({ tabId, type });
        }}
        title={'Add'}
      >
        <ControlPointIcon />
      </CIconButton>
    </>
  );
};
