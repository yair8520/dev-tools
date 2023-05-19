import React from 'react';
import styles from './HomePage.module.css';
import { moreToCome, pages } from '../../Constant/Pages';
import { HomePageItem } from '../HomePageItem';
import { About } from '../About';

export const HomePage = () => {
  return (
    <div className={styles.gridContainer}>
      {pages.map((item) => (
        <HomePageItem key={item.href} item={item} />
      ))}
      <HomePageItem disabled key={moreToCome.href} item={moreToCome} />
      <About />
    </div>
  );
};
