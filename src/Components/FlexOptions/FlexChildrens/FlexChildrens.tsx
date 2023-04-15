import React, { useCallback } from 'react';
import styles from './FlexChildrens.module.css';
import { FlexChildrensProps } from './FlexChildrensProps';
import { Text } from '../../Text';
import { flexItemOptions } from '../../../Constant/DropDown';
import { DropDown } from '../../DropDown';
import { MultiLineInput } from '../../MultiLineInput';
import { flexItems } from '../../../Pages/FlexPage/FlexPageProps';

export const FlexChildrens = ({
  child,
  setItems,
  selectedIndex,
}: FlexChildrensProps) => {
  console.log('child', child.value);
  const handleInput = useCallback(
    (type: string, val: string) => {
      setItems((p: any) => {
        const newItems = [...p];
        newItems[selectedIndex].style[type as keyof flexItems] = val;
        return newItems;
      });
    },
    [setItems, selectedIndex]
  );

  return (
    <>
      <Text> {`childrens options (${selectedIndex + 1})`}</Text>
      {child &&
        flexItemOptions.map((item) =>
          item.range ? (
            <div key={`${item.type}-input `}>
              <Text>{item.type}</Text>
              <MultiLineInput
                onChange={(e) => handleInput(item.type, e)}
                value={child.style[item.type as keyof object]}
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
              value={child.style[item.type as keyof object]}
            />
          )
        )}
    </>
  );
};
