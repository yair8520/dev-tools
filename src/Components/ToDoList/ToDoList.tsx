import React, { useCallback, useContext, useMemo, useState } from 'react';
import styles from './ToDoList.module.css';
import { ToDoListProps } from './ToDoListProps';
import { ToDoListItem } from './ToDoListItem';
import { TodoContext } from '../../Context/TodoContext/TodoContext';
import { ModalContext } from '../ModalContext/ModalContext';
import { TodoModal } from '../TodoModal';
import { emptyList, getFilterFunction } from '../../Helpers/Todo';
import { Text } from '../Text';

export const ToDoList = () => {
  const { list, onDelete, onFavorite, onComplete, selectedDir } =
    useContext(TodoContext);
    const arrayList = list ? Object.values(list) : [];

  const { handleModal } = useContext(ModalContext);
  const todoList = useMemo(() => {
    return getFilterFunction(selectedDir, arrayList);
  }, [selectedDir, list]);

  const onItemClick = useCallback(
    (id: string) => {
      const item = arrayList.filter((i) => i.id === id)[0];
      handleModal(<TodoModal item={item} />);
    },
    [list, handleModal]
  );
  const hideAddButton = ['Favorites', 'Complited',"All"];
  const Empty = () => {
    if (hideAddButton.includes(selectedDir) && todoList.length === 0) {
      return (
        <div className={styles.emptyList}>
          <Text
            style={{ whiteSpace: 'pre-line' }}
            dangerouslySetInnerHTML={{
              __html: emptyList[selectedDir as keyof object],
            }}
          />
        </div>
      );
    } else if (hideAddButton.includes(selectedDir)) {
      return null;
    }
    return (
      <div className={styles.addNote} onClick={() => onItemClick('-1')}>
        <Text> Add Task +</Text>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {todoList.map((item) => (
          <ToDoListItem
            key={item.id}
            onItemClick={() => onItemClick(item.id)}
            onComplete={onComplete}
            onFavorite={onFavorite}
            onDelete={onDelete}
            item={item}
          />
        ))}

        <Empty />
      </div>
    </div>
  );
};
