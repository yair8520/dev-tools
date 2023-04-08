import React from 'react';
import styles from './DiffChecker.module.css';
import { DiffCheckerProps } from './DiffCheckerProps';

export const DiffChecker = ({}: DiffCheckerProps) => {
  return (
    <div className={styles.container}>
      <h1>Diff Checker</h1>
    </div>
  );
};
