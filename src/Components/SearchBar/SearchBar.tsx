import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { SearchBarProps } from './SearchBarProps';
import { MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({
  value,
  onChange,
  options,
  filterSections,
  filterByTime,
}: SearchBarProps) => {
  const [filter, setFilter] = useState<string>('All');
  const [dir, setDir] = useState<string>('Descending');
  return (
    <div className={styles.container}>
      <TextField
        className={styles.textField}
        label="Search"
        variant="outlined"
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
      <div className={styles.dropDownContainer}>
        <Select
          className={styles.dropDown}
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            filterSections(e.target.value);
          }}
        >
          {['All', ...options].map((item: string, i: number) => (
            <MenuItem key={item + i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <Select
          className={styles.dropDown}
          value={dir}
          onChange={(e) => {
            setDir(e.target.value);
            filterByTime(e.target.value);
          }}
        >
          {['Descending', 'Ascending'].map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
