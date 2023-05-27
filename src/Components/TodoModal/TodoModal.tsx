import React, { useContext, useMemo, useState } from 'react';
import styles from './TodoModal.module.css';
import { TodoModalProps } from './TodoModalProps';
import { TodoContext } from '../../Context/TodoContext/TodoContext';
import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import { MultiLineInput } from '../MultiLineInput';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export const TodoModal = ({ item, handleModal }: TodoModalProps) => {
  const { addTodo, dirs } = useContext(TodoContext);
  const [formValues, setFormValues] = useState({
    title: item.title || '',
    desc: item.desc || '',
    dir: item.dir || '',
    date: item.date ? dayjs(item.date) : null,
  });
  const { title, desc, dir, date } = formValues;
  const onChange = (val: any, key: string) => {
    setFormValues({ ...formValues, [key]: val });
  };
  const onclick = (e: any) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onclick}>
      <div className={styles.container}>
        <div className={styles.content}>
          <MultiLineInput
            value={title}
            required={true}
            maxRows={1}
            label="Title"
            onChange={(val) => onChange(val, 'title')}
            className={styles.titleInput}
          />
          <div className={styles.bottomContainer}>
            <InputLabel className={styles.label}>Task Date</InputLabel>
            <DatePicker
              value={date}
              onChange={(a) => onChange(a, 'date')}
              className={styles.datePicker}
            />
            <InputLabel className={styles.label}>Select Directory</InputLabel>
            <Select
              required={true}
              value={dir}
              onChange={(e) => {
                onChange(e.target.value, 'dir');
              }}
              className={styles.dropDown}
            >
              {dirs.map((item: string) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
          <MultiLineInput
            value={desc}
            minRows={3}
            label="Description"
            maxRows={8}
            onChange={(val) => onChange(val, 'desc')}
            className={styles.descInput}
          />
        </div>
        <Button type="submit" className={styles.button} variant="contained">
          save
        </Button>
      </div>
    </form>
  );
};
