import React, { useContext, useMemo, useState } from 'react';
import styles from './TodoModal.module.css';
import { TodoModalProps } from './TodoModalProps';
import { TodoContext } from '../../Context/TodoContext/TodoContext';
import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import { MultiLineInput } from '../MultiLineInput';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export const TodoModal = ({ item, handleModal }: TodoModalProps) => {
  const { addTodo, dirs, selectedDir } = useContext(TodoContext);
  const [formValues, setFormValues] = useState({
    title: item?.title ?? '',
    desc: item?.desc ?? '',
    dir: item?.dir ?? selectedDir,
    date: item?.date ? item.date : dayjs().format('YYYY-MM-DD'),
  });
  const { title, desc, dir, date } = formValues;
  const onChange = (val: any, key: string) => {
    setFormValues({ ...formValues, [key]: val });
  };
  const onclick = (e: any) => {
    addTodo({ ...item, ...formValues });
    handleModal();
  };
  return (
    //onSubmit={onclick}
    <form>
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
              value={dayjs(date)}
              onChange={(a) => onChange(dayjs(a).format('YYYY-MM-DD'), 'date')}
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
        <Button onClick={onclick} className={styles.button} variant="contained">
          {item ? 'save' : 'Update'}
        </Button>
      </div>
    </form>
  );
};
