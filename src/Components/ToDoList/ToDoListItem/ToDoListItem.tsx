import React from 'react';
import styles from './ToDoListItem.module.css';
import { ToDoListItemProps } from './ToDoListItemProps';
import { Card } from '@mui/material';
import { Text } from '../../Text';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CIconButton } from '../../CIconButton';

export const ToDoListItem = ({ item, onItemClick }: ToDoListItemProps) => {
  const onItemPresssed = (func: Function) => (e: Event) => {
    e.stopPropagation();
    func();
  };
  return (
    <Card
      raised={true}
      sx={{ boxShadow: 5 }}
      className={styles.container}
      onClick={onItemClick}
    >
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
              onClick={onItemPresssed(() => console.log('Delete'))}
            >
              <FavoriteBorderIcon
                htmlColor={item.favorite ? 'red' : undefined}
              />
            </CIconButton>
            <CIconButton
              title={item.completed ? 'Done' : 'InProgress'}
              onClick={onItemPresssed(() => console.log('Delete'))}
            >
              <TaskAltIcon htmlColor={item.completed ? 'green' : 'orange'} />
            </CIconButton>
            <CIconButton
              title={'Delete'}
              onClick={onItemPresssed(() => console.log('Delete'))}
            >
              <DeleteOutlineIcon />
            </CIconButton>
          </div>
        </div>
      </div>
    </Card>
  );
};
