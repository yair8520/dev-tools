import React, { useCallback, useContext, useMemo, useState } from 'react';
import styles from './ToDoList.module.css';
import { ToDoListProps } from './ToDoListProps';
import { ToDoListItem } from './ToDoListItem';
import { TodoContext } from '../../Context/TodoContext/TodoContext';
import { ModalContext } from '../ModalContext/ModalContext';
import { TodoModal } from '../TodoModal';

export const ToDoList = () => {
  const {
    selectedDir: filter,
    list,
    filterList,
    onDelete,
    onFavorite,
    onComplete,
  } = useContext(TodoContext);
  const { handleModal } = useContext(ModalContext);

  const onItemClick = useCallback(
    (id: string) => {
      const item = list.filter((i) => i.id === id)[0];
      handleModal(<TodoModal item={item} />);
    },
    [list, handleModal]
  );

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {filterList.map((item) => (
          <ToDoListItem
            key={item.id}
            onItemClick={() => onItemClick(item.id)}
            onComplete={onComplete}
            onFavorite={onFavorite}
            onDelete={onDelete}
            item={item}
          />
        ))}
        <div className={styles.addNote} onClick={() => onItemClick('-1')}>
          Add Todo +
        </div>
      </div>
    </div>
  );
};
