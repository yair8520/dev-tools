import React, { useEffect, useState } from 'react';
import styles from './HistoryModal.module.css';
import { HistoryModalProps } from './HistoryModalProps';
import { Text } from '../Text';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { ButtonBase } from '@mui/material';

export const HistoryModal = ({ onClick, handleModal }: HistoryModalProps) => {
  const [searches, setSearches] = useLocalStorage<any>('searches', []);

  const onItemPressed = (e: any) => {
    onClick(e.target.innerText)
    handleModal()
  }
  return (
    <div className={styles.container}>
      <Text variant='h6'> Recent</Text>
      {searches.map((s: string, i: number) =>
        <ButtonBase key={i} onClick={onItemPressed} >
          <Text sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
          }}
            variant="body1"> {s.toString()}
          </Text>
        </ButtonBase>
      )}
    </div>
  );
};
