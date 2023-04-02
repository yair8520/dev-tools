import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import {} from 'react-router-dom';
import styles from './Header.module.css';
import { Text } from '../Text';

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar className={styles.container}>
        <Text className={styles.link} variant="h6">
          {'Dev-Tools'}
        </Text>
        <Text className={styles.link} variant="h6">
          {'Link'}
        </Text>
      </Toolbar>
    </AppBar>
  );
};
