import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { SearchBarProps } from './SearchBarProps';
import { MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export const SearchBar = ({
  value,
  onChange,
  options,
  filterByTimeAndSection,
}: SearchBarProps) => {
  const [filter, setFilter] = useState<string>('All');
  const [dir, setDir] = useState<string>('Descending');
  return (
    <div className={styles.container}>
      <TextField
        className={styles.textField}
        label="Search"
        variant="outlined"
        fullWidth={true}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: value && (
            <div onClick={() => onChange('')}>
              {' '}
              <ClearIcon />
            </div>
          ),
        }}
      />
      <div className={styles.dropDownContainer}>
        <Select
          className={styles.dropDown}
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            filterByTimeAndSection(dir, e.target.value);
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
            filterByTimeAndSection(e.target.value, filter);
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
