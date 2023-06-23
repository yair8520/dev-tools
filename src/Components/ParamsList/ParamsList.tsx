import React, { useState } from 'react';
import styles from './ParamsList.module.css';
import { ParamsListProps } from './ParamsListProps';
import { IParams } from '../../Constant/Mock';
import { MultiLineInput } from '../MultiLineInput';
import { CIconButton } from '../CIconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const ParamsList = ({ list }: ParamsListProps) => {
  const [params, setParams] = useState<IParams>(list);

  const handleChange = (val: string) => {};
  return (
    <>
      {Object.entries(params).map(([k, v]) => (
        <div key={k} className={styles.container}>
          <MultiLineInput
            className={styles.input}
            value={v.key}
            label={'key'}
            onChange={(key) => handleChange(key)}
          />
          <MultiLineInput
            className={styles.input}
            value={v.value}
            label={'value'}
            onChange={(val) => handleChange(val)}
          />
          <CIconButton onClick={() => {}} title={'Remove'} placement="right">
            <RemoveCircleOutlineIcon />
          </CIconButton>
        </div>
      ))}
      <CIconButton onClick={() => {}} title={'Add'}>
        <ControlPointIcon />
      </CIconButton>
    </>
  );
};
