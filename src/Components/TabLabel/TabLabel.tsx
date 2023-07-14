import React from 'react';
import styles from './TabLabel.module.css';
import { TabLabelProps } from './TabLabelProps';
import { Text } from '../Text';

export const TabLabel = ({ title, active, numberOfItems }: TabLabelProps) => {
  return (
    <div className={styles.container}>
      <Text variant="inherit" className={styles.title}>
        {title}
      </Text>
      {active ? (
        <span className={styles.dot} />
      ) : numberOfItems ? (
        <Text variant="inherit" className={styles.tag}>
          {`(${numberOfItems})`}
        </Text>
      ) : null}
    </div>
  );
};
