import React, { useCallback, useContext, useMemo } from 'react';
import styles from './ToDoList.module.css';
import { ToDoListProps } from './ToDoListProps';
import { ToDoListItem } from './ToDoListItem';
import { TodoContext } from '../../Context/TodoContext';
import { ModalContext } from '../ModalContext/ModalContext';
import { TodoModal } from '../TodoModal';

export const ToDoList = () => {
  const { selectedDir: filter, list, addTodo } = useContext(TodoContext);
  const { handleModal } = useContext(ModalContext);

  const filterList = useMemo(() => {
    if (filter !== '') return list.filter((i) => i.dir === filter);
    return list;
  }, [filter, list]);

  const onItemClick = useCallback((id: string) => {
    const item = list.filter((i) => i.id === id)[0];
    handleModal(<TodoModal item={item} />);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {filterList.map((item) => (
          <ToDoListItem
            key={item.id}
            onItemClick={() => onItemClick(item.id)}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};
