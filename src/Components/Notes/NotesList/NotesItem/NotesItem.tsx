import React from 'react';
import styles from './NotesItem.module.css';
import { NotesItemProps } from './NotesItemProps';
import { Text } from '../../../Text';
import { Card } from '@mui/material';
import { CIconButton } from '../../../CIconButton';
import CancelIcon from '@mui/icons-material/Cancel';

export const NotesItem = ({ item, deleteItem }: NotesItemProps) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Card sx={{ boxShadow: 5 }} className={styles.container}>
        <div className={styles.removeItem}>
          <CIconButton
            placement="top"
            title={'Delete'}
            onClick={(e: any) => {
              e.stopPropagation()
              deleteItem()
            }}
          >
            <CancelIcon color="error" />
          </CIconButton>
        </div>
        <Text className={styles.text}>{item.text}</Text>
      </Card>
    </div>
  );
};
