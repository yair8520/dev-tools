import React from 'react';
import styles from './HomePage.module.css';
import { moreToCome, pages, welcomeMessage } from '../../Constant/Pages';
import { HomePageItem } from '../HomePageItem';
import { About } from '../About';
import { Text } from '../Text';

export const HomePage = () => {
  return (
    <div className={styles.gridContainer}>
      <Text
        style={{ alignSelf: 'center', textAlign: 'center' }}
        padding={'25px'}
        variant="h6"
      >
        Welcome
        <div className={styles.separator} />
      </Text>
      <Text className={styles.welcome} variant="body1">
        {welcomeMessage}
      </Text>
      {pages.map((item) => (
        <HomePageItem key={item.href} item={item} />
      ))}
      <HomePageItem disabled key={moreToCome.href} item={moreToCome} />
      <Text className={styles.madeBy}>Created By Yair Gabay </Text>
      <About />
    </div>
  );
};
