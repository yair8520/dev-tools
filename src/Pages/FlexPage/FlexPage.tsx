import React, { useContext, useState } from 'react';
import { FlexDemo } from '../../Components/FlexDemo';
import { FlexOptions } from '../../Components/FlexOptions';
import styles from './FlexPage.module.css';
import {
  IContainerStyle,
  InitialStyle,
  ItemsStyle,
  flexItemsInitial,
} from './FlexPageProps';
import { Mutable } from '../../Constant/DropDown';
import { Layout } from '../../Components';
import { AppContext } from '../../Components/ThemeContext/ThemeContext';

export const FlexPage = () => {
  const { isDark } = useContext(AppContext);
  const [items, setItems] = useState<Mutable<ItemsStyle>[]>(flexItemsInitial);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [containerStyle, setContainerStyle] =
    useState<Mutable<IContainerStyle>>(InitialStyle);
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
      <div
        style={{
          ...containerStyle,
          backgroundColor: !isDark ? '#f3f4f6' : '#a6a8ad',
        }}
        className={styles.demo}
      >
        <FlexDemo
          items={items}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
};
