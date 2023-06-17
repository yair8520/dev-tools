import React, { useContext, useState } from 'react';
import styles from './DirModal.module.css';
import { DirModalProps } from './DirModalProps';
import { Text } from '../Text';
import { MultiLineInput } from '../MultiLineInput';
import { Button } from '@mui/material';
import { TodoContext } from '../../Context/TodoContext/TodoContext';

export const DirModal = ({ handleModal }: DirModalProps) => {
  const { setDirs, dirs, setSelectedDir } = useContext(TodoContext);
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onSave = () => {
    if (!title) return setError('Required Field');
    if (dirs.includes(title)) return setError('Already exists');
    setDirs((p: string[]) => [...p, title]);
    setSelectedDir(title);
    handleModal();
  };
  return (
    <div className={styles.container}>
      <Text className={styles.title} variant="h5">
        Add Directory
      </Text>
      <MultiLineInput
        className={styles.input}
        value={title}
        error={!!error}
        helperText={error}
        label={'Title'}
        onChange={setTitle}
      />
      <div className={styles.buttonContainer}>
        <Button onClick={onSave} variant="contained" className={styles.button}>
          save
        </Button>
      </div>
    </div>
  );
};
