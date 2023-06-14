import React, { useState } from 'react';
import styles from './NotesItem.module.css';
import { NotesItemProps } from './NotesItemProps';
import { Text } from '../../../Text';
import { Card } from '@mui/material';
import { CIconButton } from '../../../CIconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const NotesItem = ({
  item,
  deleteItem,
  updateNoteBlur,
}: NotesItemProps) => {
  const blurText = item.blurred ? styles.blurText : '';
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Card sx={{ boxShadow: 5 }} className={styles.container}>
        <div className={styles.removeItem}>
          <CIconButton
            placement="top"
            title={!item.blurred ? 'hide' : 'show'}
            onClick={(e: any) => {
              e.stopPropagation();
              updateNoteBlur();
            }}
          >
            {!item.blurred ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </CIconButton>
          <CIconButton
            placement="top"
            title={'Delete'}
            onClick={(e: any) => {
              e.stopPropagation();
              deleteItem();
            }}
          >
            <CancelIcon color="error" />
          </CIconButton>
        </div>
        <div className={`${styles.textContainer} ${blurText}`}>
          <Text variant="caption" className={styles.text}>
            {item.text}
          </Text>
        </div>
        <div className={styles.date}>
          <Text flexWrap={'wrap'} variant="caption">
            {item.date}
          </Text>
        </div>
      </Card>
    </div>
  );
};
