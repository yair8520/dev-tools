import React from 'react';
import styles from './ToDoListItem.module.css';
import { ToDoListItemProps } from './ToDoListItemProps';

export const ToDoListItem = ({}: ToDoListItemProps) => {
  return (
    <div className={styles.container}>
      <h1>ToDoListItemPage component</h1>
    </div>
  );
};
