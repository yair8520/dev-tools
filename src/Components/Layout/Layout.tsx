import React from 'react';
import styles from './Layout.module.css';
import { LayoutProps } from './LayoutProps';

export const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.container}>{children}</div>;
};
