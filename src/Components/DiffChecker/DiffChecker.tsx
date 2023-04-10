import React, { useState } from 'react';
import styles from './DiffChecker.module.css';
import { DiffContainer } from '../DiffContainer';
import { MultiLineInput } from '../MultiLineInput';
import { Text } from '../Text';

export const DiffChecker = () => {
  const [original, setOriginal] = useState<string>('');
  const [changed, setChanged] = useState<string>('');
  return (
    <div className={styles.container}>
      <Text className={styles.text}> Diff Checker</Text>
      <div className={styles.inputs}>
        <MultiLineInput value={original} onChange={setOriginal} />
        <MultiLineInput value={changed} onChange={setChanged} />
      </div>
      <DiffContainer changed={changed} original={original} />
    </div>
  );
};
