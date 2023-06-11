import React from 'react';
import styles from './AddItem.module.css';
import { AddItemProps } from './AddItemProps';
import AddIcon from '@mui/icons-material/Add';

export const AddItem = ({ onAddItem }: AddItemProps) => {
  return (
    <div onClick={() => onAddItem()} className={styles.container}>
      <AddIcon
        sx={{ width: '80px', height: '80px', border: '2px dashed #90caf9',borderRadius:'16px' }}
        color="primary"
      />
    </div>
  );
};
