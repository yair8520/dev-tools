import React from 'react';
import styles from './FlexItem.module.css';
import { FlexItemProps } from './FlexItemProps';

export const FlexItem = ({ val }: FlexItemProps) => {
  return (
    <div className={styles.container}>
      <p>{val}</p>
    </div>
  );
};
