import React, { useState } from 'react';
import { FlexDemo } from '../../Components/FlexDemo';
import { FlexOptions } from '../../Components/FlexOptions';
import styles from './FlexPage.module.css';
import {
  IContainerStyle,
  InitialStyle,
  flexItems,
  flexItemsInitial,
} from './FlexPageProps';

export const FlexPage = () => {
  const [items, setItems] = useState<flexItems[]>(flexItemsInitial);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const [containerStyle, setContainerStyle] =
    useState<IContainerStyle>(InitialStyle);
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <FlexOptions
          items={items}
          setItems={setItems}
          selectedIndex={selectedIndex}
          containerStyle={containerStyle}
          setContainerStyle={setContainerStyle}
        />
      </div>
      <div style={containerStyle} className={styles.demo}>
        <FlexDemo
          items={items}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
};
