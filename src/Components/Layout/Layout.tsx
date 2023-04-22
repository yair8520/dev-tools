import React from 'react';
import styles from './Layout.module.css';
import { LayoutProps } from './LayoutProps';
import { Container } from '@mui/material';

export const Layout = ({ children, color = undefined }: LayoutProps) => {
  return (
    <Container
      style={{ backgroundColor: color }}
      maxWidth={false}
      sx={{ width: '100%', alignSelf: 'center', display: 'flex', padding: 0 }}
      className={styles.container}
    >
      {children}
    </Container>
  );
};
