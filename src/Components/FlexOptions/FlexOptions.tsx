import React, { useState } from 'react';
import styles from './FlexOptions.module.css';
import { FlexOptionsProps } from './FlexOptionsProps';
import { FlexContainer } from './FlexContainer';
import { FlexChildrens } from './FlexChildrens';

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <button
          className={`${styles.button} ${side ? styles.buttonOne : ''}`}
          disabled={side}
          onClick={() => setSide(true)}
        >
          Container
        </button>
        <button
          className={`${styles.button} ${!side ? styles.buttonTwo : ''}`}
          disabled={!side}
          onClick={() => setSide(false)}
        >
          Children
        </button>
      </div>
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
