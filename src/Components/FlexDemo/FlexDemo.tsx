import React, { useCallback } from 'react';
import styles from './FlexDemo.module.css';
import { FlexDemoProps } from './FlexDemoProps';
import { flexItems } from '../../Pages/FlexPage/FlexPageProps';

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
      {items.map((a: flexItems, number) => (
        <div
          key={`${a}${number}`}
          style={a.style}
          onClick={() => onPress(number)}
          className={`${styles.container} ${
            number === selectedIndex ? styles.selected : ''
          }`}
        >
          <p>{a.value}</p>
        </div>
      ))}
    </>
  );
};
