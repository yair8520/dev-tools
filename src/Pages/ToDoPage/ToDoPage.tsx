import React, { useState } from 'react';
import styles from './ToDoPage.module.css';
import { ToDoPageProps, mockData } from './ToDoPageProps';
import { ToDoSections } from '../../Components/ToDoSections';
import { ToDoList } from '../../Components/ToDoList';
import { ITodoList } from './Todo';

export const ToDoPage = ({}: ToDoPageProps) => {
  const [list, setList] = useState<ITodoList>(mockData);
  return (
    <div className={styles.container}>
      <ToDoSections list={list}/>
      <ToDoList list={list} />
    </div>
  );
};
