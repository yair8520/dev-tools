import React, { useState } from 'react';
import styles from './FlexOptions.module.css';
import { FlexOptionsProps } from './FlexOptionsProps';
import { FlexContainer } from './FlexContainer';
import { FlexChildrens } from './FlexChildrens';
import { SplitButton } from '../SplitButton';

export const FlexOptions = ({
  containerStyle,
  setContainerStyle,
  setItems,
  selectedIndex,
  items,
}: FlexOptionsProps) => {
  const [side, setSide] = useState(true);

  return (
    <div className={styles.container}>
      <SplitButton side={side} setSide={setSide} />
      {side ? (
        <div className={styles.flexContainer}>
          <FlexContainer
            setContainerStyle={setContainerStyle}
            containerStyle={containerStyle}
          />
        </div>
      ) : (
        <div className={styles.flexChildrens}>
          <FlexChildrens
            setItems={setItems}
            child={items[selectedIndex]}
            selectedIndex={selectedIndex}
          />
        </div>
      )}
    </div>
  );
};
