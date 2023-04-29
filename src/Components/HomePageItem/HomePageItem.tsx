import React from 'react';
import styles from './HomePageItem.module.css';
import { HomePageItemProps } from './HomePageItemProps';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import { Text } from '../Text';

export const HomePageItem = ({ item }: HomePageItemProps) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(item.href)} className={styles.container}>
      <div className={styles.content}>
        <div>
          <Text variant="h5" component="h2">
            {item.headline}
          </Text>
          <Text sx={{ mt: 1 }} color="text.secondary">
            {item.description}
          </Text>
        </div>
        <LaunchIcon />
      </div>
    </Card>
  );
};
