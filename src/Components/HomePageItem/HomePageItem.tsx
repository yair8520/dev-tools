import React from 'react';
import styles from './HomePageItem.module.css';
import { HomePageItemProps } from './HomePageItemProps';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import { Text } from '../Text';

export const HomePageItem = ({ item, disabled = false }: HomePageItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => !disabled && navigate(item.href)}
      className={`${styles.border} ${disabled ? styles.disabled : ''}`}
    >
      <Card  elevation={10} className={styles.container}>
        <div className={styles.content}>
          <>
            <Text variant="h5" component="h2">
              {item.headline}
            </Text>
            <Text sx={{ mt: 1 }} className={styles.desc} color="text.secondary">
              {item.description}
            </Text>
          </>
          {!disabled && (
            <div className={styles.launch}>
              <LaunchIcon />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
