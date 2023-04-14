import { FormControl, Select, MenuItem } from '@mui/material';
import React from 'react';
import { Text } from '../Text';
import styles from './DropDown.module.css';
import { DropDownProps } from './DropDownProps';

export const DropDown = ({
  value,
  handleChange,
  options,
  title,
}: DropDownProps) => {
  return (
    <FormControl fullWidth>
      <Text>{title}</Text>
      <Select
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        {options.map((item: string) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
