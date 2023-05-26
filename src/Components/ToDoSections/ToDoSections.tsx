import React, { useCallback, useContext, useState } from 'react';
import styles from './ToDoSections.module.css';
import { drawerProps, mobileDrawerProps } from './ToDoSectionsProps';
import { Drawer, List, useMediaQuery } from '@mui/material';
import { DirItem } from './DirItem';
import { TodoContext } from '../../Context/TodoContext';
export const ToDoSections = ({
  isSmallScreen,
  setMobileOpen,
  mobileOpen,
}: any) => {
  const { selectedDir, setSelectedDir, list, listOfDirs } =
    useContext(TodoContext);
  const onItemClick = useCallback((dir: string) => {
    setSelectedDir(dir);
  }, []);
  const props = isSmallScreen ? mobileDrawerProps : drawerProps;
  return (
    <div className={styles.container}>
      <Drawer
        onClose={() => setMobileOpen(!mobileOpen)}
        open={mobileOpen}
        className={styles.drawer}
        {...props}
      >
        <List>
          {listOfDirs.map((dir) => (
            <DirItem
              selectedDir={selectedDir === dir}
              onItemClick={onItemClick}
              key={dir}
              title={dir}
            />
          ))}
        </List>
      </Drawer>
    </div>
  );
};
