import React from 'react';
import styles from './ConfirmModal.module.css';
import { ConfirmModalProps } from './ConfirmModalProps';
import { Text } from '../Text';
import { Button } from '@mui/material';

export const ConfirmModal = ({
  title,
  handleModal,
  onNext,
}: ConfirmModalProps) => {
  const handlerWrapper = (cb?: Function) => {
    cb?.();
    handleModal();
  };
  return (
    <div className={styles.container}>
      <Text> {title}</Text>
      <div className={styles.buttons}>
        <Button onClick={() => handlerWrapper()}>Cancel</Button>
        <Button onClick={() => handlerWrapper(onNext)}>Yes!</Button>
      </div>
    </div>
  );
};
