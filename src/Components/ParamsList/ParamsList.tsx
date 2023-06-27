import React, { useContext } from 'react';
import styles from './ParamsList.module.css';
import { ParamsListProps } from './ParamsListProps';
import { MultiLineInput } from '../MultiLineInput';
import { CIconButton } from '../CIconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { TabsContext } from '../../Context/ApiContext/ApiContext';
import { Checkbox, FormControlLabel } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export const ParamsList = ({ list, tabId, type }: ParamsListProps) => {
  const { addData, addSubTab, removeSubTab, toggleQuary } =
    useContext(TabsContext);
  const handleChange = ({ itemId, key, value, tabId, type }: any) => {
    addData({ itemId, key, value, tabId, type });
  };
  return (
    <>
      {Object.entries(list).map(([k, v]) => (
        <div key={k} className={styles.container}>
          <FormControlLabel
            control={
              <Checkbox
                checked={v.checked ?? false}
                checkedIcon={<RadioButtonCheckedIcon />}
                icon={<RadioButtonUncheckedIcon />}
                onChange={() => {
                  toggleQuary({
                    itemId: k,
                    key: 'checked',
                    value: !v.checked,
                    tabId,
                    type,
                  });
                }}
              />
            }
            label={v.checked ? 'active' : 'inactive'}
            labelPlacement="start"
          />

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
