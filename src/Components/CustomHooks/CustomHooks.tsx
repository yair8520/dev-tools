import React from 'react';
import styles from './CustomHooks.module.css';
import { HooksList } from '../HooksList';

export const CustomHooks = () => {
  return (
    <div className={styles.container}>
      <HooksList />
    </div>
  );
};
