import React from 'react';
import styles from './DirItem.module.css';
import { DirItemProps } from './DirItemProps';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { text } from 'stream/consumers';

export const DirItem = ({ title, onItemClick, selectedDir }: DirItemProps) => {
  return (
    <ListItem key={title} disablePadding>
      <ListItemButton selected={selectedDir} onClick={() => onItemClick(title)}>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
