import React from 'react';
import styles from './ToDoListItem.module.css';
import { ToDoListItemProps } from './ToDoListItemProps';
import { Paper } from '@mui/material';
import { Text } from '../../Text';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CIconButton } from '../../CIconButton';

export const ToDoListItem = ({
  item,
  onItemClick,
  onComplete,
  onFavorite,
  onDelete,
}: ToDoListItemProps) => {
  const onItemPresssed = (func: Function) => (e: Event) => {
    e.stopPropagation();
    func(item.id);
  };
  return (
    <Paper className={styles.container} onClick={onItemClick}>
      <div className={styles.subContainer}>
        <div className={styles.content}>
          <Text className={styles.title}>{item.title}</Text>
          <Text className={styles.desc}>{item.desc}</Text>
        </div>
        <div className={styles.date}>
          <Text>{item.date}</Text>
          <ScheduleIcon />
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomButtons}>
            <CIconButton
              title={'Favorite'}
              onClick={onItemPresssed(onFavorite)}
            >
              <FavoriteBorderIcon
                htmlColor={item.favorite ? 'red' : undefined}
              />
            </CIconButton>
            <CIconButton
              title={item.completed ? 'Done' : 'InProgress'}
              onClick={onItemPresssed(onComplete)}
            >
              <TaskAltIcon htmlColor={item.completed ? 'green' : 'orange'} />
            </CIconButton>
            <CIconButton title={'Delete'} onClick={onItemPresssed(onDelete)}>
              <DeleteOutlineIcon />
            </CIconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};
