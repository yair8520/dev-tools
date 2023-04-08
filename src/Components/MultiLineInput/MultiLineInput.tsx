import React from 'react';
import styles from './MultiLineInput.module.css';
import { MultiLineInputProps } from './MultiLineInputProps';

export const MultiLineInput = ({
  value,
  onChange,
  ...rest
}: MultiLineInputProps) => {
  return (
    <textarea
      {...rest}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.text}
    />
  );
};
