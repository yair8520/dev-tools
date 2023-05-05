import React from 'react';
import styles from './LayoutWithSideMenu.module.css';
import { LayoutWithSideMenuProps } from './LayoutWithSideMenuProps';
import { useMediaQuery } from '@mui/material';

export const LayoutWithSideMenu = ({
  Left,
  Right,
}: LayoutWithSideMenuProps) => {
  const isSmallScreen = useMediaQuery('(max-width: 500px)');

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div
          style={{
            width: !isSmallScreen ? '80%' : '90%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {<Left />}
        </div>
        {!isSmallScreen && (
          <div className={styles.right}>
            <Right />
          </div>
        )}
      </div>
    </div>
  );
};
