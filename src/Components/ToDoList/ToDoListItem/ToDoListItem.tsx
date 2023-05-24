import React from 'react';
import styles from './ToDoListItem.module.css';
import { ToDoListItemProps } from './ToDoListItemProps';
import { Card } from '@mui/material';

export const ToDoListItem = ({ item, onItemClick }: ToDoListItemProps) => {
  return (
    <Card sx={{ boxShadow: 5 }} className={styles.container} onClick={onItemClick}>

    </Card>
  );
};
