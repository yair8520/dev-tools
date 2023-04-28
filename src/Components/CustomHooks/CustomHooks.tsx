import React from 'react';
import styles from './CustomHooks.module.css';
import { HooksList } from '../HooksList';
import { Text } from '../Text';

export const CustomHooks = () => {
  return (
    <div className={styles.container}>
      <Text variant="h4" className={styles.headline}>
        Custom Hooks
      </Text>
      <HooksList />
    </div>
  );
};
