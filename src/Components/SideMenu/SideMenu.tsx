import React from 'react';
import styles from './SideMenu.module.css';
import { SideMenuProps } from './SideMenuProps';
import { Text } from '../Text';
import { Link } from '@mui/material';
import { scrollTo } from '../../Helpers/Scroll';

export const SideMenu = ({ items }: SideMenuProps) => {
  return (
    <div className={styles.container}>
      <Text variant="h6"> On This Page</Text>
      {items.map((item, i) => (
        <div key={item + i} className={styles.item}>
          <Link className={styles.link} onClick={() => scrollTo({ id: item })}>{item}</Link>
        </div>
      ))}
    </div>
  );
};
