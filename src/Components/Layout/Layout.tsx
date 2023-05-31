import React, { useContext } from 'react';
import styles from './Layout.module.css';
import { LayoutProps } from './LayoutProps';
import { Container } from '@mui/material';
import { DrawerContext } from '../../Context/DrawerContext';

export const Layout = ({ children, color = undefined }: LayoutProps) => {
  const { isDrawerOpen, } = useContext(DrawerContext);

  return (
    <Container
      style={{ backgroundColor: color }}
      maxWidth={false}
      sx={{
        width: '100%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection:'column',
        transform: isDrawerOpen ? 'scale(0.835) translateX(-170px)' : 'none',
        transition: 'transform 0.8s cubic-bezier(.15, .2, .1, 1)',
        padding:0
      }}
      className={styles.container}
    >
      {children}
    </Container>
  );
};
