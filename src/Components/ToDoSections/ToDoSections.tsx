import React, { useCallback, useContext, useState } from 'react';
import styles from './ToDoSections.module.css';
import { drawerProps, mobileDrawerProps } from './ToDoSectionsProps';
import {
  Button,
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
import { ModalContext } from '../ModalContext/ModalContext';
import { DirModal } from '../DirModal';
export const ToDoSections = ({
  isSmallScreen,
  setMobileOpen,
  mobileOpen,
}: any) => {
  const props = isSmallScreen ? mobileDrawerProps : drawerProps;
  const { selectedDir, dirs, setSelectedDir } = useContext(TodoContext);
  const { handleModal } = useContext(ModalContext);
  const [open, setOpen] = React.useState(true);
  const onItemClick = (dir: string) => {
    setSelectedDir(dir);
  };
  const openEditModal = () => {
    handleModal(<DirModal />);
  };
  return (
    <div className={styles.container}>
      <Drawer
        onClose={() => setMobileOpen(!mobileOpen)}
        open={mobileOpen}
        className={styles.drawer}
        {...props}
      >
        <Button
          variant="contained"
          className={styles.addSection}
          onClick={openEditModal}
        >
          Add Directory +
        </Button>
        <List>
          {defualtFolders.map((dir) => (
            <DirItem
              Icon={dir.icon}
              selectedDir={selectedDir === dir.title}
              onItemClick={() => onItemClick(dir.title)}
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
                onItemClick={() => onItemClick(dir)}
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
