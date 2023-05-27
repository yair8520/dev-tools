import React, { useCallback, useContext, useMemo, useState } from 'react';
import styles from './ToDoList.module.css';
import { ToDoListProps } from './ToDoListProps';
import { ToDoListItem } from './ToDoListItem';
import { TodoContext } from '../../Context/TodoContext/TodoContext';
import { ModalContext } from '../ModalContext/ModalContext';
import { TodoModal } from '../TodoModal';
import { TodoHeader } from '../TodoHeader';

export const ToDoList = () => {
  const {
    selectedDir: filter,
    list,
    addTodo,
    filterList,
  } = useContext(TodoContext);
  const { handleModal } = useContext(ModalContext);
  const [rowsFullWidth, setRowsFullWidth] = useState<boolean>(true);
  const onItemClick = useCallback((id: string) => {
    const item = list.filter((i) => i.id === id)[0];
    handleModal(<TodoModal item={item} />);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.grid}
        // style={{ flexDirection: rowsFullWidth ? 'row' : 'column' }}
      >
        {filterList.map((item) => (
          <ToDoListItem
            rowsFullWidth={rowsFullWidth}
            key={item.id}
            onItemClick={() => onItemClick(item.id)}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};
