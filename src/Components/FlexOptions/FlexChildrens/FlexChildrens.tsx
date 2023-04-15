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
import { IconButton } from '@mui/material';
import { flexItemsInitial } from '../../../Pages/FlexPage/FlexPageProps';
import { Description } from '../../Description';
import { flexDescription } from '../../../Constant/Description';

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
          <IconButton onClick={reset}>
            <RemoveCircleOutline />
          </IconButton>
          <IconButton onClick={addCell}>
            <AddCircleOutline />
          </IconButton>
        </div>
      </div>
      <Text bold> {`Item ${selectedIndex + 1}`} </Text>
      {child &&
        flexItemOptions.map((item) =>
          item.range ? (
            <div key={`${item.type}-input `}>
              <div className={styles.header}>
                <Text>{item.type}</Text>
                <Description text={flexDescription[item.type as keyof object]}>
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
