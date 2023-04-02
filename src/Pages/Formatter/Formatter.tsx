import React from 'react';
import { MultiLineInput } from '../../Components/MultiLineInput';
import styles from './Formatter.module.css';
import { FormatterProps } from './FormatterProps';

export const Formatter = ({}: FormatterProps) => {
  return (
    <div className={styles.container}>
      <h1>FormatterPage component</h1>
      <div>
        <MultiLineInput />
        <MultiLineInput />
      </div>
    </div>
  );
};
