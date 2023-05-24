import React from 'react';
import styles from './ToDoList.module.css';
import { ToDoListProps } from './ToDoListProps';

export const ToDoList = ({ list }: ToDoListProps) => {
  return (
    <div className={styles.container}>
      <h1>ToDoListPage component</h1>
    </div>
  );
};
