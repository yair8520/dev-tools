import React, { useState } from 'react';
import styles from './ToDoPage.module.css';
import { ToDoPageProps, mockData } from './ToDoPageProps';
import { ToDoSections } from '../../Components/ToDoSections';
import { ToDoList } from '../../Components/ToDoList';
import { TodoItem } from './Todo';

export const ToDoPage = ({ }: ToDoPageProps) => {
  const [list, setList] = useState<TodoItem[]>(mockData);
  const [selectedDir, setSelectedDir] = useState<string>("");

  return (
    <div className={styles.container}>
      <ToDoSections selectedDir={selectedDir} setSelectedDir={setSelectedDir} list={list} />
      <ToDoList list={list} filter={selectedDir} />
    </div>
  );
};
