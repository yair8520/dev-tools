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
import { AppContext } from '../../Context/ThemeContext/ThemeContext';
import { Axis } from '../../Components/Axis';

const FlexPage = () => {
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
          backgroundColor: !isDark ? '#f3f4f6' : '#333',
        }}
        className={styles.demo}
      >
        <Axis dir={containerStyle.flexDirection} />
        <FlexDemo
          items={items}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
};
export default FlexPage;
