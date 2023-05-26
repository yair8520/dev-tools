import React from 'react';
import styles from './DirItem.module.css';
import { DirItemProps } from './DirItemProps';
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export const DirItem = ({ title, onItemClick, selectedDir }: DirItemProps) => {
  return (
    <ListItem key={title} disablePadding>
      <ListItemButton selected={selectedDir} onClick={() => onItemClick(title)}>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
