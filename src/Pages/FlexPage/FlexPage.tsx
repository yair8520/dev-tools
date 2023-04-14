import React, { useState } from 'react';
import { FlexDemo } from '../../Components/FlexDemo';
import { FlexOptions } from '../../Components/FlexOptions';
import styles from './FlexPage.module.css';
import { IContainerStyle, InitialStyle } from './FlexPageProps';

export const FlexPage = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const [containerStyle, setContainerStyle] =
    useState<IContainerStyle>(InitialStyle);
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <FlexOptions
          containerStyle={containerStyle}
          setContainerStyle={setContainerStyle}
        />
      </div>
      <div style={containerStyle} className={styles.demo}>
        <FlexDemo items={items} />
      </div>
    </div>
  );
};
