import React, { useState } from 'react';
import styles from './ModifyModal.module.css';
import { ModifyModalProps } from './ModifyModalProps';
import { Button } from '@mui/material';
import { MultiLineInput } from '../MultiLineInput';
import { Text } from '../Text';

export const ModifyModal = ({
  handleModal,
  value = '',
  onNext,
  collections,
}: ModifyModalProps) => {
  const [text, setText] = useState<string>(value);
  const [error, setError] = useState<string>('');
  const onSave = () => {
    if (!text) {
      setError('Required Field');
      return;
    }
    for (const c of collections) {
      if (c.collection === text) {
        setError('Already exists');
        return;
      }
    }
    onNext(text);
    handleModal();
  };

  return (
    <div className={styles.container}>
      <Text className={styles.title} variant="h5">
        {value ? 'edit Collection name' : 'new Collection name'}
      </Text>
      <MultiLineInput
        className={styles.input}
        value={text}
        error={!!error}
        helperText={error}
        label={'Title'}
        onChange={setText}
      />
      <div className={styles.buttonContainer}>
        <Button onClick={onSave} variant="contained" className={styles.button}>
          save
        </Button>
      </div>
    </div>
  );
};
