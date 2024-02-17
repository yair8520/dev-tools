import { TextField } from '@mui/material';
import React from 'react';
import styles from './MultiLineInput.module.css';
import { MultiLineInputProps } from './MultiLineInputProps';

export const MultiLineInput = ({
  value,
  onChange,
  ...rest
}: MultiLineInputProps) => {
  return (
    <TextField
      multiline
      maxRows={20}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.text}
      style={{ backgroundColor: '#2f2f2f' }}
      {...rest}
    />
  );
};
