import React, { useCallback } from 'react';
import styles from './FlexContainer.module.css';
import { FlexContainerProps } from './FlexContainerProps';
import { IFlexOptions } from '../../../Constant/Types';
import { flexOptions } from '../../../Constant/DropDown';
import { DropDown } from '../../DropDown';
import { Text } from '../../Text';
import { RemoveCircleOutline } from '@material-ui/icons';
import { IconButton } from '@mui/material';
import { InitialStyle } from '../../../Pages/FlexPage/FlexPageProps';

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
  const reset = () =>
    setContainerStyle((p: any) => {
      return { ...InitialStyle };
    });
  return (
    <>
      <div className={styles.header}>
        <Text variant="h5"> Container options</Text>
        <IconButton onClick={reset}>
          <RemoveCircleOutline />
        </IconButton>
      </div>
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
