import React from 'react';
import styles from './ToDoSections.module.css';
import { ToDoSectionsProps } from './ToDoSectionsProps';
import { Drawer } from '@mui/material';

export const ToDoSections = ({}: ToDoSectionsProps) => {
  return (
    <div className={styles.container}>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            position: 'unset',
          },
        }}
      >
        <div>asdasd</div>
      </Drawer>
    </div>
  );
};
