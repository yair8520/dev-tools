import React, { useCallback, useMemo } from 'react';
import styles from './ToDoList.module.css';
import { ToDoListProps } from './ToDoListProps';
import { ToDoListItem } from './ToDoListItem';

export const ToDoList = ({ list, filter }: ToDoListProps) => {
  const filterList = useMemo(() => {
    if (filter !== "")
      return list.filter((i) => i.dir === filter)
    return list
  }, [filter])
  const onItemClick = useCallback(() => { console.log("asd") }, [])
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {filterList.map((item) => (
          <ToDoListItem key={item.id} onItemClick={onItemClick} item={item} />
        ))}
      </div>
    </div>
  );
};
