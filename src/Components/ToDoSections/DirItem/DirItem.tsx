import React from 'react';
import styles from './DirItem.module.css';
import { DirItemProps } from './DirItemProps';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const DirItem = ({
  title,
  onItemClick,
  selectedDir,
  Icon,
  secondaryAction,
}: DirItemProps) => {
  return (
    <ListItem secondaryAction={secondaryAction} key={title} disablePadding>
      <ListItemButton selected={selectedDir} onClick={() => onItemClick(title)}>
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
