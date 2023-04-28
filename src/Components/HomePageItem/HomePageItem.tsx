import React from 'react';
import styles from './HomePageItem.module.css';
import { HomePageItemProps } from './HomePageItemProps';
import { Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';

export const HomePageItem = ({ item }: HomePageItemProps) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(item.href)} className={styles.container}>
      <div className={styles.content}>
        <div>
          <Typography variant="h5" component="h2">
            {item.headline}
          </Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            {item.description}
          </Typography>
        </div>
        <LaunchIcon />
      </div>
    </Card>
  );
};
