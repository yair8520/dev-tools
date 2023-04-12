import React, { useState } from 'react';
import styles from './DiffChecker.module.css';
import { DiffContainer } from '../DiffContainer';
import { MultiLineInput } from '../MultiLineInput';
import { Text } from '../Text';
import { InputButtons } from './InputButtons';

export const DiffChecker = () => {
  const [original, setOriginal] = useState<string>('');
  const [changed, setChanged] = useState<string>('');
  return (
    <div className={styles.container}>
      <Text variant="h4" className={styles.text}>
        Diff Checker
      </Text>
      <div className={styles.inputs}>
        <MultiLineInput
          className={styles.input}
          minRows={15}
          maxRows={20}
          placeholder={'Original'}
          value={original}
          onChange={setOriginal}
          InputProps={{
            endAdornment: (
              <InputButtons
                type={'Original'}
                value={original}
                onChange={setOriginal}
              />
            ),
          }}
        />
        <MultiLineInput
          className={styles.input}
          minRows={15}
          maxRows={20}
          placeholder={'Changed'}
          value={changed}
          onChange={setChanged}
          InputProps={{
            endAdornment: (
              <InputButtons
                type={'Changed'}
                value={changed}
                onChange={setChanged}
              />
            ),
          }}
        />
      </div>
      <DiffContainer original={original} changed={changed} />
    </div>
  );
};
