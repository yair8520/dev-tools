import React from 'react';
import styles from './HomePage.module.css';
import { moreToCome, pages, welcomeMessage } from '../../Constant/Pages';
import { HomePageItem } from '../HomePageItem';
import { About } from '../About';
import { Text } from '../Text';
import { Avatar } from '@mui/material';
import avatarImage from '../../Assests/Images/avatar.png';

export const HomePage = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.gridContainer}>
        {pages.map((item) => (
          <HomePageItem key={item.href} item={item} />
        ))}
        <HomePageItem disabled key={moreToCome.href} item={moreToCome} />
      </div>
      <About />
      <div className={styles.madeBy}>
        <Text>Created By Yair Gabay</Text>
        <Avatar sx={{ width: 30, height: 30 }} src={avatarImage} />
      </div>
    </div>
  );
};
