import React from 'react';
import styles from './ApiPage.module.css';

import { ApiTabs } from '../../Components/ApiTabs';
import { ApiContext } from '../../Context/ApiContext';
export const ApiPage = () => {
  return (
    <div className={styles.container}>
      <ApiContext>
        <ApiTabs />
      </ApiContext>
    </div>
  );
};
