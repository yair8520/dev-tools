import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static" style={{ padding: 0 }}>
      <Toolbar className={styles.container}>
        <div className={styles.logo}>
          <Link to={'/'} className={styles.link}>
            {'Dev-Tools'}
          </Link>
        </div>
        <div className={styles.links}>
          <Link to={'/json-formatter'} className={styles.link}>
            {'Json Formatter'}
          </Link>
          <Link to={'/diff-checker'} className={styles.link}>
            {'Diff Checker'}
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
