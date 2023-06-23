import React from 'react';
import styles from './ResContainer.module.css';
import { ResContainerProps } from './ResContainerProps';

export const ResContainer = ({}: ResContainerProps) => {
  return (
    <div className={styles.container}>
      <h1>ResContainerPage component</h1>
    </div>
  );
};
