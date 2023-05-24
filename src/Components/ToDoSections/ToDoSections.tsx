import React, { useCallback, useMemo } from 'react';
import styles from './ToDoSections.module.css';
import { ToDoSectionsProps } from './ToDoSectionsProps';
import { Drawer, List } from '@mui/material';
import { DirItem } from './DirItem';

export const ToDoSections = ({ list, selectedDir, setSelectedDir }: ToDoSectionsProps) => {
  const dirs: Array<string> = useMemo(() => Array.from(new Set(list.map((item) => item.dir))), [list])
  const onItemClick = useCallback((dir: string) => {
    setSelectedDir(dir)
  }, [])
  return (
    <div className={styles.container}>
      <Drawer
        className={styles.drawer}
        anchor="left"
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            position: 'unset',
          },
        }}
      >
        <List>
          {dirs.map((dir) =>
          (<DirItem
            selectedDir={selectedDir === dir}
            onItemClick={onItemClick} key={dir} title={dir}
          />))}
        </List>
      </Drawer>
    </div>
  );
};
