import React, { useState } from 'react';
import styles from './JsonTree.module.css';
import { JsonTreeProps } from './JsonTreeProps';
import ReactJson from 'react-json-view';
import { editorOptions } from '../../Constant/CheckBox';
import { CheckBox } from '../CheckBox';
import { ICheckBox } from '../../Constant/Types';

export const JsonTree = ({ data }: JsonTreeProps) => {
  const [options, setOptions] = useState<ICheckBox[]>(editorOptions);
  const handleChange = (id: number) => {
    const changedIndex: number = options.find((i) => i.id === id)?.id! - 1;
    const modifiedArray = [...options];
    modifiedArray[changedIndex] = {
      ...modifiedArray[changedIndex],
      state: !modifiedArray[changedIndex].state,
    };
    setOptions(modifiedArray);
  };
  return (
    <div className={styles.container}>
      <CheckBox
        style={styles.checkboxs}
        options={options}
        setOptions={handleChange}
      />
      <ReactJson
        style={{ width: '100%' }}
        src={data}
        theme={options[0].state ? 'chalk' : undefined}
        displayDataTypes={options[1].state}
        collapsed={options[2].state ? 2 : undefined}
        sortKeys={options[3].state}
        displayObjectSize={options[4].state}
      />
    </div>
  );
};
