import React, { ChangeEvent, useContext, useState } from 'react';
import styles from './JsonTree.module.css';
import { JsonTreeProps } from './JsonTreeProps';
import ReactJson from 'react-json-view';
import { editorOptions } from '../../Constant/CheckBox';
import { CheckBox } from '../CheckBox';
import { ICheckBox } from '../../Constant/Types';
import { AppContext } from '../../Context/ThemeContext/ThemeContext';
import { useMediaQuery } from '../../Hooks/useMediaQuery';
import { Slider } from '@mui/material';
import { Text } from '../Text';

export const JsonTree = ({ data, isSmallScreen }: JsonTreeProps) => {
  const { isDark } = useContext(AppContext);
  const [options, setOptions] = useState<ICheckBox[]>(editorOptions);
  const [space, setSpace] = useState<number>(isSmallScreen ? 4 : 10);
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
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <CheckBox
          style={styles.checkboxs}
          options={options}
          setOptions={handleChange}
        />
        <div className={styles.slider}>
          <Text>Space:</Text>
          <Slider
            onChange={(e: any) => setSpace(e.target.value)}
            min={0}
            max={15}
            value={space}
            valueLabelDisplay="auto"
            disableSwap
          />
        </div>
      </div>
      <ReactJson
        style={{
          width: '100%',
          backgroundColor: 'black',
        }}
        src={data}
        indentWidth={space}
        onEdit={() => { }}
        iconStyle={'circle'}
        theme={"chalk"}
        displayDataTypes={options[0].state}
        collapsed={options[1].state ? 2 : undefined}
        sortKeys={options[2].state}
        displayObjectSize={options[3].state}
      />
    </div>
  );
};
