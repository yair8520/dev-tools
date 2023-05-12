import React from 'react';
import styles from './AddItem.module.css';
import { AddItemProps } from './AddItemProps';
import AddIcon from '@mui/icons-material/Add';

export const AddItem = ({ onAddItem }: AddItemProps) => {
  return (
    <div onClick={() => onAddItem()} className={styles.container}>
      <AddIcon sx={{ width: "100px", height: "100px" }} color="primary" />
    </div>
  );
};
