import React from 'react';
import styles from './ApiPage.module.css';

import { ApiTabs } from '../../Components/ApiTabs';
export const ApiPage = () => {
  return (
    <div className={styles.container}>
      <ApiTabs />
    </div>
  );
};
