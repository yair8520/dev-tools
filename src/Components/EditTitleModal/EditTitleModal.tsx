import React, { useState } from 'react';
import styles from './EditTitleModal.module.css';
import { EditTitleModalProps } from './EditTitleModalProps';
import { Button } from '@mui/material';
import { MultiLineInput } from '../MultiLineInput';
import { Text } from '../Text';

export const EditTitleModal = ({
  oldTitle,
  onNext,
  handleModal,
}: EditTitleModalProps) => {
  const [title, setTitle] = useState<string>(oldTitle);

  return (
    <div className={styles.container}>
      <Text className={styles.title} variant="h5">
        Change Title
      </Text>
      <MultiLineInput
        className={styles.input}
        value={title}
        label={'Title'}
        onChange={setTitle}
      />
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => {
            handleModal()
            onNext(title);
          }}
          variant="contained"
          className={styles.button}
        >
          save
        </Button>
      </div>
    </div>
  );
};
