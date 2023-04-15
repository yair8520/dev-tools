import React, { useCallback } from 'react';
import styles from './FlexDemo.module.css';
import { FlexDemoProps } from './FlexDemoProps';
import { ItemsStyle } from '../../Pages/FlexPage/FlexPageProps';

export const FlexDemo = ({
  items,
  setSelectedIndex,
  selectedIndex,
}: FlexDemoProps) => {
  const onPress = useCallback(
    (index: number) => {
      setSelectedIndex(index);
    },
    [setSelectedIndex]
  );
  return (
    <>
      {items.map((a: ItemsStyle, index: number) => (
        <div
          key={`${a}${index}`}
          style={a}
          onClick={() => onPress(index)}
          className={`${styles.container} ${
            index === selectedIndex ? styles.selected : ''
          }`}
        >
          <p>{index + 1}</p>
        </div>
      ))}
    </>
  );
};
