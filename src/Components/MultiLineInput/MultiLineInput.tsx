import React from 'react';
import styles from './MultiLineInput.module.css';
import { MultiLineInputProps } from './MultiLineInputProps';
import { TextField } from '@mui/material';

export const MultiLineInput = ({ value, onChange }: MultiLineInputProps) => {
  return (
    <TextField
      className={styles.container}
      onChange={onChange}
      value={value}
      label="Multiline Input"
      multiline
      rows={4}
      variant="outlined"
    />
  );
};
