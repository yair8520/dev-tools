import React, { useCallback, useContext, useState } from 'react';
import styles from './ToDoSections.module.css';
import { drawerProps, mobileDrawerProps } from './ToDoSectionsProps';
import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { DirItem } from './DirItem';
import { TodoContext } from '../../Context/TodoContext/TodoContext';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import FolderIcon from '@mui/icons-material/Folder';
import { defualtFolders } from './helper';
export const ToDoSections = ({
  isSmallScreen,
  setMobileOpen,
  mobileOpen,
}: any) => {
  const { selectedDir, setSelectedDir, dirs, setFilterList, list } =
    useContext(TodoContext);
  const [open, setOpen] = React.useState(true);
  const onItemClick = useCallback(({ dir, name = '' }: any) => {
    if (typeof dir === 'function') {
      return setFilterList(list.filter(dir));
    }
    return setSelectedDir(dir);
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
          {defualtFolders.map((dir) => (
            <DirItem
              Icon={dir.icon}
              selectedDir={selectedDir === dir.title}
              onItemClick={() =>
                onItemClick({ dir: dir.filterBy, name: dir.title })
              }
              key={dir.title}
              title={dir.title}
            />
          ))}
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Directories" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {dirs.map((dir) => (
              <DirItem
                selectedDir={selectedDir === dir}
                onItemClick={() => onItemClick({ dir })}
                key={dir}
                title={dir}
              />
            ))}
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
};
