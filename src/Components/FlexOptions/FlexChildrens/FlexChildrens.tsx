import React, { useCallback } from 'react';
import styles from './FlexChildrens.module.css';
import { FlexChildrensProps } from './FlexChildrensProps';
import { Text } from '../../Text';
import { flexItemOptions } from '../../../Constant/DropDown';
import { DropDown } from '../../DropDown';
import { MultiLineInput } from '../../MultiLineInput';
import {
  ItemsStyle,
  itemsInitialStyle,
} from '../../../Pages/FlexPage/FlexPageProps';
import {
  AddCircleOutline,
  HelpOutline,
  RemoveCircleOutline,
} from '@material-ui/icons';
import { flexItemsInitial } from '../../../Pages/FlexPage/FlexPageProps';
import { Description } from '../../Description';
import { flexDescription } from '../../../Constant/Description';
import { CIconButton } from '../../CIconButton';

export const FlexChildrens = ({
  child,
  setItems,
  selectedIndex,
}: FlexChildrensProps) => {
  const handleInput = useCallback(
    (type: string, val: string) => {
      setItems((p: ItemsStyle[]) => {
        const newItems = [...p];
        newItems[selectedIndex] = {
          ...newItems[selectedIndex],
          [type]: val,
        };
        return newItems;
      });
    },
    [setItems, selectedIndex]
  );
  const addCell = () => {
    setItems((prevItems: ItemsStyle[]) => [
      ...prevItems,
      { ...itemsInitialStyle },
    ]);
  };
  const reset = () => {
    setItems(() => [...flexItemsInitial]);
  };
  return (
    <>
      <div className={styles.header}>
        <Text variant="h5"> {`Childrens options `} </Text>
        <div>
          <CIconButton title={'Reset All'} onClick={reset}>
            <RemoveCircleOutline />
          </CIconButton>
          <CIconButton title={'Add One'} onClick={addCell}>
            <AddCircleOutline />
          </CIconButton>
        </div>
      </div>
      <Text bold variant="h6">
        {`Selected Item { ${selectedIndex + 1} }`}
      </Text>
      {child &&
        flexItemOptions.map((item) =>
          item.range ? (
            <div key={`${item.type}-input `}>
              <div className={styles.item}>
                <Text bold>{item.type}</Text>
                <Description title={flexDescription[item.type as keyof object]}>
                  <HelpOutline />
                </Description>
              </div>
              <MultiLineInput
                onChange={(e) => handleInput(item.type, e)}
                value={child[item.type as keyof object]}
                className={styles.input}
                multiline={false}
                type="number"
                inputProps={{ min: -10, max: 10, step: 1 }}
              />
            </div>
          ) : (
            <DropDown
              key={`${item.type}-drop`}
              handleChange={(e: string) => handleInput(item.type, e)}
              options={item.options}
              title={item.type}
              value={child[item.type as keyof object]}
            />
          )
        )}
    </>
  );
};
