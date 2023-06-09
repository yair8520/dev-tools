import React, { useState } from 'react';
import styles from './ToDoPage.module.css';
import { ToDoSections } from '../../Components/ToDoSections';
import { ToDoList } from '../../Components/ToDoList';
import { Fab, useMediaQuery } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const ToDoPage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [mobileOpen, setMobileOpen] = useState<boolean>(!isSmallScreen);
  return (
    <div className={styles.container}>
      {isSmallScreen && (
        <Fab
          className={styles.menuButton}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuOpenIcon />
        </Fab>
      )}
      <ToDoSections
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        isSmallScreen={isSmallScreen}
      />
      <ToDoList />
    </div>
  );
};
export default ToDoPage;
