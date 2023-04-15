import React, { useCallback } from 'react';
// import styles from './FlexContainer.module.css';
import { FlexContainerProps } from './FlexContainerProps';
import { IFlexOptions } from '../../../Constant/Types';
import { flexOptions } from '../../../Constant/DropDown';
import { DropDown } from '../../DropDown';
import { Text } from '../../Text';

export const FlexContainer = ({
  setContainerStyle,
  containerStyle,
}: FlexContainerProps) => {
  const handleChange = useCallback(
    (type: string, val: string) => {
      setContainerStyle((p: any) => {
        return { ...p, [type]: val };
      });
    },
    [setContainerStyle]
  );
  return (
    <>
      <Text variant="h4"> container options</Text>
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
    </>
  );
};
