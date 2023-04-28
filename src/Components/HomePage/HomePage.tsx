import React from 'react';
import styles from './HomePage.module.css';
import { pages } from '../../Constant/Pages';
import { HomePageItem } from '../HomePageItem';

export const HomePage = () => {
  return (
    <div className={styles.gridContainer}>
      {pages.map((item) => (
        <HomePageItem key={item.href} item={item} />
      ))}
    </div>
  );
};
