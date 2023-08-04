import React from 'react';
import styles from './HomePage.module.css';
import { moreToCome, pages, welcomeMessage } from '../../Constant/Pages';
import { HomePageItem } from '../../Components/HomePageItem';
import { About } from '../../Components/About';
import { Text } from '../../Components/Text';
import { Avatar, Card } from '@mui/material';
import avatarImage from '../../Assests/Images/avatar.png';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Text
        style={{ alignSelf: 'center', textAlign: 'center' }}
        padding={'25px'}
        variant="h3"
        bold
        className={'gradientText'}
      >
        Welcome
      </Text>
      <Text className={styles.welcome} variant="body1">
        {welcomeMessage}
      </Text>
      <Card elevation={2} className={styles.wrapper}>
        <div className={styles.gridContainer}>
          {pages.map((item) => (
            <HomePageItem key={item.href} item={item} />
          ))}
          <HomePageItem disabled key={moreToCome.href} item={moreToCome} />
        </div>
      </Card>
      <About />
      <div className={styles.madeBy}>
        <Text variant={'h6'} className={'gradientText'}>Created By Yair Gabay</Text>
        <Avatar sx={{ width: 30, height: 30 }} src={avatarImage} />
      </div>
    </div>
  );
};
