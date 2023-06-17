import React from 'react';
import styles from './CustomHooks.module.css';
import { HooksList } from '../../Components/HooksList';

const CustomHooks = () => {
  return (
    <div className={styles.container}>
      <HooksList />
    </div>
  );
};
export default CustomHooks;
