import { FormControl, Select, MenuItem } from '@mui/material';
import React from 'react';
import { Text } from '../Text';
import styles from './DropDown.module.css';
import { DropDownProps } from './DropDownProps';
import { HelpOutline } from '@material-ui/icons';
import { Description } from '../Description';
import { flexDescription } from '../../Constant/Description';

export const DropDown = ({
  value,
  handleChange,
  options,
  title,
}: DropDownProps) => {
  return (
    <FormControl fullWidth={true}>
      <div className={styles.header}>
        <Text bold>{title}</Text>
        <Description title={flexDescription[title as keyof object] ?? ''}>
          <HelpOutline />
        </Description>
      </div>
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
