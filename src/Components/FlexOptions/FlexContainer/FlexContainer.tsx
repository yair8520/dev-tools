import React, { useCallback } from 'react';
import styles from './FlexContainer.module.css';
import { FlexContainerProps } from './FlexContainerProps';
import { IFlexOptions } from '../../../Constant/Types';
import { flexOptions } from '../../../Constant/DropDown';
import { DropDown } from '../../DropDown';
import { Text } from '../../Text';
import { RemoveCircleOutline } from '@material-ui/icons';
import { InitialStyle } from '../../../Pages/FlexPage/FlexPageProps';
import { CIconButton } from '../../CIconButton';

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
    <div style={{ height: '100%' }}>
      <div className={styles.header}>
        <Text variant="h5"> Container options</Text>
        <CIconButton title={'Reset All'} onClick={reset}>
          <RemoveCircleOutline />
        </CIconButton>
      </div>
      <div style={{ height: '100%', justifyContent: 'space-around' ,display:'flex',flexDirection:'column' }}>
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
