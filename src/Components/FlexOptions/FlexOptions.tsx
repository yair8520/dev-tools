import React, { useCallback } from 'react';
import styles from './FlexOptions.module.css';
import { FlexOptionsProps } from './FlexOptionsProps';
import { DropDown } from '../DropDown';
import { flexOptions } from '../../Constant/DropDown';
import { IFlexOptions } from '../../Constant/Types';

export const FlexOptions = ({
  containerStyle,
  setContainerStyle,
}: FlexOptionsProps) => {
  const handleChange = useCallback(
    (type: string, val: string) => {
      setContainerStyle((p: any) => {
        return { ...p, [type]: val };
      });
    },
    [setContainerStyle]
  );
  return (
    <div className={styles.container}>
      <h1>FlexOptionsPage component</h1>
      <div className={styles.flexContainer}>
        {flexOptions.map((option: IFlexOptions, i) => {
          return (
            <DropDown
              key={option.type}
              handleChange={(e: string) => handleChange(option.type, e)}
              value={containerStyle?.[option.type! as keyof object] ?? 0}
              options={option.options}
              title={option.type}
            />
          );
        })}
      </div>
    </div>
  );
};
