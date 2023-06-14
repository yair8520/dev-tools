import React from 'react';
import styles from './DirItemButtons.module.css';
import { DirItemButtonsProps } from './DirItemButtonsProps';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export const DirItemButtons = ({dir}: DirItemButtonsProps) => {
  return (
    <div className={styles.container}>
      <IconButton edge="end" aria-label="edit">
        <EditIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
